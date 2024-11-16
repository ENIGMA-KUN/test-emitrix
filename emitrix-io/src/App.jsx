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
import DataCollection from './pages/datacollection/page';

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

          <Route path="/datacollection" element={<DataCollection />} />



          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* Add more routes as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;