import './App.css';
import Login from './pages/registration/Login';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers/PrivateRoute';
import Home from './pages//Home';
import Details from './pages/Details';
import Requests from './pages/Requests';
import newLGPDRequest from './pages/newLGPDRequest';
import RequestDetails from './pages/RequestDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/home" component={Home} exact={true} />
        <PrivateRoute path="/details" component={Details} exact={true} />
        <PrivateRoute path="/requests" component={Requests} exact={true} />
        <PrivateRoute path="/requests/details" component={RequestDetails} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/lgpd" component={newLGPDRequest} />
        <Route exact path="/" render={() => (
            localStorage.getItem('token') ? <Redirect to="/home" /> : <Redirect to="/login" />
          )} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
