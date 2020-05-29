import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Navbar from '../components/Navbar';
import Masthead2 from '../components/Masthead2';
import ResultsMyProducts from '../components/ResultsMyProducts';
import Alert from '../components/Alert';
import Loader from '../components/Loader';


class MyProducts extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Masthead2
          heading="Mes Produits"
          image="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />
        <Query
          query={MY_PRODUCTS_QUERY}
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
                <ResultsMyProducts
                  headline="Mes Produits"
                  foods={data.me.savedfoodSet}
                  search={false}
                />
              </>
            )
          }}
        </Query>
      </>
    );
  }
}

const MY_PRODUCTS_QUERY = gql`
{
  me {
    savedfoodSet {
      id
      food {
        id
        name
        nutriscore
        image
        category
      }
    }
  }
}
`

export default MyProducts;
