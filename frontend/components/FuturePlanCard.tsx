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

const FuturePlanCard = ({ step, title, description, image, delay = 0, isReversed = false, imageFit = "cover" }: FuturePlanCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch min-h-[400px] lg:min-h-[450px] bg-black/40 backdrop-blur-md overflow-hidden group border border-white/5`}
        >
            {/* Text Section */}
            <div className="flex-1 p-6 lg:p-12 flex flex-col justify-center relative z-10">
                {/* Massive Background Number */}
                <div className={`absolute top-0 ${isReversed ? "right-10" : "left-10"} text-[120px] font-black leading-none text-white/[0.02] select-none pointer-events-none z-0`}>
                    {step.split(' ')[1]}
                </div>

                <div className="relative z-10">
                    <div className="inline-block px-4 py-2 rounded-lg bg-brand-purple text-white font-black uppercase tracking-[0.2em] text-xs mb-2 shadow-[0_0_20px_rgba(138,43,226,0.4)] animate-pulse-fast">
                        {step}
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black leading-[0.9] text-white mb-4 uppercase tracking-tighter mix-blend-screen">
                        {title}
                    </h3>
                </div>
                <p className="text-sm lg:text-base text-zinc-400 font-bold leading-relaxed border-l-4 border-brand-gold/20 pl-6">
                    {description}
                </p>
                <div className={`h-1.5 w-24 bg-brand-purple rounded-full mt-6 mx-auto lg:mx-0 transition-all duration-300 group-hover:w-full group-hover:bg-brand-gold shadow-[0_0_15px_rgba(138,43,226,0.5)]`} />
            </div>

            {/* Image Section */}
            <div className={`flex-1 relative w-full min-h-[200px] lg:min-h-full overflow-hidden ${isReversed ? 'lg:order-first' : ''}`}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={`object-${imageFit} transition-all duration-500`}
                />
                {/* Screen Glare / Tech Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-transparent pointer-events-none mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-brand-gold shadow-[0_0_20px_rgba(255,215,0,0.8)]" />
                {/* Decorative Tech Elements behind */}
                <div className="absolute z-[-1] inset-0 bg-brand-purple/30 blur-3xl rounded-full scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
        </motion.div>
    );
};

export default FuturePlanCard;
