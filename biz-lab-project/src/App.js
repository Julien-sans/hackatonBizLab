import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Profile from './components/Profile';
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
            exact
            path="/profile"
            component={Profile}
          />
          <Route
            path="/dashboard"
            component={DashboardContainer}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
