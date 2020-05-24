import React from "react";

class Masthead2 extends React.Component {
  render() {
    return (
      <header
        id="masthead-2"
        style={{
          backgroundImage:
            'url("https://static.openfoodfacts.org/images/products/405/648/913/7108/front_fr.22.full.jpg")'
        }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div
              className="col-lg-10 align-self-end mt-10"
              style={{
                top: "-50%"
              }}
            >
              <h1 className="text-uppercase text-white font-weight-bold">
                Fromage
              </h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Masthead2;
