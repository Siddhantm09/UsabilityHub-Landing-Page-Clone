import "./SubFooter.css";
import logo from "../../assets/asset 1.png";
const SubFooter = () => {
  return (
    <section className="sub-footer-section">
      <div className="flex main-col">
        <div>
          <img src={logo} />
        </div>
        <div className="">
          <ul className="list-header flex">
            <li className="list-heading">Product</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Research panel</li>
            <li>Customers</li>
            <li>Status page</li>
            <li>Sign up</li>
            <li>Book a demo</li>
          </ul>
        </div>
        <div className="">
          <ul className="list-header flex">
            <li className="list-heading">Methodologies</li>
            <li className="">Overview</li>
            <li>Pricing</li>
            <li>Research panel</li>
            <li>Customers</li>
            <li>Status page</li>
            <li>Sign up</li>
            <li>Book a demo</li>
          </ul>
        </div>
        <div>
          <ul className="list-header flex">
            <li className="list-heading">Resourses</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Research panel</li>
            <li>Customers</li>
            <li>Status page</li>
            <li>Sign up</li>
            <li>Book a demo</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
