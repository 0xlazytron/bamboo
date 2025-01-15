import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const roadmap = [
  {
    phase: "Phase 1",
    title: "Launch & Community Building",
    status: "completed",
    items: [
      "Initial NFT collection launch",
      "Community platform setup",
      "Social media presence establishment",
      "Early adopter rewards program"
    ]
  },
  {
    phase: "Phase 2",
    title: "Utility Expansion",
    status: "in-progress",
    items: [
      "Exclusive merchandise store",
      "Members-only events",
      "Collaboration with artists",
      "Community governance implementation"
    ]
  },
  {
    phase: "Phase 3",
    title: "Ecosystem Growth",
    status: "upcoming",
    items: [
      "Mobile app development",
      "Cross-chain integration",
      "Partnership program launch",
      "Community grants program"
    ]
  },
  {
    phase: "Phase 4",
    title: "Global Expansion",
    status: "upcoming",
    items: [
      "International events",
      "Regional community hubs",
      "Brand collaborations",
      "Metaverse integration"
    ]
  }
];

const Roadmap = () => {
  return (
    <div className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto max-w-6xl"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
          Project Roadmap
        </h2>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 roadmap-line rounded-full hidden md:block" />
          
          <div className="space-y-8 md:space-y-24">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } justify-center`}
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full glass hidden md:flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full ${
                    phase.status === 'completed' ? 'bg-green-400' :
                    phase.status === 'in-progress' ? 'bg-purple-400' :
                    'bg-gray-400'
                  }`} />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-[calc(50%-2rem)] glass card-gradient p-6 rounded-xl ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                        {phase.phase}
                      </h3>
                      <p className="text-base md:text-lg text-gray-300">{phase.title}</p>
                    </div>
                    {phase.status === 'completed' && (
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                    )}
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          phase.status === 'completed' ? 'bg-green-400' :
                          phase.status === 'in-progress' ? 'bg-purple-400' :
                          'bg-gray-400'
                        }`} />
                        <span className="text-sm md:text-base text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Roadmap;