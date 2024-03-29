import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ReactWordcloud from 'react-wordcloud';
import { TextField, Typography, Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ImageGallery from 'react-image-gallery';
import { Modal } from 'react-responsive-modal';
import { roundsMap } from './Rounds';
import 'react-responsive-modal/styles.css';
import { GameStatus } from '../models/Game';
import './GamePage.css';

const useStyles = makeStyles((theme) => ({
    
    box: {
        borderRadius: "30px",
        height: "1000px",
        marginTop: "10px",
        // backgroundColor: '#FF9051',
        padding: '20px !important',
        marginBottom: '190px'
    },
    intro: {
        marginTop: "50px",
    },
    answerGrid: {
        padding: "50px !important"
    },
    wordCloudGrid: {
        backgroundColor: '#FFF',
        borderRadius: "20px",
        height: "300px",
        // marginTop: "9px",
        // margin: '0px'
        padding: '5px'
    },
    buttonArea: {
        display: 'flex', 
        marginTop: '10px'
    },
    backButton: {
        borderRadius: '20px',
        backgroundColor: '#000',
    },
    nextButton: {
        marginLeft: "auto",
        borderRadius: '20px',
        backgroundColor: '#000'
    },
    answerText: {
        color: 'white'
    },
    imageGallery: {
        display: 'flex',
        justifyContent: 'center'
    }
    
}));

const options: CustOpt = {
    deterministic: true,
    spiral: 'rectangular',
    fontSizes: [Number(35),Number(60)],
    rotations: 100,
}

type CustOpt = {
    deterministic: boolean
    spiral: 'archimedean' | 'rectangular';
    fontSizes: [number, number],
    rotations: number
}

export type Model = {
    setCurrentStatus: any,
    name: string,
    setCorrectWords: any,
    correctWords: number,
  }
  
export const GamePage: React.FC<Model> = (props: Model) => {
    const classes = useStyles();
    const {setCurrentStatus, name, correctWords, setCorrectWords} = props;
    const [successModal, setSuccessModal] = useState(false);
    const onOpenSuccessModal = () => setSuccessModal(true);
    const onCloseSuccessModal = () => setSuccessModal(false);

    const [dangerModal, setDangerModal] = useState(false);
    const onOpenDangerModal = () => setDangerModal(true);
    const onCloseDangerModal = () => setDangerModal(false);
    const [answer, setAnswer] = useState('');

    const [currentRound, setCurrRound] = useState(0)

    const submitHandler = () => {

        if(answer.trim().toLowerCase() === roundsMap[currentRound].correctSpelling.toLowerCase()){
            onOpenSuccessModal();
        } else {
            onOpenDangerModal();
        }
    }

    const moveToNextRound = () => {
        onCloseSuccessModal();
        setAnswer('');
        setCorrectWords(correctWords+ 1);
        if(currentRound !== roundsMap.length - 1){
            setCurrRound(currentRound + 1)
        } else {
            setCurrentStatus(GameStatus.GAME_OVER)
        }
    }

    const skipToNextRound = () => {
        setAnswer('');
        if(currentRound !== roundsMap.length - 1){
            setCurrRound(currentRound + 1)
        } else {
            setCurrentStatus(GameStatus.GAME_OVER)
        }
    }

    const onChangeAnswerHandler = (e: any) => {
        setAnswer(e.target.value);
        if (e.keyCode === 13) {
            submitHandler();
        }
    }

    return (
        <React.Fragment>
            <Modal open={successModal} onClose={onCloseSuccessModal} center>
                <h2>Amazing! You got it! Move to next</h2>
                <Button variant="contained" color="primary" size='large' className={classes.nextButton} endIcon={<NavigateNextIcon />} onClick={moveToNextRound}>
                    Next
                </Button>
            </Modal>
            <Modal open={dangerModal} onClose={onCloseDangerModal} center>
                <h2>Not quite right!</h2>
                <br/>
                <h4>Try again!!</h4>
            </Modal>
        
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item >
                        <Typography component="h4" variant="h4" align="left" className={classes.answerText} gutterBottom>
                            {name}, Let's play a game! I'll show you some photos and the spelling of the object in the photo. Let's see if you can guess it!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.imageGallery}>
                        <ImageGallery items={roundsMap[currentRound].images} 
                        infinite
                        showFullscreenButton 
                        thumbnailPosition='right'/>
                    </Grid>
                    <Grid item container xs={12} >
                        <Grid item xs={5} className={classes.wordCloudGrid}>
                            <ReactWordcloud words={roundsMap[currentRound].words} options={options}/>
                        </Grid>
                        <Grid item xs={7} className={classes.answerGrid}>
                            <Typography component="h3" variant="h3" align="left" className={classes.answerText} gutterBottom>
                                Can you spell it right?
                            </Typography>
                            <TextField 
                                id="answer" 
                                label="Your answer" 
                                margin="normal"
                                required
                                fullWidth
                                value={answer}
                                autoFocus
                                onChange={(e)=> setAnswer(e.target.value)}
                                onKeyUp={(e: any) => onChangeAnswerHandler(e)}
                            />
                            <div className={classes.buttonArea}>
                                <Button variant="contained" color="primary" size='large' className={classes.backButton} onClick={()=>skipToNextRound()}>
                                    Skip
                                </Button>
                                <Button variant="contained" color="primary" size='large' className={classes.nextButton} endIcon={<NavigateNextIcon />}  onClick={()=>submitHandler()}>
                                    Submit
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                    

                </Grid>
            </div>

        </React.Fragment>
    )
}