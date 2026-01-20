"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

const MembershipCounter = () => {
    // Mock starting count - in production this would fetch from API
    const [count, setCount] = useState(12450);

    // Spring animation for smooth counting
    const springCount = useSpring(count, { stiffness: 50, damping: 20 });
    const displayCount = useTransform(springCount, (latest) => Math.floor(latest).toLocaleString());

    useEffect(() => {
        // Simulate dynamic growth
        const interval = setInterval(() => {
            setCount(prev => prev + Math.floor(Math.random() * 3));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center sm:items-start gap-4">
            <Link href="#subscription">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-brand-gold blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                    <div
                        className="relative px-10 py-5 rounded-full flex items-center gap-3 border-2 border-transparent shadow-[0_0_30px_rgba(255,184,0,0.3)] bg-clip-padding"
                        style={{
                            backgroundImage: "linear-gradient(to right, #FFB800, #F97316), conic-gradient(from 0deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff0080, #ff0000)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",
                            animation: "rgb-spin 4s linear infinite"
                        }}
                    >
                        <Zap className="text-white fill-white" size={20} />
                        <span className="text-xl font-black uppercase tracking-wider text-white">Activate Membership</span>
                    </div>
                </motion.button>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 px-4 py-2 rounded-full border border-transparent backdrop-blur-sm rgb-border"
                style={{ borderRadius: "9999px" }}
            >
                <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-zinc-400">Live Registered Users:</span>
                    <motion.span className="text-lg font-bold text-white tabular-nums">
                        {displayCount}
                    </motion.span>
                </div>
            </motion.div>
        </div>
    );
};

export default MembershipCounter;
