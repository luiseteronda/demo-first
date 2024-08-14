import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaUser, FaUsers, FaRegClipboard } from 'react-icons/fa';
import './App.css';
import Usuario from './Usuario';
import Clientes from './Clientes';
import Planes from './Planes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/" element={<Usuario />} />
        </Routes>
        <nav className="bottom-nav">
          <Link to="/usuario" className="nav-link">
            <FaUser size={24} />
            <span>Usuario</span>
          </Link>
          <Link to="/clientes" className="nav-link">
            <FaUsers size={24} />
            <span>Clientes</span>
          </Link>
          <Link to="/planes" className="nav-link">
            <FaRegClipboard size={24} />
            <span>Planes</span>
          </Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;