"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FuturePlanCardProps {
    step: string;
    title: string;
    description: string;
    image: string;
    delay?: number;
    isReversed?: boolean;
    imageFit?: "cover" | "contain" | "fill";
}

const FuturePlanCard = ({ step, title, description, image, delay = 0, isReversed = false, imageFit = "contain" }: FuturePlanCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-12 group relative rounded-3xl p-6 hover:bg-white/[0.02] transition-colors`}
        >
            {/* Massive Background Number */}
            <div className={`absolute top-0 ${isReversed ? "right-10" : "left-10"} text-[120px] font-black leading-none text-white/[0.02] select-none pointer-events-none z-0`}>
                {step.split(' ')[1]}
            </div>

            {/* Image Side - Compact 16:9 Media Display */}
            <div className="flex-1 relative w-full flex justify-center lg:justify-end lg:pr-12 z-10">
                <div className={`relative w-full max-w-[380px] aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-black rotate-0 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 group-hover:shadow-[0_0_60px_rgba(138,43,226,0.3)] rgb-border ${isReversed ? 'lg:order-last lg:justify-start lg:pl-12 lg:pr-0' : ''}`}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className={`object-${imageFit} grayscale group-hover:grayscale-0 transition-all duration-500`}
                    />

                    {/* Screen Glare / Tech Overlay */}
                    <div className="absolute inset-0 bg-linear-to-tr from-brand-purple/20 to-transparent pointer-events-none mix-blend-overlay" />
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-brand-gold shadow-[0_0_20px_rgba(255,215,0,0.8)]" />
                </div>

                {/* Decorative Tech Elements behind */}
                <div className="absolute z-[-1] inset-0 bg-brand-purple/30 blur-3xl rounded-full scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-6 text-center lg:text-left z-10">
                <div className="inline-block px-4 py-2 rounded-lg bg-brand-purple text-white font-black uppercase tracking-[0.2em] text-xs mb-2 shadow-[0_0_20px_rgba(138,43,226,0.4)] animate-pulse-fast">
                    {step}
                </div>
                <h3 className="text-4xl lg:text-5xl font-black leading-[0.9] text-white mb-4 uppercase tracking-tighter mix-blend-screen">
                    {title}
                </h3>
                <p className="text-lg text-zinc-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-bold border-l-4 border-brand-gold/20 pl-6">
                    {description}
                </p>
                <div className={`h-1.5 w-24 bg-brand-purple rounded-full mt-6 mx-auto lg:mx-0 transition-all duration-300 group-hover:w-full group-hover:bg-brand-gold shadow-[0_0_15px_rgba(138,43,226,0.5)]`} />
            </div>
        </motion.div>
    );
};

export default FuturePlanCard;
