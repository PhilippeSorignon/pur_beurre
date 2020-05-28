import React from "react";
import ResultSingle from "./ResultSingle";
import Alert from '../components/Alert';

class Results extends React.Component {
  render() {
    return (
      <section className="page-section" id="results">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-12">
              <h3>{this.props.headline}</h3>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-md-3"
            style={{
              marginTop: "40px"
            }}
          >
            {this.props.foods.length === 0 &&
              <Alert type="danger" message="Aucun résultat ..." />
            }
            {this.props.foods.map(food =>
              <ResultSingle
                id={food.id}
                name={food.name}
                nutriscore={food.nutriscore}
                image={food.image}
                category={food.category}
                search={this.props.search}
              />
            )}
            </div>
        </div>
      </section>
    );
  }
}

export default Results;
