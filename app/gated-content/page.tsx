"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const GatedContent = () => {
    const [isConnected, setIsConnected] = React.useState(false);

    return (
        <div className="pt-24 px-4 container mx-auto min-h-screen">
            {!isConnected ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center space-y-6 text-center"
                >
                    <Lock className="w-16 h-16 text-purple-400" />
                    <h1 className="text-4xl font-bold">Connect Your Wallet</h1>
                    <p className="text-xl text-gray-300 max-w-lg">
                        Please connect your wallet to verify your NFT ownership and access exclusive content
                    </p>
                    <button
                        onClick={() => setIsConnected(true)}
                        className="glass px-8 py-4 rounded-lg flex items-center space-x-2 hover:bg-purple-500/20"
                    >
                        Connect Wallet
                    </button>
                </motion.div>
            ) : (
                <div className="space-y-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-center"
                    >
                        Welcome to the Exclusive Content
                    </motion.h1>
                    {/* Add exclusive content here */}
                </div>
            )}
        </div>
    );
};

export default GatedContent;