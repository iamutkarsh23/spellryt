import React from 'react';
import { Container, makeStyles, Typography, Button } from '@material-ui/core';
import { GameStatus } from '../models/Game';

type Model = {
    setCurrentStatus: any;
    setCorrectWords: any;
    correctWords: number;
}

const useStyles = makeStyles((theme) => ({
    
    heroContent: {
        padding: theme.spacing(8, 4, 8),
    },
    nameTextField: {
        color: 'white',
    }, 
    marginBetween: {
        marginTop: '35px'
    },
    nextButton: {
        marginTop: '30px',
        borderRadius: '20px',
        backgroundColor: '#000',
        display: 'block'
      },
}));

export const GameOver: React.FC<Model> = (props) => {
    const classes = useStyles();
    const {setCurrentStatus, setCorrectWords, correctWords} = props;
    const playAgain = () => {
        setCorrectWords(0);
        setCurrentStatus(GameStatus.STARTED);
    }

    const feedbackMap: {[key: number]: string} = {
        0: "Try Again!",
        1: "Try Again!",
        2: "Try Again!",
        3: "Try Again!",
        4: "Good try!",
        5: "Almost there!",
        6: "Almost there!",
        7: "Almost there!",
        8: "Amazing work!",
        9: "Amazing work!",
        10: "That was awesome!",
    }
    return (
        <React.Fragment>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="left" color="textPrimary" className={classes.nameTextField} gutterBottom>
                    {feedbackMap[correctWords]} &#127881;
                </Typography>
                <Typography component="h1" variant="h4" align="left" color="textPrimary" className={classes.nameTextField} gutterBottom>
                    You spelled {correctWords} words out of 10 correctly. 
                </Typography>

                <Button variant="contained" color="primary" size='large' className={classes.nextButton} onClick={()=> playAgain()}>
                    Play again
                </Button>
            </Container>
        </React.Fragment>
    )
}