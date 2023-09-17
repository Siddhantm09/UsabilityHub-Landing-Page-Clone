import logo from "../../assets/asset 1.png";
import logo1 from "../../assets/asset 33.svg";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <section>
      <div className="container main-nav flex">
        <a href="#" className="company-logo flex">
          <img src={logo} alt="company-logo" />
          <img src={logo1} className="become-tester" alt="become-tester" />
          <a className="become-tester-text">Become a tester</a>
        </a>
        <div className="nav-links">
          <ul className="flex">
            <li>
              <a href="#" className="hover-link">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover-link">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="hover-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover-link">
                Resources
              </a>
            </li>
            <li>
              <a href="#" id="sign-in" className="hover-link secondary-btn">
                Sign In
              </a>
            </li>
            <li>
              <a href="#" id="try-for-free" className="hover-link primary-btn">
                Try for free
              </a>
            </li>
          </ul>
          <div className="burger-menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
