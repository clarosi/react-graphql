import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="mt-5">
            <div className="row">
              <div className="col">
                <div className="form-group w-50">
                  <label htmlFor="txtEmail">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="txtEmail"
                    placeholder="Enter email"
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
                    id="txtPassword"
                    placeholder="Enter password"
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default User;
