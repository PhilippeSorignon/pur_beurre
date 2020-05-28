import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Navbar from '../components/Navbar';
import Masthead2 from '../components/Masthead2';
import Results from '../components/Results';
import Alert from '../components/Alert';
import Loader from '../components/Loader';


class ResultsTitle extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Query
          query={TITLE_QUERY}
          variables={{ title: this.props.match.params.title }}
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
                <Masthead2
                  heading={this.props.match.params.title}
                  image={
                    data.foods[1]
                    ? data.foods[0].image
                    : "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  } />
                <Results
                  headline="De quel produit parlez-vous ?"
                  foods={data.foods}
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

const TITLE_QUERY = gql`
  query($title: String!) {
    foods(searchTitle: $title){
      id
      name
      nutriscore
      url
      image
      category
    }
  }
`

export default ResultsTitle;
