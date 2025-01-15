import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Gift, Wallet, Loader } from 'lucide-react';
import InfiniteTicker from '../components/InfiniteTicker';
import { fireConfetti } from '../utils/confetti';
import RARE from "../assets/gifs/rare.gif";
import SURARE from "../assets/gifs/surare.gif";
import MYTHIC from "../assets/gifs/mythic.gif";

const tickerItems = [
  "Common, Rare, Ultra Rare, Mythic Rare on Solana Blockchain!",
  "Mint one NFT and Get 50% off merchandise + free shipping for life",
  "Mint 2 NFTs for exclusive access to future drops",
  "Mint 3 NFTs and claim your free T-shirt"
];

const nftCards = [
  {
    title: "Bamboo Ultra Rare",
    image: RARE,
    rarity: "ultra rare"
  },
  {
    title: "Bamboo Rare",
    image: SURARE,
    rarity: "rare"
  },
  {
    title: "Bamboo Mythic Rare",
    image: MYTHIC,
    rarity: "mythic rare"
  }
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
      navigate('/claim-reward');
    }, 2000);
  };

  return (
    <div className="pt-24 min-h-screen items-center">
      <InfiniteTicker items={tickerItems} />

      <div className="container mx-auto px-4 py-12 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            5200 Playing Cards
          </h1>
          <p className="text-xl section-description">
            Common, Rare, Ultra Rare, Mythic Rare on Solana Blockchain!
          </p>
        </motion.div>

        <div className="relative h-[600px] mb-16">
          {nftCards.map((card, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 w-[300px] sm:w-[320px] lg:w-[400px] aspect-[3/4] glass card-gradient rounded-2xl overflow-hidden cursor-pointer "
              initial={{
                x: (index - 1) * 60 - 200,
                y: -250,
                rotate: (index - 1) * 15,
                scale: index === 1 ? 1.1 : 1
              }}
              animate={{
                scale: hoveredCard === index ? 1.1 : index === 1 ? 1.1 : 1,
                zIndex: hoveredCard === index ? 10 : index === 1 ? 5 : 0,
                rotate: hoveredCard === index ? 0 : (index - 1) * 15
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 10
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <p className="text-orange-400">{card.rarity}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/mint')}
            className="btn-gradient-primary px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg"
          >
            <Wallet className="h-6 w-6" />
            <span>Mint NFT</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClaimTShirt}
            className="btn-gradient-secondary px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg"
            disabled={isChecking}
          >
            {isChecking ? (
              <Loader className="h-6 w-6 animate-spin" />
            ) : (
              <Gift className="h-6 w-6" />
            )}
            <span>{isChecking ? 'Checking Eligibility...' : 'Claim T-Shirt'}</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/gated-content')}
            className="btn-gradient-secondary px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg"
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