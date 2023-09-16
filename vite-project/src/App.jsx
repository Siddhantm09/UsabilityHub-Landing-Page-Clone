import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Feature from "./components/Features/Feature";
import BigFeature from "./components/Big Feature/BigFeature";
import Examples from "./components/Examples/Examples";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Trail from "./components/Trail/Trail";
import SubFooter from "./components/Sub-Footer/SubFooter";
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
      <Trail />
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
