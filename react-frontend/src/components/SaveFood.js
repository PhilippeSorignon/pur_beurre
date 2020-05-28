import React from "react";
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import Alert from './Alert';

class SaveFood extends React.Component {
  render() {
    return (
      <Mutation
        mutation={SAVE_MUTATION}
        variables={{ foodId: this.props.id }}
        onCompleted={data => {
          console.log(data);
        }}
      >
        {(createSavedFood, { loading, error, called, client }) => {
          return (
            <>
              <button type="button" className="btn btn-primary" onClick={event => {createSavedFood()}}>
                <i className="far fa-save" /> Sauvegarder
              </button>
              {error && <Alert type="danger" message={error.message} />}
              {(called && !error) && <Alert type="success" message="Produit bien enregistré !" />}
            </>
        )}}
      </Mutation>
    );
  }
}

const SAVE_MUTATION = gql`
  mutation($foodId: Int!) {
    createSavedFood(foodId: $foodId) {
      food {
        id
      }
    }
  }
`

export default SaveFood;
