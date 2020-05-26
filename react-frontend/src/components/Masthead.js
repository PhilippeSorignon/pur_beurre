import React from "react";
import { Link } from 'react-router-dom';

class Masthead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
  }

  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                Du gras, oui, mais de qualité !
              </h1>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 font-weight-light mb-5">
                Trouvez un produit de substitution pour ceux que vous consommez
                tous les jours.
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Produit"
                  aria-label="produit"
                  aria-describedby="button-addon2"
                  onChange={ event => this.setState({ search: event.target.value }) }
                />
                <div className="input-group-append">
                  <Link
                    to={`search/${this.state.search}`}
                    className="btn btn-outline-secondary"
                    role="button"
                    type="button"
                    id="button-addon2"
                  >
                    Chercher
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Masthead;
