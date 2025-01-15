import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Twitter, MessageSquare, Instagram, Menu, X } from 'lucide-react';
import LOGO from "../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="glass fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={LOGO} alt="" className='w-12' />
            <span className="text-xl font-bold ">The Bamboo Club</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 glass rounded-lg"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/nft-drop" className="hover:text-purple-400 transition-colors">
              NFT Drop
            </Link>
            <Link to="/dressing-room" className="hover:text-purple-400 transition-colors">
              Dressing Room
            </Link>
            <div className="flex items-center space-x-4 mr-6">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <button className="btn-gradient-primary px-4 py-2 rounded-lg flex items-center space-x-2">
              <Wallet className="h-5 w-5" />
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              to="/nft-drop"
              className="hover:text-purple-400 transition-colors py-2"
              onClick={handleNavClick}
            >
              NFT Drop
            </Link>
            <Link
              to="/dressing-room"
              className="hover:text-purple-400 transition-colors py-2"
              onClick={handleNavClick}
            >
              Dressing Room
            </Link>
            <div className="flex items-center space-x-4 py-2">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <button
              className="btn-gradient-primary px-4 py-2 rounded-lg flex items-center space-x-2 w-full justify-center"
              onClick={handleNavClick}
            >
              <Wallet className="h-5 w-5" />
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;