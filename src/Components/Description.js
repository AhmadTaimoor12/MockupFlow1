import { makeStyles } from '@material-ui/core';
import React from 'react'
export default function Description() {
    const useStyles = makeStyles((theme) => ({
        root: {
          color:'#2699fb',
        },
        toolbar: {
          minHeight: 100,
          alignItems: 'flex-start',
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(2),
        },
        heading:{
            padding:'3%'
        }
      }));
      const classes=useStyles()
    return (
        <div className={classes.root}>
            <h1 className={classes.heading}>Setting up account</h1>
        </div>
    )
}
