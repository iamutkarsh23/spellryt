import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { Dispatch, SetStateAction } from 'react';
import { GameStatus } from '../models/Game';

const useStyles = makeStyles((theme) => ({
    
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    
}));

export type Model = {
    setCurrentStatus: any
}

export const InstructionsPage: React.FC<Model> = (props: any) => {
    const classes = useStyles();
    const {setCurrentStatus} = props;

    return (
      <>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Spell Ryt
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
            An interactive game for you to brush up on your spelling skills
            </Typography>
        </Container>

        <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="contained" color="primary" size='large'
                  onClick={() => setCurrentStatus(GameStatus.STARTED)}
                >
                Start spelling
                </Button>
        </div>
      </>
    )
}