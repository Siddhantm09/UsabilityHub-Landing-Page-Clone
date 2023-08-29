import "./Feature.css";
import featureNames from "../../utils/featureNames";
const Feature = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="feature-header flex">
          <h2>Your user research Swiss Army knife</h2>
          <a className="secondary-btn hover-link">See all features</a>
        </div>
        <div className="feature-list flex">
          {featureNames.map((val, id) => {
            return (
              <div className="card flex" key={id}>
                <div key={id}>
                  <h3>{val.name}</h3>
                  <p>{val.info}</p>
                </div>
                <a className="secondary-btn hover-link">Learn more</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
