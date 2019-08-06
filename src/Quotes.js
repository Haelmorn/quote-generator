import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


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

function QuoteDisplay(props) {
    const classes = useStyles();
        return (
            <div>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1 id='quote'><cite>{props.quotes[props.quoteIndex]['quote']}</cite></h1>
                        <h2 id="author">{props.quotes[props.quoteIndex]['author']}</h2>
                    </Paper>
                </Grid>
        </div>
        )
    }

export default QuoteDisplay;