import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <>
      <header>
        <div className="nav">
          <h1>Math Magicians</h1>
          <nav>
            <ul className="navButtons">
              <li><Link to="/"><button type="button">Home</button></Link></li>
              <li><Link to="/Calculator"><button type="button">Calculator</button></Link></li>
              <li><Link to="/Quote"><button type="button">Quotes</button></Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quote" element={<Quote />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
