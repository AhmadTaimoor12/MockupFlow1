import { makeStyles } from '@material-ui/core';
import React from 'react'
export default function Description() {
    const useStyles = makeStyles((theme) => ({
        root: {
          color:'#2699fb',
          textAlign:'left',
          margin: "7%"
        },
        toolbar: {
          minHeight: 100,
          alignItems: 'flex-start',
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(2),
        },
        heading:{
          marginBottom: "8%"
        },
        paragraph:{
          marginRight: "25%",
          marginBottom:'9%'
        }
      }));
      const classes=useStyles()
    return (
        <div className={classes.root}>
            <h1 className={classes.heading}>Setting up account</h1>
            <p className={classes.paragraph}>dasdasd asdsad asda sdasgh htty hthy thythyth tyh ythtyh yth tyhyt ythythythyt hythyth</p>
            <p>dasdasdsadasdas sdffs fds fds f dsf sdf sd fds f sd fsdf</p>
            <p>dasdasdsadasdas sdffs fds fds f dsf sdf sd fds f sd fsdf</p>
        </div>
    )
}
