import React, { Component } from "react";

import AuthContext from "../context/Auth";

class User extends Component {
  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  state = { isLogin: true };
  static contextType = AuthContext;

  toggleHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin };
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    if (email.trim() === "" || password.trim() === "") {
      console.log("Enter email and password.");
      return;
    }
    let reqQuery = {
      query: `
        mutation {
          createUser(userInput: {email: "${email}", password: "${password}"}),
          {
            _id,
            email
          }
        }
      `
    };
    if (this.state.isLogin) {
      reqQuery = {
        query: `
          query {
            login(email: "${email}", password: "${password}"),
            {
              userId,
              token,
              tokenExp
            }
          }
        `
      };
    }
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      body: JSON.stringify(reqQuery),
      headers: { "Content-Type": "application/json" }
    })
      .then(result => {
        if (result.status !== 200 && result.status !== 201) {
          throw new Error("Request failed.");
        }
        return result.json();
      })
      .then(result => {
        if (result.data.login.token) {
          const resData = result.data.login;
          this.context.login(resData.token, resData.userId, resData.tokenExp);
        }
      })
      .catch(err => console.log("error: ", err.message));
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <div className="mt-5">
            <div className="row">
              <div className="col">
                <div className="form-group w-50">
                  <label htmlFor="txtEmail">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    ref={this.emailEl}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group w-50">
                  <label htmlFor="txtPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    ref={this.passwordEl}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <button type="submit" className="btn btn-primary mr-4 mb-3">
                {this.state.isLogin ? "SignIn" : "SignUp"}
              </button>
              <button
                type="button"
                onClick={this.toggleHandler}
                className="btn btn-primary mb-3"
              >
                {this.state.isLogin ? "Switch to SignUp" : "Switch to SignIn"}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default User;
