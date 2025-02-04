import { motion } from 'framer-motion';
import { Wallet} from 'lucide-react';
import MYTHIC from "../assets/gifs/surare.gif";


const MintPage = () => {
 
  // const price = 0.30; // SOL

  return (
    <div className="pt-24 px-4 container mx-auto min-h-screen max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
          Mint Your Bamboo Club NFT
        </h1>
        <p className="text-xl text-gray-300">
          Join the exclusive club and unlock amazing benefits
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 ">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass card-gradient p-6 rounded-xl md:block hidden"
        >
          <img
            src={MYTHIC}
            alt="NFT Preview"
            className="w-fit mx-auto h-72 md:h-full  object-cover rounded-lg "
          />
      
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass card-gradient p-6 rounded-xl space-y-6"
        >
      
  <div className="absolute top-3  left-6 z-10 flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-500/50">
    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
    <span className="text-emerald-500 font-semibold text-sm">LIVE</span>
  </div>


          <div className="space-y-4">
            <button className="w-full btn-connect px-8 py-4 rounded-lg flex items-center justify-center space-x-2">
              <Wallet className="w-5 h-5" />
              <span>Connect Wallet</span>
            </button>
            <button className="w-full btn-gradient-primary px-8 py-4 rounded-lg flex items-center justify-center space-x-2" disabled>
              Mint NFT
            </button>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-lg">Minting Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Mint 1: 50% off merchandise + free shipping for life</li>
              <li>Mint 3: Free exclusive T-shirt</li>
              <li>Mint 5: $500 USDC prize for mint sellout</li>
              <li>Mint 7: $1000 USDC prize for mint sellout</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass card-gradient p-6 rounded-xl md:hidden block "
        >
          <img
            src={MYTHIC}
            alt="NFT Preview"
            className="w-fit mx-auto h-72 md:h-full  object-cover rounded-lg "
          />
      
        </motion.div>

      </div>
    </div>
  );
};

export default MintPage;