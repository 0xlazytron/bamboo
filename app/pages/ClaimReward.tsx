import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const ClaimReward = () => {
  const [formData, setFormData] = React.useState({
    size: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-24 px-4 container mx-auto min-h-screen max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Gift className="w-16 h-16 mx-auto text-purple-400 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Claim Your Free T-Shirt</h1>
        <p className="text-xl text-gray-300">
          As a holder of 3+ NFTs, you're eligible for a free exclusive T-shirt
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="glass p-8 rounded-xl space-y-6 "
      >
        <div>
          <label className="block text-sm font-medium mb-2">T-Shirt Size</label>
          <select
            className="w-full glass bg-purple-500 p-3 rounded-lg text-black outline-none"
            value={formData.size}
            onChange={(e) => setFormData({ ...formData, size: e.target.value })}
            required
          >
            <option value="">Select Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">X-Large</option>
            <option value="2XL">2X-Large</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Shipping Address</label>
          <input
            type="text"
            className="w-full glass bg-transparent p-3 rounded-lg"
            placeholder="Street Address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">City</label>
            <input
              type="text"
              className="w-full glass bg-transparent p-3 rounded-lg"
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">State/Province</label>
            <input
              type="text"
              className="w-full glass bg-transparent p-3 rounded-lg"
              placeholder="State"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">ZIP/Postal Code</label>
            <input
              type="text"
              className="w-full glass bg-transparent p-3 rounded-lg"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <input
              type="text"
              className="w-full glass bg-transparent p-3 rounded-lg"
              placeholder="Country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full glass px-8 py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-500/20"
        >
          <Gift className="w-5 h-5" />
          <span>Claim Your T-Shirt</span>
        </button>
      </motion.form>
    </div>
  );
};

export default ClaimReward;