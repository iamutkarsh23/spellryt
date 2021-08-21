import { AppBar, Container, CssBaseline, Link, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InstructionsPage } from '../components/InstructionPage';
import { GameStatus } from '../models/Game';
import { NamePage } from '../components/NamePage';
import { GamePage } from '../components/GamePage';
import { GameOver } from '../components/GameOver';
import { Footer } from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    container: {
      padding: '0 30px',
    },
    
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
      display: 'flex',
      cursor: 'pointer'
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
  }));

export const SpellRyt = () => {
    const classes = useStyles();

    const [currentStatus, setCurrentStatus] = useState<GameStatus>(GameStatus.STARTED);
    const [name, setName] = useState('');
    const [correctWords, setCorrectWords] = useState(0);


    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} onClick={()=>setCurrentStatus(GameStatus.NOT_STARTED)} >
                    EDCI 337 - Interactive and Multimedia Learning
                </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" href="mailto:mindutkarsh@gmail.com" className={classes.link}>
                    Contact us
                    </Link>
                </nav>
                </Toolbar>
            </AppBar>
            <Container className={classes.container}>
                {currentStatus === GameStatus.NOT_STARTED 
                ? <InstructionsPage setCurrentStatus={setCurrentStatus}/>
                : currentStatus === GameStatus.STARTED
                ? <NamePage setCurrentStatus={setCurrentStatus} name={name} setName={setName} />
                : currentStatus === GameStatus.GAME_IN_PROGRESS 
                ? <GamePage setCurrentStatus={setCurrentStatus} name={name} correctWords={correctWords} setCorrectWords={setCorrectWords}></GamePage>
                : <GameOver setCurrentStatus={setCurrentStatus} correctWords={correctWords} setCorrectWords={setCorrectWords}/>}
            </Container>
            <Footer />
        </React.Fragment>
    )
}