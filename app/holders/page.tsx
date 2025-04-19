"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useUmi } from "../utils/useUmi";
import { 
    DigitalAssetWithToken, 
    JsonMetadata, 
    fetchAllDigitalAssetWithTokenByOwner 
} from "@metaplex-foundation/mpl-token-metadata";
import { PublicKey } from "@metaplex-foundation/umi";
import { 
    Lock, 
    Trophy, 
    Gift, 
    Calendar, 
    ExternalLink, 
    CheckCircle, 
    XCircle, 
    Star,
    Medal,
    Crown
} from 'lucide-react';
import { ShowNft } from "../components/ShowNFT";

// Helper function to format dates
const formatDate = (dateStr: string | undefined): string => {
    if (!dateStr) return 'Unknown date';
    
    try {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    } catch (e) {
        return 'Unknown date';
    }
};

// Helper to calculate time since mint
const getTimeSince = (dateStr: string | undefined): string => {
    if (!dateStr) return '';
    
    try {
        const date = new Date(dateStr);
        const now = new Date();
        
        const diffMs = now.getTime() - date.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
        if (diffDays < 30) {
            return `${diffDays} days`;
        } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            return `${months} month${months > 1 ? 's' : ''}`;
        } else {
            const years = Math.floor(diffDays / 365);
            const remainingMonths = Math.floor((diffDays % 365) / 30);
            return remainingMonths > 0 
                ? `${years} year${years > 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
                : `${years} year${years > 1 ? 's' : ''}`;
        }
    } catch (e) {
        return '';
    }
};

// Helper type for NFT with processed metadata
interface ProcessedNFT {
    mint: PublicKey;
    name: string;
    image: string;
    mintDate: string | undefined;
    attributes?: { trait_type: string; value: string }[];
}

const HoldersPage = () => {
    const { connected, publicKey, disconnect } = useWallet();
    const { setVisible } = useWalletModal();
    const umi = useUmi();
    
    const [loading, setLoading] = useState(true);
    const [ownedNFTs, setOwnedNFTs] = useState<DigitalAssetWithToken[]>([]);
    const [processedNFTs, setProcessedNFTs] = useState<ProcessedNFT[]>([]);
    const [mintsForDisplay, setMintsForDisplay] = useState<{ mint: PublicKey; offChainMetadata: JsonMetadata | undefined }[]>([]);
    const [showNFTGallery, setShowNFTGallery] = useState(false);
    const [longestHeldNFT, setLongestHeldNFT] = useState<{name: string, duration: string} | null>(null);
    
    // Fetch owned NFTs when wallet is connected
    useEffect(() => {
        const fetchNFTs = async () => {
            if (!connected || !publicKey) return;
            
            try {
                setLoading(true);
                
                // Get collection ID from environment variable
                const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ID || '';
                
                // Fetch all NFTs owned by this wallet
                const tokens = await fetchAllDigitalAssetWithTokenByOwner(umi, umi.identity.publicKey);
                
                // Filter NFTs by collection if collection ID is provided
                let filteredTokens = tokens;
                if (collectionId) {
                    filteredTokens = tokens.filter(token => 
                        token.metadata.collection.__option === "Some" && 
                        token.metadata.collection.value.key.toString() === collectionId &&
                        token.metadata.collection.value.verified === true
                    );
                }
                
                setOwnedNFTs(filteredTokens);
                
                // Process metadata for each token
                const metadataPromises = filteredTokens.map(async (token) => {
                    try {
                        const metadata = await fetch(token.metadata.uri).then(res => res.json());
                        return {
                            mint: token.publicKey,
                            offChainMetadata: metadata as JsonMetadata | undefined
                        };
                    } catch (error) {
                        console.error("Error fetching metadata:", error);
                        return {
                            mint: token.publicKey,
                            offChainMetadata: undefined
                        };
                    }
                });
                
                const formattedMints = await Promise.all(metadataPromises);
                setMintsForDisplay(formattedMints);
                
                // Process NFTs for display with relevant information
                const processed = formattedMints
                    .filter(nft => nft.offChainMetadata)
                    .map(nft => {
                        const metadata = nft.offChainMetadata as JsonMetadata;
                        // Extract mintDate from properties safely with type checking
                        let mintDate: string | undefined = undefined;
                        
                        if (metadata?.properties) {
                            const props = metadata.properties as any;
                            if (typeof props.date === 'string') {
                                mintDate = props.date;
                            } else if (typeof props.created_at === 'string') {
                                mintDate = props.created_at;
                            }
                        }
                        
                        return {
                            mint: nft.mint,
                            name: metadata?.name || 'Unnamed NFT',
                            image: metadata?.image || 'https://via.placeholder.com/300',
                            mintDate: mintDate,
                            attributes: metadata?.attributes as { trait_type: string; value: string }[] | undefined
                        };
                    });
                
                setProcessedNFTs(processed);
                
                // Find longest held NFT
                if (processed.length > 0) {
                    let oldest = processed[0];
                    let oldestDate = oldest.mintDate ? new Date(oldest.mintDate).getTime() : Infinity;
                    
                    processed.forEach(nft => {
                        if (nft.mintDate) {
                            const mintDate = new Date(nft.mintDate).getTime();
                            if (mintDate < oldestDate) {
                                oldest = nft;
                                oldestDate = mintDate;
                            }
                        }
                    });
                    
                    if (oldest.mintDate) {
                        setLongestHeldNFT({
                            name: oldest.name,
                            duration: getTimeSince(oldest.mintDate)
                        });
                    }
                }
                
                setLoading(false);
            } catch (error) {
                console.error("Error fetching NFTs:", error);
                setLoading(false);
            }
        };
        
        fetchNFTs();
    }, [connected, publicKey, umi]);
    
    // Simulate NFT holding stats - updated to use actual data
    const holdingStats = {
        totalNFTs: processedNFTs.length,
        longestHeld: longestHeldNFT 
            ? `${longestHeldNFT.name} (${longestHeldNFT.duration})` 
            : "None",
        percentile: 25, // Top 25% of holders - This would need a backend call to calculate accurately
        totalValue: processedNFTs.length * 0.5, // Fictional floor price of 0.5 SOL
    };
    
    // Perk status based on NFT count - removed Voting Rights as requested
    const perks = [
        { name: "Free T-shirt", requirement: 3, status: processedNFTs.length >= 3 },
        { name: "Free Event Pass", requirement: 5, status: processedNFTs.length >= 5 },
        { name: "Discord Role", requirement: 1, status: processedNFTs.length >= 1, rarityBased: true },
        { name: "Early Access to Future Drops", requirement: 2, status: processedNFTs.length >= 2 },
    ];
    
    // Exclusive links - removed Private Discord as requested
    const exclusiveLinks = [
        { name: "Merch Store (20% Off)", url: "https://merch.example.com", icon: <Gift className="w-5 h-5" /> },
        { name: "Upcoming Drop Whitelist", url: "/mint", icon: <Star className="w-5 h-5" /> },
        { name: "Community Voting", url: "/vote", icon: <Medal className="w-5 h-5" /> },
    ];
    
    // Upcoming events
    const upcomingEvents = [
        { name: "Holders-Only AMA", date: "May 30, 2023", description: "Join us for a special Q&A session" },
        { name: "Rare Trait Reveal", date: "June 15, 2023", description: "Special reveal for mythic NFT holders" },
        { name: "Merch Drop", date: "July 1, 2023", description: "Limited edition merch available for holders" },
    ];

    const handleConnectWallet = () => {
        setVisible(true);
    };

    return (
        <div className="pt-24 px-4 container mx-auto min-h-screen">
            {!connected ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center space-y-6 text-center h-[70vh]"
                >
                    <Lock className="w-16 h-16 text-purple-400" />
                    <h1 className="text-4xl font-bold">Exclusive Holder Benefits</h1>
                    <p className="text-xl text-gray-300 max-w-lg">
                        Connect your wallet to verify your NFT ownership and access exclusive holder perks
                    </p>
                    <button
                        onClick={handleConnectWallet}
                        className="btn-gradient-primary px-8 py-4 rounded-lg flex items-center space-x-2 hover:bg-purple-500/20"
                    >
                        Connect Wallet
                    </button>
                </motion.div>
            ) : (
                <div className="space-y-12">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass card-gradient p-8 rounded-2xl text-center space-y-4"
                    >
                        <Crown className="w-16 h-16 mx-auto text-purple-400" />
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                            Welcome, Holder!
                        </h1>
                        <p className="text-gray-300">
                            {publicKey?.toBase58().slice(0, 6)}...{publicKey?.toBase58().slice(-6)}
                        </p>
                        <p className="text-xl text-gray-200">
                            Thank you for being part of our exclusive community.
                        </p>
                    </motion.div>

                    {/* NFT Gallery Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Your NFT Collection</h2>
                        
                        {loading ? (
                            <div className="flex justify-center p-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                            </div>
                        ) : processedNFTs.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {processedNFTs.slice(0, 4).map((nft, index) => (
                                        <motion.div
                                            key={nft.mint.toString()}
                                            whileHover={{ scale: 1.05 }}
                                            className="glass card-gradient rounded-xl overflow-hidden cursor-pointer"
                                            onClick={() => setShowNFTGallery(true)}
                                        >
                                            <div className="aspect-square overflow-hidden">
                                                <img 
                                                    src={nft.image} 
                                                    alt={nft.name} 
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-semibold text-purple-300">{nft.name}</h3>
                                                <p className="text-sm text-gray-400">
                                                    {nft.mintDate 
                                                        ? `Owned since ${formatDate(nft.mintDate)}`
                                                        : 'Mint date unknown'
                                                    }
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                {processedNFTs.length > 4 && (
                                    <div className="text-center">
                                        <button 
                                            onClick={() => setShowNFTGallery(true)}
                                            className="px-4 py-2 glass rounded-lg text-purple-300 hover:text-purple-200"
                                        >
                                            View All {processedNFTs.length} NFTs
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="glass card-gradient p-8 rounded-xl text-center">
                                <p className="text-gray-300">You don't own any NFTs from this collection yet.</p>
                                <button
                                    onClick={() => window.location.href = '/mint'}
                                    className="mt-4 btn-gradient-primary px-6 py-2 rounded-lg"
                                >
                                    Mint Now
                                </button>
                            </div>
                        )}
                    </motion.div>

                    {/* Perks Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                            Holder Perks
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {perks.map((perk, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className="glass card-gradient p-6 rounded-xl flex items-center justify-between"
                                >
                                    <div className="flex items-center space-x-4">
                                        <Trophy className="w-8 h-8 text-purple-400" />
                                        <div>
                                            <h3 className="font-semibold text-white/90">{perk.name}</h3>
                                            <p className="text-sm text-gray-400">
                                                {perk.rarityBased 
                                                    ? "Requires 1 NFT with rare trait" 
                                                    : `Requires ${perk.requirement} NFT${perk.requirement > 1 ? 's' : ''}`}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        {perk.status ? (
                                            <div className="flex items-center">
                                                <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                                                <button className="text-sm btn-gradient-primary px-4 py-1 rounded-lg">
                                                    Claim
                                                </button>
                                            </div>
                                        ) : (
                                            <XCircle className="w-6 h-6 text-red-400" />
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats and Leaderboard */}
                    {processedNFTs.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass card-gradient p-6 rounded-xl space-y-6"
                        >
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                                Your Stats
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-4 glass rounded-lg text-center">
                                    <p className="text-gray-400 text-sm">NFTs Held</p>
                                    <p className="text-2xl font-bold text-purple-400">{holdingStats.totalNFTs}</p>
                                </div>
                                <div className="p-4 glass rounded-lg text-center">
                                    <p className="text-gray-400 text-sm">Longest Held</p>
                                    <p className="text-lg font-bold text-purple-400">{holdingStats.longestHeld}</p>
                                </div>
                                <div className="p-4 glass rounded-lg text-center">
                                    <p className="text-gray-400 text-sm">Holder Rank</p>
                                    <p className="text-lg font-bold text-purple-400">Top {holdingStats.percentile}%</p>
                                </div>
                                <div className="p-4 glass rounded-lg text-center">
                                    <p className="text-gray-400 text-sm">Est. Value</p>
                                    <p className="text-lg font-bold text-purple-400">{holdingStats.totalValue.toFixed(2)} SOL</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Exclusive Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                            Exclusive Access
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {exclusiveLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target={link.url.startsWith('http') ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    className="glass card-gradient p-6 rounded-xl flex flex-col items-center justify-center text-center space-y-3 h-32"
                                >
                                    {link.icon}
                                    <p className="font-semibold text-purple-300">{link.name}</p>
                                    <ExternalLink className="w-4 h-4 text-gray-400" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Upcoming Events */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-6 mb-16"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                            Upcoming Events
                        </h2>
                        <div className="space-y-4">
                            {upcomingEvents.map((event, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className="glass card-gradient p-6 rounded-xl flex items-center space-x-4"
                                >
                                    <Calendar className="w-12 h-12 text-purple-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-white/90">{event.name}</h3>
                                        <p className="text-sm text-purple-300">{event.date}</p>
                                        <p className="text-gray-400 mt-1">{event.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            )}

            {/* NFT Gallery Modal */}
            {showNFTGallery && mintsForDisplay.length > 0 && (
                <div className="fixed inset-0 z-50">
                    <ShowNft nfts={mintsForDisplay} />
                </div>
            )}
        </div>
    );
};

export default HoldersPage;