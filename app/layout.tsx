"use client";
import "./globals.css";
import { UmiProvider } from "./utils/UmiProvider";
import { SolanaTimeProvider } from "./utils/SolanaTimeContext";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ChakraProvider } from "@chakra-ui/react";
import "@solana/wallet-adapter-react-ui/styles.css";
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import './globals.css';
import Navbar from './components/Nav';
import Footer from './components/Footer';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let network = WalletAdapterNetwork.Devnet;
  if (
    process.env.NEXT_PUBLIC_ENVIRONMENT === "mainnet-beta" ||
    process.env.NEXT_PUBLIC_ENVIRONMENT === "mainnet"
  ) {
    network = WalletAdapterNetwork.Mainnet;
  }
  let endpoint = "https://api.devnet.solana.com";
  if (process.env.NEXT_PUBLIC_RPC) {
    endpoint = process.env.NEXT_PUBLIC_RPC;
  }
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
  ];
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="Bamboo Club NFT" />
        <meta name="keywords" content="Solana, NFT, Mint, Candy Machine" />
        <meta name="author" content="https://fiverr.com/rich_dev" />
        <title>Bamboo Club NFT</title>
      </head>
      <body>
        <div className="parallax-bg" />
        <div className="parallax-overlay" />
        <div className="animated-grid" />
        <WalletProvider wallets={wallets} autoConnect>
          <UmiProvider endpoint={endpoint}>
            <WalletModalProvider>
              <SolanaTimeProvider>
                <Navbar />
                {children}
                <Footer />
              </SolanaTimeProvider>
            </WalletModalProvider>
          </UmiProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
