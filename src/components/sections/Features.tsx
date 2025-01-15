import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Gift, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: "Exclusive Community",
    description: "Join an elite group of NFT collectors and digital art enthusiasts"
  },
  {
    icon: <Trophy className="h-8 w-8 text-teal-400" />,
    title: "Unique Rewards",
    description: "Earn exclusive rewards and benefits as you collect more NFTs"
  },
  {
    icon: <Gift className="h-8 w-8 text-orange-400" />,
    title: "Premium Merch",
    description: "Access to limited edition merchandise and exclusive drops"
  },
  {
    icon: <Rocket className="h-8 w-8 text-yellow-400" />,
    title: "Future Utilities",
    description: "Early access to future drops and community events"
  }
];

const Features = () => {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass card-gradient p-6 rounded-xl text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Features;