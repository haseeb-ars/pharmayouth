import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/InformationSite/Home';
import About from './pages/InformationSite/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/InformationSite/Contact'; // ✅ Import it
import Login from './pages/Login'; // ✅ Import
import SignUp from './pages/SignUp';
import WhatWeDo from './pages/InformationSite/WhatWeDo';
import CBPMs from './pages/InformationSite/CBPMsUnlicensed';
import SpecialObtains from './pages/InformationSite/SpecialObtains';
import ImportExport from './pages/InformationSite/Import&Export';
import Wholesale from './pages/InformationSite/Wholesale';
import ScrollToTop from './ScrollToTop';
import Pharmacy from './pages/InformationSite/Pharmacy';
import TermsPage from './pages/InformationSite/TermsPage';
import PrivacyPolicyPage from './pages/InformationSite/Privacy';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/termspage" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
                    <Route path="/cbpm" element={<CBPMs />} />
                    <Route path="/specialobtains" element={<SpecialObtains />} />
                     <Route path="/importexport" element={<ImportExport />} />
                     <Route path="/wholesale" element={<Wholesale />} />
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
