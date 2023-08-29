import logo from "../../assets/asset 1.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="container main-nav flex">
        <a href="#" className="company-logo">
          <img src={logo} alt="company-logo" />
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
              <a href="#" className="hover-link secondary-btn">
                Sign In
              </a>
            </li>
            <li>
              <a href="#" className="hover-link primary-btn">
                Try for free
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
