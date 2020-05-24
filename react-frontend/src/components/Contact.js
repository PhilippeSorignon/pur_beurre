import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Contactez-nous !</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">
                Une question ? N'hésitez pas à nous contacter !
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted" />
              <div>+33 6 00 00 00 00</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted" />
              <a className="d-block" href="mailto:mail@mail.com">
                mail@mail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
