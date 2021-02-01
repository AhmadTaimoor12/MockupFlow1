import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    background:'#2699fb'
  },
  toolbar: {
    minHeight: 100,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  navLinks:{
    padding:'2%',
    cursor:'pointer'
  },
  signup:{
    color: 'white',
    border: 'white solid 1px',
    width:'7%',
    margin: '16px',
    padding: '1%',
    marginLeft: '6%'
  },
}));

export default function NavBar() {
  const classes = useStyles();
    let navLinkArr=['FEED','AUTHORS','EXPLORE','BLOG','CONTACT']
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: '#2699fb' }}>
        <Toolbar className={classes.toolbar}>          
          <div className={classes.grow} />
          {navLinkArr.map(item=>(
          <Typography key={item} className={classes.navLinks} noWrap>
              {item}
         </Typography>
          ))}
          <Button variant="outlined" color="default"  className={classes.signup}>
            Sign Up
          </Button>
         </Toolbar>
      </AppBar>
    </div>
  );
}