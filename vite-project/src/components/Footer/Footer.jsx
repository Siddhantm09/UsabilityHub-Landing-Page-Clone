import "./Footer.css";
import fb from "../../assets/asset 28.png";
import X from "../../assets/asset 29.png";
import Linkedln from "../../assets/asset 30.png";
import YT from "../../assets/asset 31.png";
const Footer = () => {
  return (
    <section className="">
      <div className="flex footer">
        <div className="flex footer-links small-bold-text">
          <a className="link">Privacy policy</a>
          <a className="link">Terms & conditions</a>
          <a className="link">Security information</a>
        </div>
        <div className="flex social">
          <img className="social-icons" src={fb} alt="fb" />
          <img className="social-icons" src={X} alt="X" />
          <img className="social-icons" src={Linkedln} alt="Linkedln" />
          <img className="social-icons" src={YT} alt="YT" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
