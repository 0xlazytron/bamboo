import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import NFTDropPage from './pages/NFTDropPage';
import GatedContent from './pages/GatedContent';
import ClaimReward from './pages/ClaimReward';
import MintPage from './pages/MintPage';
import DressingRoom from './pages/DressingRoom';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white relative">
        {/* Parallax Background */}
        <div className="parallax-bg" />
        <div className="parallax-overlay" />
        <div className="animated-grid" />

        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/nft-drop" element={<NFTDropPage />} />
          <Route path="/gated-content" element={<GatedContent />} />
          <Route path="/claim-reward" element={<ClaimReward />} />
          <Route path="/mint" element={<MintPage />} />
          <Route path="/dressing-room" element={<DressingRoom />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;