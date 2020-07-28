import React from "react";
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Navbar from '../components/Navbar';
import Masthead2 from '../components/Masthead2';
import Alert from '../components/Alert';
import Loader from '../components/Loader';

class Product extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Query
          query={FOOD_QUERY}
          variables={{ id: this.props.match.params.id }}
        >
          {({ loading, error, data }) => {
            if (loading) return (
              <section className="page-section" id="results">
                <div className="container">
                  <div className="row align-items-center justify-content-center text-center">
                    <div className="col-md-12">
                      <Loader />
                    </div>
                  </div>
                </div>
              </section>
            )
            if (error) return <Alert type="danger" message={error.message} />
            return (
              <>
              <Masthead2 heading={data.food.name} image={data.food.image} />
              <section>
                <div className="container d-flex flex-column justify-content-center align-items-center">
                  <img src={`/static/assets/img/nutriscores/${data.food.nutriscore}.png`} alt="Nutriscore" />
                  <a href={data.food.url}>
                    Voir la fiche d'OpenFoodFacts
                  </a>
                </div>
              </section>
              </>
            )
          }}
        </Query>
      </>
    );
  }
}

const FOOD_QUERY = gql`
  query($id: ID!) {
    food(id: $id) {
      name
      image
      nutriscore
      url
    }
  }
`

export default Product;
