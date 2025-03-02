import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Use Next.js router
import { Wallet, Gift, Loader } from "lucide-react";
import Image from "next/image";

const Features = () => {
  const router = useRouter(); // Use Next.js router

  const [isChecking, setIsChecking] = useState(false); // State for Claim T-Shirt button

  const handleScrollToTop = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    router.push(path); // Navigate using router.push
  };

  const handleClaimTShirt = () => {
    setIsChecking(true); // Simulate API call or eligibility check
    setTimeout(() => {
      setIsChecking(false);
      router.push("/claim"); // Navigate using router.push
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className="md:py-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=""
        >
          <div className="w-full mx-auto p-4 xl:p-10">
            <Image
              src="/assets/bambo.jpg"
              width={500}
              height={300}
              className="md:w-6/12 w-full mx-auto rounded-xl border-[0.5px] border-[#181]"
              alt="Bamboo Club NFT"
            />
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="flex items-center flex-col md:flex-row justify-center gap-8">
          {/* First Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass card-gradient flex items-center justify-center w-[90%] md:h-[390px] md:w-[260px] gap-2 flex-col p-6 rounded-xl text-center"
          >
            <Image
              src="/assets/shirt.jpg"
              alt="Bitcoin T-Shirt"
              width={200}
              height={200}
              className="h-[200px] rounded-lg"
            />
            <p className="text-gray-300">
              Anyone who mints 3 or more NFTs gets a <b>FREE Bitcoin T-Shirt!</b>
              More styles in the dressing room
            </p>
          </motion.div>

          {/* Second Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass card-gradient flex items-center justify-center w-[90%] md:h-[390px] md:w-[260px] gap-2 flex-col p-6 rounded-xl text-center"
          >
            <Image
              src="/assets/logo.png"
              alt="USDC Giveaway"
              width={200}
              height={200}
              className="h-[200px] rounded-lg"
            />
            <p className="text-gray-300">
              <button
                onClick={() => handleScrollToTop("/nft-drop")}
                className="hover:text-purple-400 transition-colors text-center py-2"
              >
                NFT Mint Details
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
          onClick={() => router.push("/mint")}
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

        {/* Dressing Room Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/dressing-room")}
          className="btn-gradient-secondary px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg"
        >
          <Gift className="h-6 w-6" />
          <span>The Dressing Room</span>
        </motion.button>

        {/* NFT Holders Portal Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/gated-content")}
          className="btn-gradient-secondary px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg"
        >
          <Gift className="h-6 w-6" />
          <span>NFT HOLDERS ENTER</span>
        </motion.button>
      </div>

      {/* Social Media Links */}
      <div className="flex pt-20 flex-col items-center justify-center gap-5">
        <div className="flex items-center lg:flex-row gap-4 justify-center">
          <Image
            src="/assets/m.jpeg"
            alt="Social Media Link"
            width={100}
            height={100}
            className="rounded-xl md:w-[300px] w-[100px] transition-all hover:scale-105 h-[100px] md:h-[200px] duration-300"
          />
          <Image
            src="/assets/sol.jpeg"
            alt="Social Media Link"
            width={100}
            height={100}
            className="rounded-xl md:w-[300px] w-[100px] transition-all hover:scale-105 h-[100px] md:h-[200px] duration-300"
          />
          <Image
            src="/assets/opensea.jpeg"
            alt="Social Media Link"
            width={100}
            height={100}
            className="rounded-xl md:w-[300px] w-[100px] transition-all hover:scale-105 h-[100px] md:h-[200px] duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;