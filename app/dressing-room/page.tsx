"use client"
import { motion } from 'framer-motion';
import { ShoppingCart, ChevronDown } from 'lucide-react';

const DressingRoom = () => {
    const products = [
        {
            id: 1,
            name: "Anime Digital Art",
            price: 2.96,
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            name: "Portrait Painting Art",
            price: 2.96,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            name: "Golden Portrait Art",
            price: 2.96,
            image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            name: "Abstract 3D Art",
            price: 2.96,
            image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80"
        },
    ];

    return (
        <div className="pt-24 px-4 container mx-auto min-h-screen">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Featured Product */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative"
                >
                    <div className="glass card-gradient aspect-square rounded-2xl p-8 relative overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
                            alt="Abstract 3D Digital Art"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                </motion.div>

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                        Abstract 3D Digital Art
                    </h1>

                    <p className="text-gray-300 text-lg">
                        Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Modi, Enim! Veritatis Quod Cum Voluptatibus Minima Eveniet Dolorum Asperiores Iste Dignissimos
                    </p>

                    <div className="flex items-center space-x-2">
                        <img
                            src="./assets/sol.svg"
                            alt="ETH"
                            className="w-8 h-8"
                        />
                        <span className="text-3xl font-bold text-white/70">2.96 SOL</span>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full btn-gradient-primary py-4 rounded-xl text-lg font-bold text-white/70">
                            BUY
                        </button>

                        <button className="w-full btn-gradient-secondary py-4 rounded-xl text-lg font-bold flex items-center justify-center space-x-2">
                            <ShoppingCart className="w-5 h-5 text-white/70" />
                            <span className="text-white/70">Add to Cart</span>
                        </button>
                    </div>

                    <button className="w-full glass card-gradient py-4 rounded-xl text-lg font-bold flex items-center justify-center space-x-2">
                        <span className="text-white/70">Description</span>
                        <ChevronDown className="w-5 text-white/70" />
                    </button>
                </motion.div>
            </div>

            {/* Similar Products */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-24"
            >
                <h2 className="text-3xl font-bold mb-8 text-white/70">Similar Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ scale: 1.02 }}
                            className="glass card-gradient rounded-xl overflow-hidden relative group cursor-pointer"
                        >
                            <div className="aspect-square">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 space-y-2">
                                <h3 className="font-bold text-lg text-white/70">{product.name}</h3>
                                <div className="flex items-center space-x-2">
                                    <img
                                        src="./assets/sol.svg"
                                        alt="ETH"
                                        className="w-5 h-5"
                                    />
                                    <span className="font-bold text-white/70">{product.price} SOL</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t text-white/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default DressingRoom;