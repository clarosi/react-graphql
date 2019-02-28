import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import User from "./pages/User";
import Booking from "./pages/Booking";
import Event from "./pages/Event";
import MainNav from "./components/Nav/MainNav";
import AuthContext from "./context/Auth";

import "./App.css";

class App extends Component {
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExp) => {
    this.setState({ token, userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNav />
            <Switch>
              {!this.state.token && <Redirect exact from="/" to="/user" />}
              {!this.state.token && (
                <Redirect exact from="/booking" to="/user" />
              )}
              {this.state.token && <Redirect exact from="/" to="/event" />}
              {this.state.token && <Redirect exact from="/user" to="/event" />}
              {!this.state.token && <Route path="/user" component={User} />}
              <Route path="/event" component={Event} />
              {this.state.token && (
                <Route path="/booking" component={Booking} />
              )}
            </Switch>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
