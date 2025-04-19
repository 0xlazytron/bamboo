import { Umi } from "@metaplex-foundation/umi";
import { DigitalAssetWithToken, fetchAllDigitalAssetWithTokenByOwner } from "@metaplex-foundation/mpl-token-metadata";
import { PublicKey } from "@metaplex-foundation/umi";

// NFT Collection ID - Normally you'd fetch this from the environment variables
const getNftCollectionId = (): string => {
  return process.env.NEXT_PUBLIC_COLLECTION_ID || ""; 
};

export interface EligibilityResult {
  isEligible: boolean;
  nftCount: number;
  requiredCount: number;
  ownedNFTs: DigitalAssetWithToken[];
}

/**
 * Checks if a wallet is eligible for a t-shirt by verifying they own at least 3 unique NFTs 
 * from the collection
 */
export const checkTShirtEligibility = async (
  umi: Umi,
  walletPublicKey: PublicKey
): Promise<EligibilityResult> => {
  try {
    // Fetch all NFTs owned by this wallet
    const ownedTokens = await fetchAllDigitalAssetWithTokenByOwner(
      umi, 
      walletPublicKey
    );
    
    const collectionId = getNftCollectionId();
    const requiredCount = 3;
    
    // If collection ID is specified, filter by collection
    let relevantNFTs = ownedTokens;
    if (collectionId) {
      relevantNFTs = ownedTokens.filter(token => 
        token.metadata.collection.__option === "Some" && 
        token.metadata.collection.value.key.toString() === collectionId &&
        token.metadata.collection.value.verified === true
      );
    }
    
    // Count unique NFTs (by mint address)
    const uniqueNFTs = new Set(
      relevantNFTs.map(token => token.publicKey.toString())
    );
    
    const nftCount = uniqueNFTs.size;
    const isEligible = nftCount >= requiredCount;
    
    return {
      isEligible,
      nftCount,
      requiredCount,
      ownedNFTs: relevantNFTs
    };
  } catch (error) {
    console.error("Error checking t-shirt eligibility:", error);
    return {
      isEligible: false,
      nftCount: 0,
      requiredCount: 3,
      ownedNFTs: []
    };
  }
}; 