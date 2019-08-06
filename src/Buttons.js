import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ReloadIcon from '@material-ui/icons/Update'
import IgIcon from '@material-ui/icons/Camera'
import TwitterIcon from '@material-ui/icons/Share'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function ButtonRow(props) {
    const classes = useStyles();
        return (
            <div id='button-row'>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Button id='tweet-quote' onClick={() => props.shareTweet()}>
                            Twitter
                            <TwitterIcon />
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Button disabled>
                            Instagram
                            <IgIcon />
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Button id='new-quote' onClick={() => {props.getRandomQuote(); document.getElementById('bg').style.background='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);}}>
                            New Quote
                            <ReloadIcon className={classes.rightIcon} />
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            </div>
        )
    }

export default ButtonRow;