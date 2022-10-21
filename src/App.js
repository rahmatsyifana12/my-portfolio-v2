import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BNCCBandungPlatform from './components/Portfolio/BNCCBandungPlatform';
import PersonalPortfolio from './components/Portfolio/PersonalPortfolio';
import BinusParking from './components/Portfolio/BinusParking';

function App() {
  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route exact path='/'>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/portfolio/bncc-bandung-platform' element={<BNCCBandungPlatform />} />
            <Route exact path='/portfolio/personal-portfolio' element={<PersonalPortfolio />} />
            <Route exact path='/portfolio/binus-parking' element={<BinusParking />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
