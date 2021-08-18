import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(4),
    // paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
    },
}));

export const Footer: React.FC = (props) => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Box mt={0}>
                <Typography variant="h6" color="secondary" align="center" style={{marginTop: '20px', color: 'white'}}>
                    Made with <span >&#10084;</span> by <a href="https://github.com/iamutkarsh23" style={{color: 'white'}}>Utkarsh</a>,{' '}
                    <a href="https://github.com/shreypdev" style={{color: 'white'}}>Shrey</a> and Ayham                    
                </Typography>            
            </Box>
        </Container>    
    );
}