import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Description from "../../Description";
import Form from './Form'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  form: {
    background: "#f1f9ff",
    height: "850px",
  },
  description: {
    background: "#f1f9ff",
    height: "850px",
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <div>
      <Grid container >
        <Grid container item md={6} xs={12} className={classes.form}>
         <Form/>  
        </Grid>
        <Grid
          container
          item
          md={6}
          xs={12}
          className={classes.description}
        >
            <Description/>
        </Grid>
      </Grid>
    </div>
  );
}