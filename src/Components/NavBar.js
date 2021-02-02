import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    background: "#2699fb",
  },
  toolbar: {
    minHeight: 100,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  toolbarSmall: {
    minHeight: 50,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    width: "21%",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  navLinks: {
    padding: "2%",
    cursor: "pointer",
  },
  signupSmall: {
    color: "white",
    border: "white solid 1px",
    margin: "16px",
    marginLeft: "6%",
    left: "40%",
  },
  signup: {
    color: "white",
    border: "white solid 1px",
    width: "7%",
    margin: "16px",
    padding: "1%",
    marginLeft: "6%",
  },
}));
function NavBar({ history }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (screenWidth !== window.innerWidth) {
        setScreenWidth(window.innerWidth);
      }
    });
  }, [window.innerWidth]);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  let navLinkArr = ["FEED", "AUTHORS", "EXPLORE", "BLOG", "CONTACT"];
  console.log(history);
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: "#2699fb" }}>
        <Toolbar
          className={
            window.innerWidth <= 653 ? classes.toolbarSmall : classes.toolbar
          }
        >
          {window.innerWidth <= 653 ? (
            <Fragment>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {navLinkArr.map((item) => (
                  <MenuItem key={item} onClick={handleClose}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Fragment>
          ) : (
            <Fragment>
              <div className={classes.grow} />
              {navLinkArr.map((item) => (
                <Typography key={item} className={classes.navLinks} noWrap>
                  {item}
                </Typography>
              ))}
            </Fragment>
          )}
          <Button
            variant="outlined"
            color="default"
            className={
              window.innerWidth <= 653 ? classes.signupSmall : classes.signup
            }
            onClick={() => {
              history.push("/signup");
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(NavBar);
