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
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-gold px-12 py-5 flex items-center gap-4 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                    <Zap className="text-black fill-black" size={24} />
                    <span className="text-xl font-black uppercase tracking-tighter text-black">Activate Membership</span>
                </motion.button>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm"
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
