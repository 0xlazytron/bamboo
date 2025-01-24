import React, { useState } from "react";
import { motion } from "framer-motion";
import shirt from "../../assets/shirt.jpeg.jpg";
import usd from "../../assets/usd.png";
import { Link, useNavigate } from "react-router-dom";
import { Wallet, Gift } from "lucide-react";


const Features = () => {
  const navigate = useNavigate();

  const [isChecking, setIsChecking] = useState(false); // State for Claim T-Shirt button

  const handleScrollToTop = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    navigate(path); // Navigate to the specified route
  };

  const handleClaimTShirt = () => {
    setIsChecking(true); // Simulate API call or eligibility check
    setTimeout(() => {
      setIsChecking(false);
      alert("T-Shirt Claimed Successfully!"); // Show success message
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
          Why Join The Bamboo Club?
        </h2>

        <div className="flex items-center flex-col md:flex-row justify-center gap-8">
          {/* First Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass card-gradient flex items-center justify-center h-[350px] w-[220px] gap-2 flex-col p-6 rounded-xl text-center"
          >
            <img src={shirt} alt="Bitcoin T-Shirt" className="h-[200px] rounded-lg" />
            <p className="text-gray-300">
              Anyone who mints 3 or more NFTs gets a <b>FREE Bitcoin T-Shirt!</b>
            </p>
          </motion.div>

          {/* Second Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass card-gradient flex items-center justify-center h-[350px] w-[220px] gap-2 flex-col p-6 rounded-xl text-center"
          >
            <img src={usd} alt="USDC Giveaway" className="h-[200px] rounded-lg" />
            <p className="text-gray-300">
              <button
                onClick={() => handleScrollToTop("/nft-drop")}
                className="hover:text-purple-400 transition-colors text-center py-2 text-left"
              >
                $1000 USDC GIVEAWAY - Click for details!
              </button>
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        {/* Mint NFT Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/mint")}
          className="btn-gradient-primary px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg"
        >
          <Wallet className="h-6 w-6" />
          <span>Mint NFT</span>
        </motion.button>

        {/* Claim T-Shirt Button */}
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
          <span>{isChecking ? "Checking Eligibility..." : "Claim T-Shirt"}</span>
        </motion.button>

        {/* NFT Holders Portal Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/gated-content")}
          className="btn-gradient-secondary px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg"
        >
          <Gift className="h-6 w-6" />
          <span>NFT Holders Portal</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/gated-content")}
          className="btn-gradient-secondary px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg"
        >
          <Gift className="h-6 w-6" />
          <span>NFT HOLDERS ENTER
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default Features;
