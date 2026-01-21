"use client";

import { motion } from "framer-motion";

interface RewardItem {
    label: string;
    value: string;
    subtext?: string;
    highlight?: boolean;
}

interface RewardCardProps {
    title: string;
    items: RewardItem[];
    icon?: React.ReactNode;
    delay?: number;
    className?: string;
}

const RewardCard: React.FC<RewardCardProps> = ({ title, icon, items, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, type: "spring" }}
            className={`glass-card-heavy border-2 border-white/5 relative overflow-hidden group ${className}`}
        >
            <div className="relative z-10 p-5 lg:p-6">
                <div className="flex items-center gap-4 lg:gap-5 mb-6 lg:mb-8 border-b border-white/5 pb-6">
                    {icon && (
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-brand-purple/20 flex items-center justify-center text-brand-purple shadow-[0_0_20px_rgba(138,43,226,0.3)] group-hover:scale-110 transition-transform duration-500">
                            {icon}
                        </div>
                    )}
                    <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight leading-none text-white">{title}</h3>
                </div>

                <div className="space-y-4">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`p-4 lg:p-5 rounded-2xl border-2 transition-all duration-300 ${item.highlight
                                ? "bg-brand-gold/20 border-brand-gold/50 shadow-[0_0_30px_rgba(191,149,63,0.15)]"
                                : "bg-black/40 border-white/5 hover:border-brand-gold/30 hover:bg-black/60"
                                }`}
                        >
                            <div className="flex justify-between items-center gap-4">
                                <span className="text-zinc-400 text-[10px] lg:text-xs font-bold uppercase tracking-wider">{item.label}</span>
                                <span className={`font-black text-lg lg:text-xl text-right leading-tight ${item.highlight ? "text-white" : "text-metallic"}`}>
                                    {item.value}
                                </span>
                            </div>
                            {item.subtext && (
                                <p className="text-[10px] lg:text-xs text-zinc-500 mt-2 font-medium border-t border-white/5 pt-2">{item.subtext}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
        </motion.div>
    );
};

export default RewardCard;
