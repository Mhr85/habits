import React from "react";
// import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
// import { Habits, ModalExample } from './pages/Habits';
import Css from "./App.css";
import './App.scss';
import Books from "./pages/Books";
import Habits from "./pages/HabitPage";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Home from './pages/Home';
import Nav from "./components/Nav";
import Login from './components/auth/Login';

const config = {
  issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID,
};

// function onAuthRequired({ history }) {
//   history.push('/login');
// }

function App() {
  return (
    <Router>
      <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
                  //onAuthRequired={onAuthRequired}
        >
          <div>
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
          <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/habits" exact={true} component={ Habits } />
              <SecureRoute path="/books" exact={true} component={Books} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-409495.oktapreview.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
        </Switch>
      </div>

        </Security>

    </Router>
  );
}

export default App;
