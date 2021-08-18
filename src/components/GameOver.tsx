import React from 'react';
import { Container, makeStyles, Typography, Button } from '@material-ui/core';
import { GameStatus } from '../models/Game';

type Model = {
    setCurrentStatus: any;
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
    const {setCurrentStatus} = props;
    return (
        <React.Fragment>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="left" color="textPrimary" className={classes.nameTextField} gutterBottom>
                    That was awesome! &#127881;
                </Typography>
                <Typography component="h1" variant="h4" align="left" color="textPrimary" className={classes.nameTextField} gutterBottom>
                    You spelled all of the words right. You're ready for your spelling test!
                </Typography>

                <Button variant="contained" color="primary" size='large' className={classes.nextButton} onClick={()=> setCurrentStatus(GameStatus.STARTED)}>
                    Play again
                </Button>
            </Container>
        </React.Fragment>
    )
}