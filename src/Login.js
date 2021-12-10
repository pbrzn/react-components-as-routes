import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}
