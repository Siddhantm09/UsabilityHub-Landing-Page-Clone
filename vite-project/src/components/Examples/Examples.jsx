import "./Examples.css";
import card1 from "../../assets/asset 36.jpeg";
import card2 from "../../assets/asset 37.jpeg";
import card3 from "../../assets/asset 38.jpeg";
import card4 from "../../assets/asset 39.jpeg";
const cardArray = [
  { text: "Can users complete a task in my software interface?", card: card1 },
  { text: "Can users find important pages on my website?", card: card2 },
  { text: "Is my website’s intended audience clear?", card: card3 },
  { text: "Do visitors understand what a page is about?", card: card4 },
];
const Examples = () => {
  return (
    <section className="examples-section">
      <div className="container">
        <div className="example-main">
          <div className="example-header">
            <h2>One platform, endless possibilities</h2>
            <a href="#" className="secondary-btn">
              See more examples <i className="fa solid fa-right-long"></i>
            </a>
          </div>
          <div className="example-cards flex">
            {cardArray.map((val, id) => (
              <img key={id} className="card-img" src={val.card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
