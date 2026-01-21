"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface NFTCoinProps {
    className?: string;
    size?: number;
}

export default function NFTCoin({ className = "", size = 400 }: NFTCoinProps) {
    return (
        <div className={`relative ${className} flex items-center justify-center`} style={{ perspective: 1000 }}>
            {/* Massive Glow Behind */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold/30 blur-[80px] rounded-full -z-10 animate-pulse-fast"
                style={{ width: size * 1.8, height: size * 1.8 }}
            />

            {/* Continuous Spinning Coin */}
            <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="relative z-10 transform-style-3d"
            >
                {/* Coin Image */}
                <Image
                    src="/images/coin_new.jpg"
                    alt="Spaark Exchange Coin"
                    width={size}
                    height={size}
                    className="drop-shadow-[0_0_50px_rgba(255,184,0,0.5)] object-cover rounded-full"
                    priority
                />

                {/* Aggressive Shine/Glint Overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 animate-pulse-fast pointer-events-none" />

                {/* 3D Depth Rings (Visual Hack) */}
                <div className="absolute inset-0 rounded-full border-4 border-brand-gold/50 blur-sm animate-pulse" />
            </motion.div>

            {/* Floating particles around coin */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-4 h-4 bg-brand-gold rounded-full blur-[2px] animate-float-fast" />
                <div className="absolute bottom-10 left-10 w-2 h-2 bg-brand-purple rounded-full blur-[1px] animate-float" />
            </div>
        </div>
    );
}
