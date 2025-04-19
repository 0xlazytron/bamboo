"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useUmi } from "../utils/useUmi";
import { CheckCircle, XCircle, ShoppingBag, Loader, ArrowLeft } from 'lucide-react';
import { checkTShirtEligibility, EligibilityResult } from '../services/eligibility';
import { storeTShirtClaim, hasAlreadyClaimed } from '../services/firebase';

type FormData = {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  tShirtSize: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const ClaimPage = () => {
  const router = useRouter();
  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const umi = useUmi();
  
  const [eligibilityResult, setEligibilityResult] = useState<EligibilityResult | null>(null);
  const [isChecking, setIsChecking] = useState(true);
  const [hasChecked, setHasChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    tShirtSize: 'M'
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  
  // Check eligibility when wallet connects
  useEffect(() => {
    const checkEligibility = async () => {
      if (!connected || !publicKey) {
        setIsChecking(false);
        return;
      }
      
      try {
        setIsChecking(true);
        
        // Check if user has already claimed a t-shirt
        const claimed = await hasAlreadyClaimed(publicKey.toBase58());
        if (claimed) {
          setAlreadyClaimed(true);
          setIsChecking(false);
          setHasChecked(true);
          return;
        }
        
        // Check NFT eligibility
        const result = await checkTShirtEligibility(umi, umi.identity.publicKey);
        setEligibilityResult(result);
        setIsChecking(false);
        setHasChecked(true);
      } catch (error) {
        console.error("Error checking eligibility:", error);
        setIsChecking(false);
        setHasChecked(true);
      }
    };
    
    checkEligibility();
  }, [connected, publicKey, umi]);
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;
    
    // Validate each field
    if (!formData.fullName.trim()) {
      errors.fullName = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
      isValid = false;
    }
    
    if (!formData.city.trim()) {
      errors.city = 'City is required';
      isValid = false;
    }
    
    if (!formData.state.trim()) {
      errors.state = 'State/Province is required';
      isValid = false;
    }
    
    if (!formData.postalCode.trim()) {
      errors.postalCode = 'Postal/ZIP code is required';
      isValid = false;
    }
    
    if (!formData.country.trim()) {
      errors.country = 'Country is required';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    if (!connected || !publicKey || !eligibilityResult?.isEligible) return;
    
    try {
      setSubmitting(true);
      
      // Store claim in database
      await storeTShirtClaim({
        ...formData,
        walletAddress: publicKey.toBase58(),
        nftIds: eligibilityResult.ownedNFTs.slice(0, 3).map(nft => nft.publicKey.toString())
      });
      
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting claim:", error);
      if (error instanceof Error && error.message.includes("already claimed")) {
        setAlreadyClaimed(true);
      }
    } finally {
      setSubmitting(false);
    }
  };
  
  const handleConnectWallet = () => {
    setVisible(true); // Open wallet dialog
  };
  
  if (!connected) {
    return (
      <div className="pt-24 px-4 container mx-auto min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass card-gradient p-8 rounded-2xl text-center max-w-2xl mx-auto space-y-6"
        >
          <ShoppingBag className="w-16 h-16 mx-auto text-purple-400" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Claim Your Free T-Shirt
          </h1>
          <p className="text-xl text-gray-300">
            Connect your wallet to verify your NFT ownership and claim your free Bitcoin T-shirt.
          </p>
          <button
            onClick={handleConnectWallet}
            className="btn-gradient-primary px-8 py-4 rounded-lg flex items-center space-x-2 mx-auto"
          >
            Connect Wallet
          </button>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 px-4 container mx-auto min-h-screen">
      <div className="max-w-2xl mx-auto">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          onClick={() => router.push('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </motion.button>
        
        {isChecking ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass card-gradient p-8 rounded-2xl text-center space-y-6"
          >
            <Loader className="w-12 h-12 mx-auto text-purple-400 animate-spin" />
            <h2 className="text-2xl font-bold">Checking Eligibility...</h2>
            <p className="text-gray-300">We're verifying your NFT ownership to see if you qualify for a free t-shirt.</p>
          </motion.div>
        ) : alreadyClaimed ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass card-gradient p-8 rounded-2xl text-center space-y-6"
          >
            <CheckCircle className="w-16 h-16 mx-auto text-green-400" />
            <h1 className="text-3xl font-bold">You've Already Claimed Your T-Shirt!</h1>
            <p className="text-gray-300">
              Our records show you've already claimed your free Bitcoin T-shirt. It should arrive within 7 days from your claim date.
            </p>
            <p className="text-sm text-gray-400">
              If you have questions about your order, please contact our support team.
            </p>
            <button
              onClick={() => router.push('/')}
              className="btn-gradient-primary px-8 py-3 rounded-lg mx-auto"
            >
              Return Home
            </button>
          </motion.div>
        ) : hasChecked && eligibilityResult ? (
          eligibilityResult.isEligible ? (
            formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass card-gradient p-8 rounded-2xl text-center space-y-6"
              >
                <CheckCircle className="w-16 h-16 mx-auto text-green-400" />
                <h1 className="text-3xl font-bold">T-Shirt Claim Successful!</h1>
                <p className="text-gray-300">
                  Thank you for your claim! Your Bitcoin T-shirt will be shipped to the provided address within 7 days.
                </p>
                <button
                  onClick={() => router.push('/')}
                  className="btn-gradient-primary px-8 py-3 rounded-lg mx-auto"
                >
                  Return Home
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass card-gradient p-8 rounded-2xl space-y-6"
              >
                <div className="text-center mb-6">
                  <CheckCircle className="w-12 h-12 mx-auto text-green-400" />
                  <h1 className="text-3xl font-bold mt-2">Congrats! You're Eligible</h1>
                  <p className="text-gray-300 mt-1">
                    You own {eligibilityResult.nftCount} NFTs from our collection
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold border-b border-gray-700 pb-2">Shipping Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleFormChange}
                        className={`w-full glass p-3 rounded-lg bg-white/5 ${formErrors.fullName ? 'border border-red-500' : 'border border-transparent'}`}
                        placeholder="Your full name"
                      />
                      {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className={`w-full glass p-3 rounded-lg bg-white/5 ${formErrors.email ? 'border border-red-500' : 'border border-transparent'}`}
                        placeholder="Your email address"
                      />
                      {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Street Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleFormChange}
                        className={`w-full glass p-3 rounded-lg bg-white/5 ${formErrors.address ? 'border border-red-500' : 'border border-transparent'}`}
                        placeholder="Your street address"
                      />
                      {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleFormChange}
                          className={`w-full glass p-3 rounded-lg bg-white/5 ${formErrors.city ? 'border border-red-500' : 'border border-transparent'}`}
                          placeholder="City"
                        />
                        {formErrors.city && <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">State/Province</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleFormChange}
                          className={`w-full glass p-3 rounded-lg bg-white/5 ${formErrors.state ? 'border border-red-500' : 'border border-transparent'}`}
                          placeholder="State/Province"
                        />
                        {formErrors.state && <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Postal/ZIP Code</label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleFormChange}
                          className={`w-full glass p-3 rounded-lg bg-white/5 ${formErrors.postalCode ? 'border border-red-500' : 'border border-transparent'}`}
                          placeholder="Postal/ZIP Code"
                        />
                        {formErrors.postalCode && <p className="text-red-500 text-sm mt-1">{formErrors.postalCode}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleFormChange}
                          className={`w-full glass p-3 rounded-lg bg-white/5 ${formErrors.country ? 'border border-red-500' : 'border border-transparent'}`}
                          placeholder="Country"
                        />
                        {formErrors.country && <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">T-Shirt Size</label>
                      <select
                        name="tShirtSize"
                        value={formData.tShirtSize}
                        onChange={handleFormChange}
                        className="w-full glass p-3 rounded-lg bg-white/5 border border-transparent"
                      >
                        <option value="S">Small (S)</option>
                        <option value="M">Medium (M)</option>
                        <option value="L">Large (L)</option>
                        <option value="XL">X-Large (XL)</option>
                        <option value="XXL">XX-Large (XXL)</option>
                      </select>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-gradient-primary py-4 rounded-lg font-bold text-lg mt-6 flex items-center justify-center"
                  >
                    {submitting ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Claim Your T-Shirt'
                    )}
                  </button>
                </form>
              </motion.div>
            )
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass card-gradient p-8 rounded-2xl text-center space-y-6"
            >
              <XCircle className="w-16 h-16 mx-auto text-red-400" />
              <h1 className="text-3xl font-bold">Not Eligible Yet</h1>
              <p className="text-gray-300">
                You currently own {eligibilityResult.nftCount} NFTs from our collection, but you need at least {eligibilityResult.requiredCount} to claim a free t-shirt.
              </p>
              <button
                onClick={() => router.push('/mint')}
                className="btn-gradient-primary px-8 py-3 rounded-lg mx-auto"
              >
                Mint More NFTs
              </button>
            </motion.div>
          )
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass card-gradient p-8 rounded-2xl text-center space-y-6"
          >
            <XCircle className="w-16 h-16 mx-auto text-red-400" />
            <h1 className="text-3xl font-bold">Eligibility Check Failed</h1>
            <p className="text-gray-300">
              There was an error checking your eligibility. Please try again later.
            </p>
            <button
              onClick={() => router.push('/')}
              className="btn-gradient-primary px-8 py-3 rounded-lg mx-auto"
            >
              Return Home
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ClaimPage;