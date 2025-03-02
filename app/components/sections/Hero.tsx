import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import next/image for optimization

import RARE from "@/public/assets/gifs/rare.gif";
import SURARE from "@/public/assets/gifs/surare.gif";
import MYTHIC from "@/public/assets/gifs/mythic.gif";

const nftCards = [
  { title: "Bamboo Ultra Rare", gif: RARE, rarity: "ultra rare" },
  { title: "Bamboo Rare", gif: SURARE, rarity: "rare" },
  { title: "Mythic Rare", gif: MYTHIC, rarity: "mythic rare" },
];

const Hero = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<{ title: string; gif: any } | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedCard ? "hidden" : "auto";
  }, [selectedCard]);

  return (
    <div className="flex items-center px-4 container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full mt-[65px] md:mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-[45%] space-y-8"
        >
          <h1 className="text-5xl lg:text-7xl md:block hidden font-bold bg-gradient-to-r from-purple-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
            Welcome to The Bamboo Club
          </h1>
          <div className="space-y-6 text-xl text-gray-300 md:block hidden">
            <p>
              Step into a world where digital art meets exclusive rewards. The Bamboo Club is more
              than just an NFT collection - it&apos;s a gateway to a thriving community of
              collectors, creators, and innovators.
            </p>
            <p>
              Own unique digital masterpieces, unlock premium merchandise, and join an elite group
              of Web3 enthusiasts shaping the future of digital collectibles.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:w-[45%] relative h-[500px] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {nftCards.map((card, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedCard(card)}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="absolute h-72 w-40 md:h-[440px] md:w-[320px] md:mt-20 glass rounded-2xl overflow-hidden border-[10px] cursor-pointer shadow-xl"
                initial={{ x: `${(index - 1) * 60}px`, rotate: (index - 1) * 15 }}
                animate={{ x: `${(index - 1) * 60}px`, rotate: (index - 1) * 15, scale: hoveredCard === index ? 1.1 : 1 }}
              >
                <Image src={card.gif} alt={card.title} layout="fill" objectFit="cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="md:text-2xl text-base font-bold text-white">{card.title}</h3>
                  <p className="text-sm md:text-base text-orange-400 capitalize">{card.rarity}</p>
                </div>
                <div className="absolute top-3 left-6 z-10 flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-500/50">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-500 font-semibold text-sm">LIVE</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal for Image Popup */}
      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 glass2">
          <div className="p-6 rounded-lg max-w-lg relative">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute -top-20 md:-top-8 md:-right-24 text-white p-2 rounded-full"
            >
              ✕
            </button>
            <Image src={selectedCard.gif} alt={selectedCard.title} width={500} height={500} className="w-full h-auto rounded-lg" />
            <h3 className="text-white text-center mt-4 text-2xl font-bold">{selectedCard.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
