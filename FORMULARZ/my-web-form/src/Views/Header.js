import React from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    topAppBar: {
        Height: "40vh",
        minHeight: "200px"
    },
    toolbar: {
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}));

const HeaderForm = ({ title}) => {
    const classes = useStyles();

    return (
        <AppBar position="static" elevation={0} color="default" className={classes.topAppBar}>
            <Toolbar className={classes.toolbar}>
                <Grid container item direction="center" alignItems="center">
                    <h2>FORMULARZ WEBOWY</h2>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderForm;