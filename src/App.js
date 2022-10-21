import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PortfolioExample from './components/PortfolioExample/PortfolioExample';

function App() {
  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route exact path='/'>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/portfolio/example' element={<PortfolioExample />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
