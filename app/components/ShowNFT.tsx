import { JsonMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { PublicKey } from "@metaplex-foundation/umi";
import React, { useState } from "react";

// Trait Component
interface TraitProps {
  heading: string;
  description: string;
}
const Trait = ({ heading, description }: TraitProps) => {
  return (
    <div className="bg-purple-200/20 backdrop-blur-md rounded-lg w-32 h-16 flex flex-col items-center justify-center">
      <p className="text-sm text-purple-300">{heading}</p>
      <p className="text-sm font-semibold text-purple-400 mt-[4px]">{description}</p>
    </div>
  );
};

// Traits Component
interface TraitsProps {
  metadata: JsonMetadata;
}
const Traits = ({ metadata }: TraitsProps) => {
  if (!metadata || !metadata.attributes) {
    return null;
  }
  const traits = metadata.attributes.filter(
    (a) => a.trait_type !== undefined && a.value !== undefined
  );
  const traitList = traits.map((t) => (
    <Trait
      key={t.trait_type}
      heading={t.trait_type ?? ""}
      description={t.value ?? ""}
    />
  ));
  return (
    <div className="mt-4 grid grid-cols-3 gap-4 text-center">
      {traitList}
    </div>
  );
};

// Card Component
export default function Card({
  metadata,
}: {
  metadata: JsonMetadata | undefined;
}) {
  if (!metadata) {
    return null;
  }
  const image = metadata.animation_url ?? metadata.image;
  return (
    <div className="max-w-[34rem] mx-auto w-full bg-purple-500/10 backdrop-blur-lg rounded-3xl p-6 border border-blue-300/20 shadow-xl">
      {/* Image */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-64 bg-center bg-no-repeat bg-cover rounded-lg"
      ></div>
      {/* Name */}
      <h2 className="mt-4 text-lg font-semibold text-purple-300">{metadata.name}</h2>
      {/* Description */}
      <p className="mt-2 text-sm text-purple-200">{metadata.description}</p>
      {/* Traits */}
      <Traits metadata={metadata} />
    </div>
  );
}

// ShowNft Component
type Props = {
  nfts:
  | { mint: PublicKey; offChainMetadata: JsonMetadata | undefined }[]
  | undefined;
};
export const ShowNft = ({ nfts }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  if (!nfts) {
    return null;
  }
  const cards = nfts.map((nft, index) => (
    <div key={nft.mint.toString()} className="mb-6">
      <h2 className="text-lg font-semibold text-purple-300 mb-2">{nft.offChainMetadata?.name}</h2>
      <Card metadata={nft.offChainMetadata} />
    </div>
  ));

  // Close Button Handler
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent event propagation
    setIsOpen(false); // Close the popup
    window.location.reload(); // Refresh the page
  };

  return (
    <>
      {/* Render only if the popup is open */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 custom-scrollbar"
          onClick={() => setIsOpen(false)} // Close popup when clicking outside
        >
          <div
            className="relative w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[33vw] max-h-[100vh] bg-purple-500/10 backdrop-blur-lg rounded-3xl p-6 border border-blue-300/20 shadow-xl my-2 overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the popup from closing it
          >
            {/* Close Button */}
            <button
              onClick={handleClose} // Use the dedicated handler
              className="absolute top-4 right-4 w-8 h-8 bg-purple-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-blue-300/20 shadow-md hover:bg-purple-500/30 transition-all duration-200 z-10" // Ensure higher z-index
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Title */}
            <h1 className="text-2xl font-bold text-purple-300 mb-6">Your Minted NFTs</h1>
            {/* Scrollable Cards Container */}
            <div className="max-h-[84vh] overflow-y-auto custom-scrollbar">
              {cards.length > 0 ? (
                <div>{cards}</div>
              ) : (
                <p className="text-gray-300">No NFTs found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};