import { TextField } from '@material-ui/core';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { Dispatch, SetStateAction, useState } from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { GameStatus } from '../models/Game';

const useStyles = makeStyles((theme) => ({
    
    heroContent: {
      padding: theme.spacing(8, 0, 35),
    },
    nameTextField: {
      marginTop: '30px',
      color: 'white',
    }, 
    buttons: {
      display: 'flex', 
      marginTop: '40px'
    },
    nextButton: {
      marginLeft: "auto",
      borderRadius: '20px',
      backgroundColor: '#000',
    },
    backButton: {
        borderRadius: '20px',
        backgroundColor: '#000',
    },
  }));


export type Model = {
  setCurrentStatus: Dispatch<SetStateAction<GameStatus>>,
  setName: (value: string) => void,
  name: string
}

export const NamePage: React.FC<Model> = (props: any) => {
  const classes = useStyles();
  const { setCurrentStatus, name, setName } = props;

  const [errorText, setErrorText] = useState('');

  const nextButtonHandler = () => {
    if(name){
      setCurrentStatus(GameStatus.GAME_IN_PROGRESS);
      // setCurrentStatus(GameStatus.TRIALS_OF_GRAPHS);
    }
    else {
      setErrorText('Please enter your name to continue!')
    }
  }

  const onInputChange = (val: string) => {
    setErrorText('');
    setName(val);
  }
  
  return (
      <>
          <Container maxWidth="sm" component="main" className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="left" color="textPrimary" className={classes.nameTextField} gutterBottom>
                  What's your name?
              </Typography>
              <TextField 
                  id="name" 
                  label="Name" 
                  margin="normal"
                  required
                  fullWidth
                  error={errorText ? true : false}
                  helperText={errorText}
                  autoFocus
                  onChange={(e)=> onInputChange(e.target.value)}
              />
              <div className={classes.buttons}>
                <Button variant="contained" color="primary" size='large' className={classes.backButton} startIcon={<NavigateBeforeIcon />} onClick={()=>setCurrentStatus(GameStatus.NOT_STARTED)} >
                    Back
                </Button>
                <Button variant="contained" color="primary" size='large' className={classes.nextButton} endIcon={<NavigateNextIcon />} onClick={()=>nextButtonHandler()} >
                    Next
                </Button>
              </div>
          </Container>
      </>
  )
}