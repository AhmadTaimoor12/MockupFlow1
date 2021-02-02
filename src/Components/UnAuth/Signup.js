import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Description from "../Description";
import ProfileForm from "../Auth/Signup/ProfileForm";
const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    form: {
     
    },
    description: {
      background: '#f1f9ff',
      height:'850px'
    }
  }));
  
export default function Index() {
    const classes=useStyles()
  return (
    <div>
      <Grid container>
        <Grid container item md={6} xs={12} className={classes.form}>
            <ProfileForm/>
        </Grid>
        <Grid container item md={6} xs={12} className={classes.description}>
          <Description />
        </Grid>
      </Grid>
    </div>
  );
}
