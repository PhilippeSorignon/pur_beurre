import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  signout = () => {
    localStorage.removeItem('authToken');
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/">
            <img
              src="/static/assets/img/logo_pur_beurre.png"
              className="mr-2"
              width="50px"
            />
            Pur Beurre
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {localStorage.authToken
            ? <div className="collapse navbar-collapse" id="navbarResponsive" data-testid="loggednavbar">
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/me">
                      <i className="fas fa-user" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/products">
                      <i className="fas fa-carrot" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" onClick={this.signout}>
                      <i className="fas fa-sign-out-alt" />
                    </a>
                  </li>
                </ul>
              </div>
            : <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/login">
                      Connexion
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/signup">
                      Inscription
                    </a>
                  </li>
                </ul>
              </div>
          }

        </div>
      </nav>
    );
  }
}

export default Navbar;
