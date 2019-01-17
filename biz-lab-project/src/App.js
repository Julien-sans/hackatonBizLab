import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import Home from './components/Home'
import Form from ''
import DashboardContainer from './containers/DashboardContainer';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={LoginPage}
          />
          <Route
            exact
            path="/home"
            component={Home}
          />
          <Route
            path="/dashboard"
            component={DashboardContainer}
          />
          <Route
            exact
            path="/forms"
            component={Forms}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
