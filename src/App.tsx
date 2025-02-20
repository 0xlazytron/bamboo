import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import NFTDropPage from './pages/NFTDropPage';
import GatedContent from './pages/GatedContent';
import ClaimReward from './pages/ClaimReward';
import MintPage from './pages/MintPage';
import DressingRoom from './pages/DressingRoom';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

import('@solana/wallet-adapter-react-ui/styles.css');


function App() {
  const network = "devnet"; // Use "mainnet-beta" for mainnet
  const endpoint = clusterApiUrl(network);

  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
  ];

  return (

    <Router>
      <div className="min-h-screen text-white relative">
        {/* Parallax Background */}
        <div className="parallax-bg" />
        <div className="parallax-overlay" />
        <div className="animated-grid" />
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <Navbar />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
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