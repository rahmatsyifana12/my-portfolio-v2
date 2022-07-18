import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/'>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/portfolios' element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
