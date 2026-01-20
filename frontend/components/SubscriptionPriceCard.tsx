"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface SubscriptionProps {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    delay?: number;
}

const SubscriptionPriceCard = ({ title, price, features, isPopular, delay = 0 }: SubscriptionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, type: "spring", stiffness: 100 }}
            className={`relative p-10 rounded-[2.5rem] border-2 backdrop-blur-2xl flex flex-col h-full overflow-hidden transition-all duration-300 group ${isPopular
                ? "bg-black/60 border-brand-purple shadow-[0_0_60px_rgba(138,43,226,0.15)] hover:shadow-[0_0_100px_rgba(138,43,226,0.3)]"
                : "bg-black/40 border-white/10 hover:border-white/30 hover:bg-black/60"
                }`}
        >
            {isPopular && (
                <div className="absolute -right-12 top-8 rotate-45 bg-brand-purple text-white w-48 py-2 text-center text-xs font-black uppercase tracking-[0.2em] shadow-xl z-20">
                    Best Value
                </div>
            )}

            <div className="mb-6 relative z-10">
                <h3 className={`text-lg font-black uppercase tracking-[0.2em] mb-2 ${isPopular ? "text-brand-gold" : "text-zinc-500"}`}>{title}</h3>
                <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white tracking-tighter text-glow">{price}</span>
                    <span className="text-zinc-500 font-bold uppercase text-xs tracking-widest">/ lifetime</span>
                </div>
            </div>

            <ul className="space-y-6 mb-12 flex-1 relative z-10">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-200 font-medium">
                        <div className={`mt-0.5 min-w-[24px] h-[24px] rounded-full flex items-center justify-center shadow-lg ${isPopular ? "bg-brand-purple text-white" : "bg-white/10 text-zinc-400"}`}>
                            <Check size={14} strokeWidth={4} />
                        </div>
                        <span className="leading-tight text-lg">{feature}</span>
                    </li>
                ))}
            </ul>

            <Link
                href="/register"
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform group-hover:scale-[1.02] active:scale-95 shadow-2xl relative z-10 ${isPopular
                    ? "bg-brand-purple text-white hover:bg-brand-indigo hover:shadow-brand-purple/50"
                    : "bg-white text-black hover:bg-zinc-200 hover:shadow-white/20"
                    }`}
            >
                Get Started <ArrowRight size={20} strokeWidth={3} className="animate-pulse-fast" />
            </Link>

            {/* Aggressive Background Elements */}
            <div className={`absolute -bottom-20 -right-20 w-80 h-80 blur-[100px] rounded-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity ${isPopular ? "bg-brand-purple" : "bg-brand-indigo"
                }`} />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-5 mix-blend-overlay" />
        </motion.div>
    );
};

export default SubscriptionPriceCard;
