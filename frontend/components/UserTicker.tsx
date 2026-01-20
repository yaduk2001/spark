"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const mockUsers = [
    { name: "Alex Crypto", id: "ID: #8821" },
    { name: "Sarah Chain", id: "ID: #9932" },
    { name: "Mike Hodl", id: "ID: #1120" },
    { name: "Jessica NFT", id: "ID: #4451" },
    { name: "David Spark", id: "ID: #7721" },
];

const UserTicker = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % mockUsers.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-8 left-8 z-40 hidden md:block pointer-events-none">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="glass-card p-4 pr-8 border-brand-purple/30 bg-black/60 flex items-center gap-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(138,43,226,0.2)]"
                >
                    <div className="relative w-12 h-12 rounded-full border-2 border-brand-gold overflow-hidden bg-zinc-800">
                        {/* Placeholder for user avatar - normally would be dynamic image */}
                        <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-brand-purple to-brand-indigo font-bold text-white">
                            {mockUsers[currentIndex].name[0]}
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-0.5">Just Activated</div>
                        <div className="text-white font-bold">{mockUsers[currentIndex].name}</div>
                        <div className="text-[10px] text-zinc-400 font-mono">{mockUsers[currentIndex].id}</div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default UserTicker;
