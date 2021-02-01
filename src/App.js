import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './Components/NavBar'
import Grid from '@material-ui/core/Grid';
import Description from './Components/Description'
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

function App() {
  const classes=useStyles()
  return (
    <div className="App">
      <NavBar/>
      <Grid container>
        <Grid item xs={6} className={classes.form}>
         <div>
         </div>
         </Grid>
        <Grid item xs={6} className={classes.description}>
        <Description/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
