import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <form action>
          <div className="icon">
            <i className="fas fa-sign-in-alt" />
            <h1>Connection</h1>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Nom d'utilisateur"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Connection</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
