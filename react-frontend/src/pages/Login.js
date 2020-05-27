import React from "react";
import {Redirect} from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import Navbar from '../components/Navbar';
import Alert from '../components/Alert';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    this.handleSubmit = async (event, tokenAuth, client) => {
      event.preventDefault();
      const res =  await tokenAuth();
      localStorage.setItem('authToken', res.data.tokenAuth.token);
      this.props.history.replace("/");
    }
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="login">
        <Mutation
            mutation={ LOGIN_MUTATION }
            variables={{ username: this.state.username, password: this.state.password }}
            onCompleted={data => {
            }}
          >
            {(tokenAuth, { loading, error, called, client }) => {

              return (
                <form onSubmit={event => this.handleSubmit(event, tokenAuth)}>
                  <div className="icon">
                    <i className="fas fa-sign-in-alt" />
                    <h1>Connexion</h1>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      placeholder="Nom d'utilisateur"
                      className="form-control"
                      onChange={ event => this.setState({ username: event.target.value }) }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Mot de passe"
                      className="form-control"
                      onChange={ event => this.setState({ password: event.target.value }) }
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-block"
                      disabled={loading ||
                        !this.state.username.trim() ||
                        !this.state.password.trim()
                      }
                    >
                      {loading ? "Chargement..." : "Connexion"}
                    </button>
                  </div>
                  {error && <Alert type="danger" message={error.message} />}
                </form>
              )
            }}
          </Mutation>
        </div>
      </>
    );
  }
}

const LOGIN_MUTATION = gql`
  mutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`

export default Login;
