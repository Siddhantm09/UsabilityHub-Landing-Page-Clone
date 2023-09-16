import "./Feature.css";
import featureNames from "../../utils/featureNames";
// import arrow from "../../assets/asset 12.svg";
// import bgimg from "../../assets/asset34.svg";

const Feature = () => {
  return (
    <section className="features-section">
      <div className="container">
        {/* <img className="bgimg" src={bgimg} /> */}
        <div className="feature-header flex">
          <h2>Your user research Swiss Army knife</h2>
          <a href="#" className="secondary-btn">
            See all features <i className="fa solid fa-right-long"></i>
          </a>
        </div>
        <div className="feature-area flex">
          {featureNames.map((val, id) => {
            return (
              <div className="feature-card flex" key={id}>
                <img src={val.image} alt="image" />
                <h3>{val.name}</h3>
                <p>{val.info}</p>
                <a className="secondary-btn">
                  Learn more <i className="fa solid fa-right-long"></i>
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
