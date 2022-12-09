import './App.css';
import { Route, Routes
 } from 'react-router-dom';
 import Currencies from './components/pages/Currencies';
 import Main from './components/pages/Main';
 import Price from './components/pages/Price';
 import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Currencies" element={<Currencies />}/>
        <Route path="/Price/:symbol" element={<Price />}/>
      </Routes>
    </div>
  );
}

export default App;
