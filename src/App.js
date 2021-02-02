import './App.css';
import NavBar from './Components/NavBar'
import { Route, Switch, withRouter ,BrowserRouter as Router} from 'react-router-dom';
import Signup from './Components/Auth/Signup/Signup';
import Login from './Components/Auth/Login/Login';

    // https://xd.adobe.com/view/bbac9394-16fa-4305-9aa2-d211fc2defc2-eeff/screen/6584a314-669a-42b1-b3a8-9728efd7d6a4
    // https://xd.adobe.com/view/51871157-cb95-4386-9224-58791f5cc55b-04d4/
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

