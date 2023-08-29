import hero from "../../assets/asset 2.jpeg";
import "./Hero.css";
const Hero = () => {
  return (
    <header>
      <div className="container flex main-hero">
        <div className="hero-left">
          <div className="above-text flex">
            <h1>Design confidently.</h1>
            <p className="info">
              UsabilityHub is a remote user research platform that takes the
              guesswork out of design decisions by validating them with real
              users.
            </p>
          </div>
          <div className="below-text flex">
            <a href="#" className="hover-link primary-btn">
              Try for free
            </a>
            <h5 className="text">No credit card required</h5>
          </div>
        </div>
        <div className="hero-right">
          <img src={hero} alt="Hero" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
