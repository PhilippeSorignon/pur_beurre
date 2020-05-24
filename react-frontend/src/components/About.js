import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">Colette et Remy</h2>
              <hr
                className="divider light my-4"
                style={{
                  borderColor: "#DE9440"
                }}
              />
              <p className="text-white-50 mb-4">
                Nous sommes une jeune startup fondée par Remy et Colette Tatou,
                deux restaurateurs de renom. Notre restaurant, situé à
                Montmartre (Paris), compte une cinquantaine de couverts et ne
                désemplit pas. Notre spécialité, la ratatouille, nous attire une
                clientèle internationale charmée par les délices de ce plat
                typique.
              </p>
              <p className="text-white-50 mb-4">
                Remy et Colette sont amoureux de la gastronomie française (on ne
                peut les blâmer !). Travaillant quotidiennement avec les
                meilleurs produits du terroir, ils affectionnent
                particulièrement la bonne chaire et aiment partager leur
                passion. Il est donc normal que Remy ait sauté au plafond quand
                Colette, un jour de déprime, sortit du placard un kilo de
                Nutella et l’attaqua à la petite cuillère. Pourquoi ne pas opter
                pour une pâte à tartiner aux noisettes, plus consistante et
                moins sucrée ? Pourquoi, oh pourquoi s’infliger une telle
                souffrance ? Rémy était sidéré. La réponse de Colette fut simple
                : elle n’avait pas trouvé de substitut assez convainquant. A
                vrai dire, elle n’avait même pas cherché.
              </p>
              <p className="text-white-50 mb-4">
                Tous deux se souvinrent alors que nombre de leurs clients leur
                avaient compté, entre deux verres, qu’il était difficile de
                trouver des substituts aux cochonneries que nous mangions dès le
                petit déjeuner. Pourquoi ne pas lancer une plateforme web en ce
                sens ?
              </p>
              <div className="row">
                <div className="col-12 col-md-6">
                  <img
                    src="static/assets/img/colette.jpg"
                    width="400px"
                    alt="colette"
                  />
                  <p className="text-white-50 mb-4">Colette</p>
                </div>
                <div className="col-12 col-md-6">
                  <img src="static/assets/img/remy.jpg" width="400px" alt="remy" />
                  <p className="text-white-50 mb-4">Remy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
