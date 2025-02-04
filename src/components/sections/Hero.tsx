import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


import RARE from "../../assets/gifs/rare.gif";
import SURARE from "../../assets/gifs/surare.gif";
import MYTHIC from "../../assets/gifs/mythic.gif";


const nftCards = [
  {
    title: "Bamboo Ultra Rare",
    gif: RARE,
  },
  {
    title: "Bamboo Rare",
    gif: SURARE,
  },
  {
    title: " Mythic Rare",
    gif: MYTHIC,
  }
];

const LiveTag = () => (
  <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-500/50">
    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
    <span className="text-emerald-500 font-semibold text-xs md:text-sm">LIVE</span>
  </div>
);

const SolanaIcon = () => (
  <div className="absolute top-4 right-4 z-10">
    <div className="glass p-1 md:p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="30"
        height="30"
        x="0"
        y="0"
        viewBox="0 0 200 200"
        style={{ background: "new 0 0 40 40" }}
        xmlSpace="preserve"
        className='w-4 md:w-full md:h-full h-4'
      >
        <defs>
          <linearGradient id="b" x1="100" x2="100" y1="200" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#170e2b"></stop>
            <stop offset="1" stopColor="#210066"></stop>
          </linearGradient>
          <linearGradient
            id="a"
            x1="137.3"
            x2="86.75"
            y1="-39.5"
            y2="-136.3"
            gradientTransform="matrix(1 0 0 -1 0 16)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#00ffa3"></stop>
            <stop offset="1" stopColor="#dc1fff"></stop>
          </linearGradient>
          <linearGradient xlinkHref="#a" id="c" x1="115.24" x2="64.74" y1="-27.97" y2="-124.78"></linearGradient>
          <linearGradient xlinkHref="#a" id="d" x1="126.24" x2="75.68" y1="-33.72" y2="-130.52"></linearGradient>
        </defs>
        <g>
          <g data-name="Layer 2">
            <g data-name="Solana (SOL)">
              <circle cx="100" cy="100" r="100" fill="url(#b)" opacity="1" data-original="url(#b)"></circle>
              <path
                fill="url(#a)"
                d="M69.2 118.86a2.87 2.87 0 0 1 2.1-.88h73a1.54 1.54 0 0 1 1.46 1.63 1.6 1.6 0 0 1-.41 1L130.93 135a3 3 0 0 1-2.1.88h-73a1.49 1.49 0 0 1-1.05-2.65z"
                opacity="1"
                data-original="url(#a)"
              ></path>
              <path
                fill="url(#c)"
                d="M69.2 65a3 3 0 0 1 2.1-.89h73a1.5 1.5 0 0 1 1.05 2.55l-14.42 14.48a3 3 0 0 1-2.1.88h-73a1.55 1.55 0 0 1-1.46-1.63 1.6 1.6 0 0 1 .41-1z"
                opacity="1"
                data-original="url(#c)"
              ></path>
              <path
                fill="url(#d)"
                d="M130.93 91.76a2.92 2.92 0 0 0-2.1-.89h-73a1.55 1.55 0 0 0-1.46 1.63 1.58 1.58 0 0 0 .41 1l14.42 14.35a2.92 2.92 0 0 0 2.1.89h73a1.5 1.5 0 0 0 1.05-2.55z"
                opacity="1"
                data-original="url(#d)"
              ></path>
            </g>
          </g>
        </g>
      </svg>

    </div>
  </div>
);

const Hero = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen flex items-center px-4 container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full mt-8 md:mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-[45%] space-y-8"
        >
          <h1 className="text-5xl lg:text-7xl font-bold md:block hidden  bg-gradient-to-r from-purple-400 via-teal-400 to-orange-400 bg-clip-text text-transparent leading-tight">
            Welcome to The Bamboo Club
          </h1>
          <div className="space-y-6 text-xl text-gray-300 md:block hidden">
            <p>
              Step into a world where digital art meets exclusive rewards. The Bamboo Club is more than just an NFT collection - it's a gateway to a thriving community of collectors, creators, and innovators.
            </p>
            <p>
              Own unique digital masterpieces, unlock premium merchandise, and join an elite group of Web3 enthusiasts shaping the future of digital collectibles.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:w-[45%] relative h-[500px]  flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {nftCards.map((card, index) => (
              <motion.div
                key={index}
                onClick={() => navigate('/mint')}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="absolute h-72 w-40 md:h-[500px] md:w-[245px]  glass card-gradient rounded-2xl overflow-hidden border-[10px] cursor-pointer shadow-xl"
                initial={{
                  x: `${(index - 1) * 60}px`,
                  rotate: (index - 1) * 15,
                  scale: 1,
                }}
                animate={{
                  x: `${(index - 1) * 60}px`,
                  rotate: (index - 1) * 15,
                  scale: hoveredCard === index ? 1.1 : 1,
                  zIndex: hoveredCard === index ? 10 : index,
                  borderColor: [
                    'rgba(168, 85, 247, 0.8)',
                    'rgba(45, 212, 191, 0.8)',
                    'rgba(249, 115, 22, 0.8)',
                    'rgba(168, 85, 247, 0.8)'
                  ]
                }}
                transition={{
                  duration: hoveredCard === index ? 0.2 : 4,
                  repeat: hoveredCard === index ? 0 : Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{
                  transformOrigin: 'center center',
                }}
              >
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <LiveTag />
                  <SolanaIcon />
                  <img
                    src={card.gif}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="md:text-2xl text-base font-bold text-white">{card.title}</h3>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0"
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="text-white text-sm md:text-lg font-bold">Click to Mint</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;