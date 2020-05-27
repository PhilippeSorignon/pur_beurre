import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Navbar from '../components/Navbar';
import Masthead2 from '../components/Masthead2';
import Results from '../components/Results';
import Alert from '../components/Alert';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class ResultsCategory extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Masthead2 heading={localStorage.searchName} image={localStorage.searchImage} />
        <Query
          query={CATEGORY_QUERY}
          variables={{ category: this.props.match.params.category }}
        >
          {({ loading, error, data }) => {
            if (loading) return (
              <section className="page-section" id="results">
                <div className="container">
                  <div className="row align-items-center justify-content-center text-center">
                    <div className="col-md-12">
                      <Loader type="TailSpin" color="#C45525" height={80} width={80} />
                    </div>
                  </div>
                </div>
              </section>
            )
            if (error) return <Alert type="danger" message={error.message} />
            return (
              <Results
                headline="Vous pouvez remplacer cet aliment par:"
                foods={data.foods}
              />
            )
          }}
        </Query>
      </>
    );
  }
}

const CATEGORY_QUERY = gql`
  query($category: String!) {
    foods(searchCategory: $category){
      id
      name
      nutriscore
      image
      category
    }
  }
`

export default ResultsCategory;
