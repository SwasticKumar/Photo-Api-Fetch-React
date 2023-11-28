// App.jsx
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Gallery/>}/>
        <Route path="/photo-gallery" element={<Gallery/>}/>
        <Route path="/signup" element={<Gallery/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
