import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/InformationSite/Home';
import About from './pages/InformationSite/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/InformationSite/Contact'; // ✅ Import it
import Login from './pages/Login'; // ✅ Import
import SignUp from './pages/SignUp';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} /> {/* ✅ Add this */}
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
