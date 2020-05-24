import React from "react";
import ResultSingle from "./ResultSingle";

class Results extends React.Component {
  render() {
    return (
      <section className="page-section" id="results">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-12">
              <h3>Hello</h3>
            </div>
          </div>
          <ResultSingle></ResultSingle>
        </div>
      </section>
    );
  }
}

export default Results;
