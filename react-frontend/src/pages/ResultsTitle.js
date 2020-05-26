import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Navbar from '../components/Navbar';
import Masthead2 from '../components/Masthead2';
import Results from '../components/Results';


class ResultsTitle extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Masthead2 />
        <Query
          query={TITLE_QUERY}
          variables={{ title: this.props.match.params.title }}
        >
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            return (
              <Results
                headline="De quel produit parlez-vous ?"
                foods={data.foods}
              />
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
