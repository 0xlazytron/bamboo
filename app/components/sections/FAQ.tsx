import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';




const faqs = [
  {
    question: "What is The Bamboo Club?",
    answer: "The Bamboo Club is an exclusive NFT collection that provides members with unique benefits, including access to premium merchandise, community events, and special rewards."
  },
  {
    question: "How do I mint an NFT?",
    answer: "To mint an NFT, connect your wallet, select the quantity you want to mint, and complete the transaction. Make sure you have enough SOL in your wallet to cover the minting cost and gas fees."
  },
  {
    question: "What are the benefits of holding multiple NFTs?",
    answer: "Holding multiple NFTs unlocks additional benefits such as exclusive merchandise, higher rewards, and special access to community events. The more NFTs you hold, the more benefits you receive."
  },
  {
    question: "How can I get involved in the community?",
    answer: "Join our Discord server, follow us on social media, and participate in community events. NFT holders get access to exclusive channels and opportunities to shape the project's future."
  }
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto max-w-3xl"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass card-gradient rounded-xl overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-6 faq-answer overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-48 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      
    </div>
  );
};

export default FAQ;