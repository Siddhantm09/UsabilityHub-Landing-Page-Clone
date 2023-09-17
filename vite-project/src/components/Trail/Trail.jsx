import "./Trial.css";
const Trail = () => {
  return (
    <section className="trail-section">
      <div className="flex trail">
        <h2>Start a 14 day free trail</h2>
        <p className="trail-info">
          Learn why UsabilityHub is trusted by 280,000+ designers, marketers,
          product managers, and researchers.
        </p>
        <div className="flex trail-below">
          <a className="primary-btn">Try for free</a>
          <p className="small-bold-text">No credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default Trail;
