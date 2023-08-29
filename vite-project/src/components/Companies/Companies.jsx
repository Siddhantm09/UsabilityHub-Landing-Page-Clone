import "./Companies.css";
import com1 from "../../assets/asset 3.png";
import com2 from "../../assets/asset 4.png";
import com3 from "../../assets/asset 5.png";
import com4 from "../../assets/asset 6.png";
import com5 from "../../assets/asset 7.png";
import com6 from "../../assets/asset 8.svg";
import com7 from "../../assets/asset 9.png";
const Companies = () => {
  return (
    <section className="companies-section">
      <div className="container company flex">
        <div className="small-bold-text">
          The world’s best companies rely on UsabilityHub to make better design
          decisions.
        </div>
        <div className="company-img flex">
          <img src={com1} className="one" />
          <img src={com2} className="2" />
          <img src={com3} className="third" />
          <img src={com4} className="fourth" />
          <img src={com5} className="fiveth" />
          <img src={com6} className="6" />
          <img src={com7} className="7" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
