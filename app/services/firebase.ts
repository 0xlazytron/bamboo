import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp, getDocs, query, where, Firestore } from 'firebase/firestore';

// Firebase config - should be in environment variables in a production app
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
let app;
let db: Firestore | undefined;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export interface ClaimData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  walletAddress: string;
  nftIds: string[];
  tShirtSize: string;
  createdAt: Timestamp;
}

/**
 * Stores a t-shirt claim in the database
 */
export const storeTShirtClaim = async (data: Omit<ClaimData, 'createdAt'>): Promise<string> => {
  try {
    if (!db) throw new Error("Firebase not initialized");
    
    // Check if this wallet has already claimed a t-shirt
    const alreadyClaimed = await hasAlreadyClaimed(data.walletAddress);
    if (alreadyClaimed) {
      throw new Error("This wallet has already claimed a t-shirt");
    }
    
    const docRef = await addDoc(collection(db, 'tshirt-claims'), {
      ...data,
      createdAt: Timestamp.now()
    });
    
    return docRef.id;
  } catch (error) {
    console.error("Error storing t-shirt claim:", error);
    throw error;
  }
};

/**
 * Checks if a wallet has already claimed a t-shirt
 */
export const hasAlreadyClaimed = async (walletAddress: string): Promise<boolean> => {
  try {
    if (!db) return false;
    
    const q = query(
      collection(db, 'tshirt-claims'), 
      where('walletAddress', '==', walletAddress)
    );
    
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking previous claims:", error);
    return false;
  }
}; 