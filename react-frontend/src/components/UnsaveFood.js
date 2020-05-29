import React from "react";
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import Alert from './Alert';
import MY_PRODUCTS_QUERY from '../pages/MyProducts';

class UnsaveFood extends React.Component {
  render() {
    return (
      <Mutation
        mutation={SAVE_MUTATION}
        variables={{ foodId: this.props.id }}
        refetchQueries={[{ query: MY_PRODUCTS_QUERY }]}
      >
        {(createSavedFood, { loading, error, called, client }) => {
          return (
            <>
              <button type="button" className="btn btn-primary" onClick={event => {createSavedFood()}}>
                <i class="fas fa-times" /> Retirer
              </button>
              {error && <Alert type="danger" message={error.message} />}
              {(called && !error) && <Alert type="success" message="Le produit a bien été supprimé !" />}
            </>
        )}}
      </Mutation>
    );
  }
}

const SAVE_MUTATION = gql`
  mutation($foodId: Int!) {
    deleteSavedFood(savedFoodId: $foodId) {
      savedFoodId
    }
  }
`

export default UnsaveFood;
