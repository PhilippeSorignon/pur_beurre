import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-light py-5">
        <div className="footer-container">
          <div>
            <a href="/">Mentions Légales</a>
          </div>
          <div>
            <a href="/">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
