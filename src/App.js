import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './Components/NavBar'
import Grid from '@material-ui/core/Grid';
import Description from './Components/Description'
import ProfileForm from './Components/ProfileForm'
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

    // https://xd.adobe.com/view/bbac9394-16fa-4305-9aa2-d211fc2defc2-eeff/screen/6584a314-669a-42b1-b3a8-9728efd7d6a4
    // https://xd.adobe.com/view/51871157-cb95-4386-9224-58791f5cc55b-04d4/
function App() {
  const classes=useStyles()
  return (
    <div className="App">
      <NavBar/>
      <Grid container>
        <Grid container item md={6} xs={12} className={classes.form}>
         <ProfileForm/>
         </Grid>
        <Grid container item md={6} xs={12} className={classes.description}>
        <Description/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
