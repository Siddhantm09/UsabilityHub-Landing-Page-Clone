import "./BigFeature.css";
import img1 from "../../assets/asset 18.png";
import profile1 from "../../assets/asset 20.png";
import logo1 from "../../assets/asset 19.png";
import img2 from "../../assets/asset 21.png";
import profile2 from "../../assets/asset 23.png";
import logo2 from "../../assets/asset 22.png";
import img3 from "../../assets/asset 24.png";
import profile3 from "../../assets/asset 26.png";
import logo3 from "../../assets/asset 25.png";
const BigFeature = () => {
  return (
    <section className="big-features-section container">
      <div className="big-feature flex">
        <div className="left-part">
          <img src={img1} alt="Image1" />
        </div>
        <div className="right-part flex">
          <div className="right-part-above flex">
            <h4>Effortless validation for</h4>
            <h2>Design professionals</h2>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intuitive and delightful experiences for your users.
            </p>
          </div>
          <div className="right-part-below flex">
            <img src={logo1} className="company-image" />
            <h4 className="company-text1">
              The navigation test is gods gift to UI designers, it probably has
              the best power-to-simplicity ratio of any software, ever.
            </h4>
          </div>

          <div className="profile-main flex">
            <img src={profile1} />
            <div className="profile-info">
              <h4>Nick Franklin</h4>
              <h5>Chief Executive Officer</h5>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------- */}
      <div className="big-feature-non-res">
        <div className="right-part flex">
          <div className="right-part-above flex">
            <h4>Optimisation for</h4>
            <h2>Marketers</h2>
            <p>
              Fine-tune landing pages, messaging, and creative, helping you
              optimise conversion rates on marketing campaigns and product
              launches.
            </p>
          </div>
          <div className="right-part-below flex">
            <img className="company-image" src={logo2} />

            <h4 className="company-text1">
              We use UsabilityHub tests to help us make decisions for various
              projects. From web and mobile design to marketing activities.
            </h4>
          </div>

          <div className="profile-main flex">
            <img src={profile2} />
            <div className="profile-info">
              <h4>Rick van de Ven</h4>
              <h5>Digital Marketing Analyst</h5>
            </div>
          </div>
        </div>
        <div className="left-part">
          <img src={img2} alt="Image1" />
        </div>
      </div>
      {/* Responsive-Design */}
      <div id="res" className="big-feature-res">
        <div className="left-part">
          <img src={img2} alt="Image1" />
        </div>
        <div className="right-part flex">
          <div className="right-part-above flex">
            <h4>Optimisation for</h4>
            <h2>Marketers</h2>
            <p>
              Fine-tune landing pages, messaging, and creative, helping you
              optimise conversion rates on marketing campaigns and product
              launches.
            </p>
          </div>
          <div className="right-part-below flex">
            <img className="company-image" src={logo2} />

            <h4 className="company-text1">
              We use UsabilityHub tests to help us make decisions for various
              projects. From web and mobile design to marketing activities.
            </h4>
          </div>

          <div className="profile-main flex">
            <img src={profile2} />
            <div className="profile-info">
              <h4>Rick van de Ven</h4>
              <h5>Digital Marketing Analyst</h5>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------ */}
      <div className="big-feature flex">
        <div className="left-part ">
          <img src={img3} alt="Image1" />
        </div>
        <div className="right-part flex">
          <div className="right-part-above flex">
            <h4>Easier decision making for</h4>
            <h2>Product managers</h2>
            <p>
              Ensure you’re delivering the right features to the right customers
              by validating product concepts with your target audience.
            </p>
          </div>
          <div className="right-part-below flex">
            <img className="company-image" src={logo3} />
            <h4 className="company-text1">
              Adopting UsabilityHub got us into the habit of asking our users
              questions before locking in decisions.
            </h4>
          </div>

          <div className="profile-main flex">
            <img src={profile3} />
            <div className="profile-info">
              <h4>Ron Diorio</h4>
              <h5>VP Innovation & New Products</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigFeature;
