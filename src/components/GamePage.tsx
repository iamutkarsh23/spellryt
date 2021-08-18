import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import ReactWordcloud from 'react-wordcloud';
import { TextField, Typography, Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ImageGallery from 'react-image-gallery';

const useStyles = makeStyles((theme) => ({
    
    box: {
        borderRadius: "30px",
        height: "1000px",
        marginTop: "50px",
        backgroundColor: '#FF9051',
        padding: '20px !important',
        marginBottom: '50px',
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
        display: 'none'
    },
    nextButton: {
        marginLeft: "auto",
        borderRadius: '20px',
        backgroundColor: '#000'
    },
    answerText: {
        color: 'white'
    }
    
}));

const words = [
{
    text: 'C',
    value: 100,
},
{
    text: 'Y',
    value: 100,
},
{
    text: 'C',
    value: 100,
},
{
    text: 'L',
    value: 100,
},
{
    text: 'E',
    value: 100,
},
{
    text: 'E',
    value: 100,
},
{
    text: 'E',
    value: 100,
},
{
    text: 'E',
    value: 100,
},
{
    text: 'E',
    value: 100,
},
{
    text: 'E',
    value: 100,
},
]

const options: CustOpt = {
    // deterministic: true,
    spiral: 'rectangular',
    fontSizes: [Number(35),Number(60)],
    rotations: 100,
}

type CustOpt = {
    spiral: 'archimedean' | 'rectangular';
    fontSizes: [number, number],
    rotations: number
}
const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  
export const GamePage = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                        {/* <img src="https://leoncycle.ca/media/wysiwyg/T720_1.jpg" alt="dfss" height={'300px'} style={{borderRadius: '20px'}}/> */}
                        <ImageGallery items={images} 
                        infinite
                        showFullscreenButton 
                        thumbnailPosition='right'/>
                    </Grid>
                    <Grid item container xs={12} 
                    // className={classes.answerGrid}
                    >
                        <Grid item xs={5} className={classes.wordCloudGrid}>
                            <ReactWordcloud words={words} options={options}/>
                        </Grid>
                        <Grid item xs={7} className={classes.answerGrid}>
                            <Typography component="h3" variant="h3" align="left" className={classes.answerText} gutterBottom>
                                Can you spell it right?
                            </Typography>
                            <TextField 
                                id="name" 
                                label="Your answer" 
                                margin="normal"
                                required
                                fullWidth
                                // error={errorText ? true : false}
                                // helperText={errorText}
                                autoFocus
                                // onChange={(e)=> onInputChange(e.target.value)}
                            />
                            <div className={classes.buttonArea}>
                                <Button variant="contained" color="primary" size='large' className={classes.backButton} startIcon={<NavigateBeforeIcon />}  >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" size='large' className={classes.nextButton} endIcon={<NavigateNextIcon />}  >
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