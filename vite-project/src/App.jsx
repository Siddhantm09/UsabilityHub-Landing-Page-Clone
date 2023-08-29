import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Feature from "./components/Features/Feature";
function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <Companies />
      <Feature />
    </div>
  );
}

export default App;
