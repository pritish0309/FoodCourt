import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Test from './components/Test';


function App() {
  return (
    <div className='app-container' id='running-app'>
      <Router>
        <Routes>
          <Route path="/" element={<Test/>} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
