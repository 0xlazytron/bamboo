import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Gift, Wallet, Loader } from "lucide-react";
import { fireConfetti } from "../utils/confetti";
import mythic from '../assets/gifs/mythic.gif'
import rare from '../assets/gifs/rare.gif'
import surare from '../assets/gifs/surare.gif'

// Temporary placeholder images from Unsplash
// const RARE = "C:\Users\sheba\OneDrive\Desktop\bamboo-main\src\assets\gifs\rare.gif";
// const SURARE = "C:\Users\sheba\OneDrive\Desktop\bamboo-main\src\assets\gifs\surare.gif";
// const MYTHIC = "C:\Users\sheba\OneDrive\Desktop\bamboo-main\src\assets\gifs\mythic.gif";

// const tickerItems = [
//   "Common, Rare, Ultra Rare, Mythic Rare on Solana Blockchain!",
//   "Mint one NFT and Get 50% off merchandise + free shipping for life",
//   "Mint 2 NFTs for exclusive access to future drops",
//   "Mint 3 NFTs and claim your free T-shirt",
// ];

const nftCards = [
  {
    title: "Bamboo Ultra Rare",
    image: rare,
    rarity: "ultra rare",
  },
  {
    title: "Bamboo Rare",
    image: surare,
    rarity: "rare",
  },
  {
    title: "Bamboo Mythic Rare",
    image: mythic,
    rarity: "mythic rare",
  },
];

const NFTDropPage = () => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    fireConfetti();
  }, []);

  const handleClaimTShirt = async () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      navigate("/claim-reward");
    }, 2000);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b  text-white">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500">
            5200 Playing Cards
          </h1>
          <p className="text-xl text-gray-300">
            Common, Rare, Ultra Rare, Mythic Rare on Solana Blockchain!
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="relative h-[400px] md:h-[600px] mb-16">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            {nftCards.map((card, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 w-[200px] md:w-[300px] lg:w-[400px] aspect-[3/4]"
                initial={{
                  x: `calc(-50% + ${(index - 1) * 40}px)`,
                  y: "-50%",
                  rotate: (index - 1) * 15,
                  scale: index === 1 ? 1.1 : 1,
                }}
                animate={{
                  scale: hoveredCard === index ? 1.1 : index === 1 ? 1.1 : 1,
                  zIndex: hoveredCard === index ? 10 : index === 1 ? 5 : 0,
                  rotate: hoveredCard === index ? 0 : (index - 1) * 15,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 10,
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-lg md:text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-orange-400 capitalize">
                      {card.rarity}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-300 mb-12 leading-relaxed">
            The rarity of your NFT playing card will be randomly generated when you mint. 
            Whoever has the best 7 cards based on rarity at the end of the mint will 
            receive $1000 USDC!! If you mint 3 or more NFTS make sure you claim your 
            FREE Bitcoin Tshirt below. Join us on Discord and X!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/mint")}
            className="px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg"
          >
            <Wallet className="h-6 w-6" />
            <span>Mint NFT</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClaimTShirt}
            disabled={isChecking}
            className="px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg disabled:opacity-50"
          >
            {isChecking ? (
              <Loader className="h-6 w-6 animate-spin" />
            ) : (
              <Gift className="h-6 w-6" />
            )}
            <span>
              {isChecking ? "Checking Eligibility..." : "Claim T-Shirt"}
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/gated-content")}
            className="px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg"
          >
            <Gift className="h-6 w-6" />
            <span>NFT Holders Portal</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NFTDropPage;