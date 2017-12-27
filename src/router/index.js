import React from 'react';
import {  BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';
import Hello from '../view/Hello';
class Routers extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Hello}/>
        </Switch>
      </Router>
    )
  }

}

export default Routers;