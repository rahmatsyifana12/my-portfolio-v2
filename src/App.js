import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/'>
          <Route exact path='/' element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
