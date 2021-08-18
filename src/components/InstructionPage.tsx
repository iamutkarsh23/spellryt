import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { GameStatus } from '../models/Game';

const useStyles = makeStyles((theme) => ({
    
    heroContent: {
      padding: theme.spacing(8, 0, 35),
    },
    btn: {
        borderRadius: '20px',
        backgroundColor: '#000',
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
              An interactive game for you to <i style={{color: 'white'}}>brush up on your spelling skills!</i>
              <br />
              Guess the <i style={{color: 'white'}}>ryt</i> spelling of <i style={{color: 'white'}}>things around you!</i>
            </Typography>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
                <Button variant="contained" color="primary" size='large' className={classes.btn}
                  onClick={() => setCurrentStatus(GameStatus.STARTED)}
                >
                Start spelling
                </Button>
            </div>
        </Container>

        
      </>
    )
}