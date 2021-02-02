import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, MenuItem } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function ProfileForm() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
    //   justify="flex-start"
    //   alignItems="flex-start"
    //   spacing={1}
    >
      <Grid container xs="12" spacing="1">
        <Grid item xs={12} sm={12}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
        </Grid>
      </Grid>
    </Grid>
  );
}
