import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Gift, Sparkles, Star, Trophy, Rocket } from 'lucide-react';

interface TickerProps {
    items: string[];
}

const InfiniteTicker: React.FC<TickerProps> = ({ items }) => {
    const getRandomIcon = (index: number) => {
        const icons = [
            <Crown className="w-5 h-5 text-yellow-400" />,
            <Gift className="w-5 h-5 text-purple-400" />,
            <Sparkles className="w-5 h-5 text-teal-400" />,
            <Star className="w-5 h-5 text-orange-400" />,
            <Trophy className="w-5 h-5 text-yellow-400" />,
            <Rocket className="w-5 h-5 text-purple-400" />
        ];
        return icons[index % icons.length];
    };

    return (
        <div className="relative overflow-hidden py-6 bg-white/5 backdrop-blur-sm" >
            <div className="flex" >
                <motion.div
                    className="flex whitespace-nowrap gap-12"
                    animate={{
                        x: ["0%", "-50%"],
                    }
                    }
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {
                        [...items, ...items].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-4 py-2 rounded-full glass"
                            >
                                {getRandomIcon(index)}
                                < span className="text-lg font-medium bg-gradient-to-r from-purple-400 via-teal-400 to-purple-400 bg-clip-text text-transparent" >
                                    {item}
                                </span>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    );
};

export default InfiniteTicker;