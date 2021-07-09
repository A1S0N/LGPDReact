import './App.css';
import Login from './pages/registration/Login';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers/PrivateRoute';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/home" component={Home} exact={true} />
        <Route path="/login" component={Login} />
        <Route exact path="/" render={() => (
            localStorage.getItem('token') ? <Redirect to="/home" /> : <Redirect to="/login" />
          )} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
