import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Feature from "./components/Features/Feature";
import BigFeature from "./components/Big Feature/BigFeature";
import Examples from "./components/Examples/Examples";
import CTA from "./components/CTA/CTA";
function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <Companies />
      <Feature />
      <BigFeature />
      <Examples />
      <CTA />
    </div>
  );
}

export default App;
