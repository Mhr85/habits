import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { Button } from 'semantic-ui-react'
import "../App.css"

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You have entered the Habits portal,{' '}
            <Link to="/Habits">click here</Link>
          </p>
          <Button circular className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <p className="lead">
            Welcome to Habits
          </p>
          <Button circular  className="btn btn-light btn-lg" onClick={this.login}>
            Login
          </Button>
        </div>
      );

      return (
        <div className="jumbotron text-center bg-dark" id="main-div">
          <h1 className="display-4">Habits Portal</h1>
          {mainContent}
        </div>
      );
    }
  }
);
