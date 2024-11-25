import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Blogs from './sections/Blogs';
import CallToAction from './sections/CallToAction';
import ComingSoon from './sections/ComingSoon';
// import InteractiveImage from './sections/InteractiveImage';
import LogoTicker from './sections/LogoTicker';
import ProductFeaturesShowcase from './sections/ProductFeaturesShowcase';
import ProductShowcase from './sections/ProductShowcase';
import Solution from './sections/Solution';
import DataCollection from './pages/datacollection/dc';
import Industries from './pages/industries/in';
import NetZeroo from './pages/net-zero/nz';
import Reporting from './pages/reporting/rp';
import SupplyChain from './pages/supply-chain/sc';
import ProductBased from './pages/product-based/page';
import ScenerioAnalysis from './pages/scenerio-analysis/page';
// import ContactUs from './pages/contactus/TeamPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <LogoTicker />
              <ProductShowcase />
              <ProductFeaturesShowcase />
              {/* <InteractiveImage /> */}
              <Solution />
              <Blogs />
              <CallToAction />
              
            </>
          } />

          <Route exact path="/datacollection" element={<DataCollection />} />
          <Route exact path="/industries" element={<Industries />} />
          <Route exact path="/net-zero" element={<NetZeroo />} />
          <Route exact path="/reporting" element={<Reporting />} />
          <Route exact path="/supply-chain" element={<SupplyChain />} />



          <Route path="/ComingSoon" element={<ComingSoon />} />
          <Route path="/product-based" element={<ProductBased />} />
          <Route path="/scenerio-analysis" element={<ScenerioAnalysis />} />
          {/* <Route path="/contactus" element={<ContactUs />} /> */}
          {/* Add more routes as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;