import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import User from "./pages/User";
import Booking from "./pages/Booking";
import Event from "./pages/Event";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/user" />
          <Route path="/user" component={User} />
          <Route path="/event" component={Event} />
          <Route path="/booking" component={Booking} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
