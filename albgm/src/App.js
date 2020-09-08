import React from 'react';
import './App.css';
import { Route, Switch,} from 'react-router-dom';
import { withRouter } from 'react-router';
import Route1 from './route1'


function App() {
  return (

  <Switch>
      <Route exact path="/">
        <Route1 />
      </Route>
      

  </Switch>
  )}
    

export default withRouter(App);
