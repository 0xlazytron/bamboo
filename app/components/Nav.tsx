import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Wallet,
    Twitter,
    MessageSquare,
    Instagram,
    Menu,
    X,
    Copy as CopyIcon,
    RefreshCw as ChangeWalletIcon,
    LogOut as DisconnectIcon,
} from "lucide-react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [solBalance, setSolBalance] = useState(0);

    const handleNavClick = () => {
        setIsOpen(false);
    };

    // Wallet connection logic
    const { setVisible } = useWalletModal();
    const { publicKey, connected, disconnect, wallet } = useWallet();
    const { connection } = useConnection();

    // Handle connecting wallet
    const handleConnectWallet = () => {
        if (wallet) {
            setIsDropdownOpen(false); // Ensure dropdown is closed initially
            setVisible(true); // Open the wallet modal
        } else {
            setVisible(true); // Open the wallet modal
        }
    };

    // Handle copying wallet address
    const handleCopyAddress = () => {
        if (publicKey) {
            navigator.clipboard.writeText(publicKey.toBase58());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    // Handle disconnecting wallet
    const handleDisconnect = async () => {
        try {
            await disconnect();
            setIsDropdownOpen(false); // Close the dropdown menu
        } catch (error) {
            console.error("Disconnect error:", error);
        }
    };

    // Handle changing wallet
    const handleChangeWallet = async () => {
        try {
            await disconnect(); // Disconnect the current wallet
            setIsDropdownOpen(false); // Close the dropdown menu
            setVisible(true); // Open the wallet modal to select a new wallet
        } catch (error) {
            console.error("Error changing wallet:", error);
        }
    };

    // Fetch SOL balance
    useEffect(() => {
        const fetchBalance = async () => {
            if (publicKey) {
                try {
                    const balance = await connection.getBalance(publicKey);
                    setSolBalance(balance / 1e9);
                } catch (error) {
                    console.error("Error fetching balance:", error);
                }
            }
        };
        fetchBalance();
        const interval = setInterval(fetchBalance, 5000);
        return () => clearInterval(interval);
    }, [publicKey, connection]);

    return (
        <nav className="glass fixed top-0 w-full z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/assets/logo.png" alt="" className="w-12" />
                        <span className="text-xl font-bold text-white">The Bamboo Club</span>
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 glass rounded-lg"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <Link href="/nft-drop" className="hover:text-purple-400 transition-colors text-white">
                            NFT Drop
                        </Link>
                        <Link href="/dressing-room" className="hover:text-purple-400 transition-colors text-white">
                            Dressing Room
                        </Link>
                        <div className="flex items-center space-x-4 mr-6">
                            <a href="#" className="hover:text-purple-400 transition-colors text-white">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-purple-400 transition-colors text-white">
                                <MessageSquare className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-purple-400 transition-colors text-white">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                        <div className="relative">
                            <button
                                onClick={() => connected && setIsDropdownOpen(!isDropdownOpen)} // Only toggle dropdown if wallet is connected
                                className="btn-gradient-primary px-4 py-2 rounded-lg flex items-center space-x-2 text-white"
                            >
                                {connected ? (
                                    <>
                                        <span>{`${publicKey?.toBase58().slice(0, 4)}...${publicKey?.toBase58().slice(-4)}`}</span>
                                        <span>{solBalance.toFixed(4)} SOL</span>
                                    </>
                                ) : (
                                    <>
                                        <Wallet className="h-5 w-5" />
                                        <span onClick={handleConnectWallet}>Connect Wallet</span>
                                    </>
                                )}
                            </button>
                            {connected && isDropdownOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-48 rounded-lg overflow-hidden shadow-lg z-10"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #ff7eb3, #ff758c, #ff6f65)",
                                    }}
                                >
                                    <button
                                        onClick={handleCopyAddress}
                                        className="w-full text-left px-4 py-2 hover:bg-opacity-80 transition-colors flex items-center space-x-2"
                                    >
                                        <CopyIcon className="h-4 w-4" />
                                        <span>{copied ? "Copied!" : "Copy Address"}</span>
                                    </button>
                                    <button
                                        onClick={handleChangeWallet}
                                        className="w-full text-left px-4 py-2 hover:bg-opacity-80 transition-colors flex items-center space-x-2"
                                    >
                                        <ChangeWalletIcon className="h-4 w-4" />
                                        <span>Change Wallet</span>
                                    </button>
                                    <button
                                        onClick={handleDisconnect}
                                        className="w-full text-left px-4 py-2 hover:bg-opacity-80 transition-colors flex items-center space-x-2"
                                    >
                                        <DisconnectIcon className="h-4 w-4" />
                                        <span>Disconnect</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden absolute left-0 right-0 top-full bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                        <Link
                            href="/nft-drop"
                            className="hover:text-purple-400 transition-colors py-2"
                            onClick={handleNavClick}
                        >
                            NFT Drop
                        </Link>
                        <Link
                            href="/dressing-room"
                            className="hover:text-purple-400 transition-colors py-2"
                            onClick={handleNavClick}
                        >
                            Dressing Room
                        </Link>
                        <div className="flex items-center space-x-4 py-2">
                            <a href="#" className="hover:text-purple-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-purple-400 transition-colors">
                                <MessageSquare className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-purple-400 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                        <div className="relative">
                            <button
                                onClick={() => connected && setIsDropdownOpen(!isDropdownOpen)} // Only toggle dropdown if wallet is connected
                                className="btn-gradient-primary px-4 py-2 rounded-lg flex items-center space-x-2 w-full justify-center"
                            >
                                {connected ? (
                                    <>
                                        <span>{`${publicKey?.toBase58().slice(0, 4)}...${publicKey?.toBase58().slice(-4)}`}</span>
                                        <span>{solBalance.toFixed(4)} SOL</span>
                                    </>
                                ) : (
                                    <>
                                        <Wallet className="h-5 w-5" />
                                        <span onClick={handleConnectWallet}>Connect Wallet</span>
                                    </>
                                )}
                            </button>
                            {connected && isDropdownOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-48 rounded-lg overflow-hidden shadow-lg z-10"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #ff7eb3, #ff758c, #ff6f65)",
                                    }}
                                >
                                    <button
                                        onClick={handleCopyAddress}
                                        className="w-full text-left px-4 py-2 hover:bg-opacity-80 transition-colors flex items-center space-x-2"
                                    >
                                        <CopyIcon className="h-4 w-4" />
                                        <span>{copied ? "Copied!" : "Copy Address"}</span>
                                    </button>
                                    <button
                                        onClick={handleChangeWallet}
                                        className="w-full text-left px-4 py-2 hover:bg-opacity-80 transition-colors flex items-center space-x-2"
                                    >
                                        <ChangeWalletIcon className="h-4 w-4" />
                                        <span>Change Wallet</span>
                                    </button>
                                    <button
                                        onClick={handleDisconnect}
                                        className="w-full text-left px-4 py-2 hover:bg-opacity-80 transition-colors flex items-center space-x-2"
                                    >
                                        <DisconnectIcon className="h-4 w-4" />
                                        <span>Disconnect</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;