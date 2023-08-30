import "./Feature.css";
import featureNames from "../../utils/featureNames";
import arrow from "../../assets/asset 12.svg";

const Feature = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="feature-header flex">
          <h2>Your user research Swiss Army knife</h2>
          <a className="secondary-btn hover-link">See all features</a>
        </div>
        <div className="feature-list">
          {featureNames.map((val, id) => {
            return (
              <div className="card flex" key={id}>
                <div className="card-info flex" key={id}>
                  <img src={val.image} alt="image" />
                  <h3>{val.name}</h3>
                  <p>{val.info}</p>
                </div>
                <a className="secondary-btn hover-link learn-btn flex">
                  Learn more <img src={arrow} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
