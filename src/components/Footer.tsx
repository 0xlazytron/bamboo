import { Link } from 'react-router-dom';
import { Twitter, MessageSquare, Instagram, Github } from 'lucide-react';
import LOGO from "../assets/logo.png"


const Footer = () => {
  return (
    <footer className="glass mt-24 border-t border-white/10 ">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={LOGO} alt="The Bamboo Club NFT" className='w-12' />
              <span className="text-xl font-bold">The Bamboo Club</span>
            </div>
            <p className="text-gray-400">
              Exclusive NFT collection and premium merchandise for the Web3 community
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/nft-drop" className="text-gray-400 hover:text-white transition-colors">NFT Drop</Link></li>
              <li><Link to="/dressing-room" className="text-gray-400 hover:text-white transition-colors">Dressing Room</Link></li>
              <li><Link to="/gated-content" className="text-gray-400 hover:text-white transition-colors">Exclusive Content</Link></li>
            </ul>
          </div>

          {/* Resources
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div> */}

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="glass p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="glass p-2 rounded-lg hover:bg-white/10 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="glass p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="glass p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Bamboo Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;