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
                    <div
                        className="relative px-10 py-5 rounded-full flex items-center gap-3 border border-white/20 bg-gradient-to-r from-brand-purple/20 to-brand-gold/20 backdrop-blur-md hover:from-brand-purple/40 hover:to-brand-gold/40 transition-all shadow-[0_0_30px_rgba(138,43,226,0.2)] group-hover:shadow-[0_0_40px_rgba(255,184,0,0.3)]"
                    >
                        <Zap className="text-brand-gold fill-brand-gold" size={20} />
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
