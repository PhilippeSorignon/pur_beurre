import React from "react";
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import SaveFood from './SaveFood';

class ResultSingle extends React.Component {
  constructor(props) {
    super(props);
    switch (this.props.nutriscore) {
      case "a": this.state = ({pillColor: "#0a8b31"}); break;
      case "b": this.state = ({pillColor: "#9ac430"}); break;
      case "c": this.state = ({pillColor: "#fbb901"}); break;
      case "d": this.state = ({pillColor: "#ea5b0d"}); break;
      default: this.state = ({pillColor: "#ce171b"}); break;
    };


  }

  handleClick = () => {
    localStorage.setItem('searchImage', this.props.image);
    localStorage.setItem('searchName', this.props.name);
  }

  render() {
    return (
        <div className="col mb-4">
          <div className="card">
            <span
              className="badge badge-pill"
              style={{
                background: `${this.state.pillColor}`
              }}
            >
              <p>{this.props.nutriscore}</p>
            </span>
            <Link onClick={this.handleClick} to={`/results/${this.props.category}`}>
              <img
                src={this.props.image}
                className="card-img-top"
                alt={this.props.name}
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              {localStorage.authToken &&
                <SaveFood id={this.props.id} />
              }
            </div>
          </div>
        </div>
    );
  }
}

export default ResultSingle;
