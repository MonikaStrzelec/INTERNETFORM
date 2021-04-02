import React, { useEffect, useState } from "react";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topAppBar: {
    Height: "80vh",
    minHeight: "200px",
  },
  toolbar: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [timer, setTimer] = useState(300);

useEffect(() => {
    setInterval(timerTime, 1000); //trzeba to jakoś przerwać,,, bo useEffect tylko raz jest wywo
  }, []);

  const padTime = time => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const format = time => {
    if(time >0 ){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${padTime(seconds)}`;
  } else{
    return "Przerwanie wypełniania formularza z powodu przekroczenia czasu oczekiwania";
  }
  };

  const timerTime = () => {
    setTimer((prev) => prev - 1);
  };

  return (
    <AppBar
      position="static"
      elevation={10}
      component="footer"
      color="default"
      className={classes.topAppBar}
    >
      <Toolbar className={classes.toolbar}>
        <Grid alignItems="flex-end" justify="center">
        <Typography variant="h6">Pozostało ci:</Typography>
          {format(timer)}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
