import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Masthead2 from '../components/Masthead2';
import Results from '../components/Results';


class ResultsCategory extends React.Component {
  render() {
    return (
      <>
        <Masthead2 />
        <Query
          query={CATEGORY_QUERY}
          variables={{ category: this.props.match.params.category }}
        >
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
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
