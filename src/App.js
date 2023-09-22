import './App.css';

import Calculator from './components/Calculator';
import Header from './components/Header';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Quote />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
