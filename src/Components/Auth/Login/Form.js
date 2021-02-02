import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { FormControl, Grid, TextField, Link, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(20),
      width: theme.spacing(48),
      height: theme.spacing(64),
      color: "#2699fb",
      background: "white",
      padding: "26px",
    },
    paper: {
      color: "#2699fb",
    },
    forgetPassword: {
      textAlign: "right",
    },
    margin: {
      width: "100%",
    },
  },
}));
function Login({ history, login, data }) {
  const classes = useStyles();
  const [form, setForm] = useState({});
  const [forgetPassword, setForgetPassword] = useState(false);

  const handleData = ({ target }) =>
    setForm({ ...form, ...{ [target.name]: target.value } });
  const { username, password } = form;
  return (
    <div className={classes.root}>
      <div variant="outlined" elevation={1}>
        {forgetPassword ? (
          <Fragment>
            <h1 style={{ color: "#2699fb" }}>Forgot Password</h1>
            <form>
              <div>
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  name="email"
                  type="text"
                  variant="outlined"
                  onChange={handleData}
                  fullWidth
                />
              </div>
              <br/>
              <br/>
              <Button
                variant="contained"
                size="large"
                color="primary"
                style={{
                  width: "100%",
                  marginBottom: "11px",
                  backgroundColor: "#2699fb",
                }}
                className={classes.margin}
                onClick={() => login(form)}
              >
                Submit
              </Button>
              <br/>
              <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    style={{ width: "100%" }}
                    className={classes.margin}
                    onClick={() => {
                      setForgetPassword(!forgetPassword)
                    }}
                  >
                    Login
                  </Button>
            </form>
          </Fragment>
        ) : (
          <Fragment>
            <h1 style={{ color: "#2699fb" }}>Sign-In</h1>
            <form noValidate autoComplete="off">
              <div>
                <TextField
                  id="outlined-password-input"
                  label="Username"
                  name="username"
                  value={username}
                  type="text"
                  variant="outlined"
                  onChange={handleData}
                  fullWidth
                />
              </div>
              <br />
              <div>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  variant="outlined"
                  onChange={handleData}
                  fullWidth
                />
              </div>
              <div style={{ textAlign: "right" }}>
                <Link
                  href="#"
                  className={classes.forgetPassword}
                  onClick={() => setForgetPassword(!forgetPassword)}
                >
                  Forgot Password
                </Link>
              </div>
              <br />
              <br />
              <div>
                By creating an account you agree to our Term of Service and
                Privacy Policy
              </div>
              <br />
              <br />
              <div>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{
                    width: "100%",
                    marginBottom: "11px",
                    backgroundColor: "#2699fb",
                  }}
                  className={classes.margin}
                  onClick={() => login(form)}
                >
                  Sign-in
                </Button>
                <div>
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    style={{ width: "100%" }}
                    className={classes.margin}
                    onClick={() => {
                      history.push("/signup");
                    }}
                  >
                    Sign-up
                  </Button>
                </div>
              </div>
            </form>
          </Fragment>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state.AuthReducer };
};

export default connect(mapStateToProps, { login })(withRouter(Login));
