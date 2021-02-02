import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    background: "#2699fb",
  },
  toolbar:
    window.innerWidth > 650
      ? {
          minHeight: 100,
          alignItems: "flex-start",
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(2),
        }
      : {
          minHeight: "50",
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
  signup: {
    color: "white",
    border: "white solid 1px",
    width: window.innerWidth <= 650 ? "" : "7%",
    margin: "16px",
    padding: window.innerWidth <= 650 ? "" : "1%",
    marginLeft: "6%",
    left: window.innerWidth <= 650 ? "40%" : "",
    // left:window.innerWidth<=650?'50%':'',
  },
}));
export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  let navLinkArr = ["FEED", "AUTHORS", "EXPLORE", "BLOG", "CONTACT"];
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: "#2699fb" }}>
        <Toolbar className={classes.toolbar}>
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
                  <MenuItem onClick={handleClose}>{item}</MenuItem>
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
          <Button variant="outlined" color="default" className={classes.signup}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
