import React from "react";
import {Redirect} from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import Navbar from '../components/Navbar';
import Alert from '../components/Alert';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }

    this.handleSubmit = (event, createUser) => {
      event.preventDefault();
      createUser();
      this.props.history.replace("/");
    }
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="login">
        <Mutation
            mutation={ SIGNUP_MUTATION }
            variables={{ username: this.state.username, email: this.state.email, password: this.state.password }}
          >
            {(createUser, { loading, error, called, client }) => {

              return (
                <form onSubmit={event => this.handleSubmit(event, createUser)}>
                  <div className="icon">
                    <i class="fas fa-carrot"></i>
                    <h1>Inscription</h1>
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
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      onChange={ event => this.setState({ email: event.target.value }) }
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
                        !this.state.email.trim() ||
                        !this.state.password.trim()
                      }
                    >
                      {loading ? "Chargement..." : "Inscription"}
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

const SIGNUP_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        id
      }
    }
  }
`

export default Signup;
