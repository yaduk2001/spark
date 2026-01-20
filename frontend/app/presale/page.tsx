"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Info, TrendingUp, PieChart, ShieldCheck } from "lucide-react";
import { fetchPresaleStats } from "@/lib/api";

export default function PresalePage() {
    const [payAmount, setPayAmount] = useState("");
    const [stats, setStats] = useState({
        hardCap: 1500000,
        currentRaised: 0,
        participants: 0,
        exchangeRate: 1250,
        tokensSold: 0
    });

    useEffect(() => {
        fetchPresaleStats()
            .then(data => setStats(data))
            .catch(err => console.error("Failed to fetch presale stats:", err));
    }, []);

    const tokenomics = [
        { label: "Community & Rewards", value: 40, color: "#8A2BE2" },
        { label: "Liquidity Pool", value: 30, color: "#FFD700" },
        { label: "Development Fund", value: 20, color: "#4B0082" },
        { label: "Ecosystem Partners", value: 10, color: "#222" },
    ];

    const receiveAmount = payAmount ? (parseFloat(payAmount) * stats.exchangeRate).toLocaleString('en-US') : "0.00";
    const progress = (stats.currentRaised / stats.hardCap) * 100;

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-6"
                    >
                        Token <span className="gradient-text">Presale</span>
                    </motion.h1>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
                        Capitalize on the ground floor. Phase 2 distribution of the native utility token that powers the Founders Circle ecosystem.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Swap Widget */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card p-8 space-y-6"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-bold">Swap Tokens</h3>
                                <div className="flex items-center gap-2 text-xs text-brand-gold bg-brand-gold/10 px-2 py-1 rounded border border-brand-gold/20 font-bold uppercase tracking-tighter">
                                    <TrendingUp size={12} /> Live Rate
                                </div>
                            </div>

                            {/* Pay Input */}
                            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                                <div className="flex justify-between text-sm text-zinc-500 font-medium">
                                    <span>You Pay</span>
                                    <span>Balance: 0.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        value={payAmount}
                                        onChange={(e) => setPayAmount(e.target.value)}
                                        className="bg-transparent text-3xl font-bold outline-none w-full placeholder:text-zinc-700"
                                    />
                                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10 shrink-0">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-[10px] font-bold">U</div>
                                        <span className="font-bold">USDT</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex justify-center -my-3 z-10">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-brand-purple shadow-lg">
                                    <ArrowDown size={20} />
                                </div>
                            </div>

                            {/* Receive Input */}
                            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                                <div className="flex justify-between text-sm text-zinc-500 font-medium">
                                    <span>You Receive</span>
                                    <span>Est. Allocation</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <input
                                        type="text"
                                        readOnly
                                        value={receiveAmount}
                                        className="bg-transparent text-3xl font-bold outline-none w-full text-brand-purple"
                                    />
                                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10 shrink-0">
                                        <div className="w-6 h-6 bg-brand-purple rounded-full flex items-center justify-center text-[10px] font-bold">FC</div>
                                        <span className="font-bold">FC</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-white/5">
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-500">Exchange Rate</span>
                                    <span className="font-bold">1 USDT = {stats.exchangeRate} FC</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-500">Slippage Tolerance</span>
                                    <span className="font-bold">0.5%</span>
                                </div>
                            </div>

                            <button className="w-full py-5 bg-linear-to-r from-brand-purple to-brand-indigo rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-all">
                                Swap & Purchase
                            </button>

                            <div className="flex items-center justify-center gap-2 text-xs text-green-500">
                                <ShieldCheck size={14} /> Audit verified by CertiK
                            </div>
                        </motion.div>

                        {/* Presale Progress Bar Card */}
                        <div className="glass-card mt-8 p-6">
                            <div className="flex justify-between text-sm mb-3">
                                <span className="text-zinc-400">Total Contribution</span>
                                <span className="text-white font-bold">${stats.currentRaised.toLocaleString('en-US')} / ${stats.hardCap.toLocaleString('en-US')}</span>
                            </div>
                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-2">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    className="h-full bg-brand-gold shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                                />
                            </div>
                            <p className="text-[10px] text-zinc-500 text-center uppercase tracking-widest font-bold">{Math.round(progress)}% OF HARD CAP FILLED - FOMO ALERT!</p>
                        </div>
                    </div>

                    {/* Right: Tokenomics & Information */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="glass-card p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <PieChart className="text-brand-purple" />
                                <h2 className="text-2xl font-bold">Transparent Tokenomics</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="relative aspect-square max-w-[240px] mx-auto">
                                    {/* Dummy SVG Pie Chart */}
                                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                        <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#222" strokeWidth="3" />
                                        <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#8A2BE2" strokeWidth="3" strokeDasharray="40 100" />
                                        <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#FFD700" strokeWidth="3" strokeDasharray="30 100" strokeDashoffset="-40" />
                                        <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#4B0082" strokeWidth="3" strokeDasharray="20 100" strokeDashoffset="-70" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Total Supply</span>
                                        <span className="text-xl font-bold">1B</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {tokenomics.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                            <div className="flex-1">
                                                <div className="flex justify-between items-baseline mb-1">
                                                    <p className="text-sm font-bold text-white">{item.label}</p>
                                                    <p className="text-sm font-bold text-brand-purple">{item.value}%</p>
                                                </div>
                                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="glass-card p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Info className="text-brand-gold" size={24} />
                                    <span className="text-xs text-brand-gold font-bold uppercase tracking-widest">{stats.participants} Participants</span>
                                </div>
                                <h3 className="font-bold mb-2">Liquidity Locked</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed">
                                    30% of funds raised are automatically funneled into the Uniswap V3 liquidity pool and locked for 2 years via Unicrypt.
                                </p>
                            </div>
                            <div className="glass-card p-6">
                                <TrendingUp className="text-brand-purple mb-4" size={24} />
                                <h3 className="font-bold mb-2">Deflationary Model</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed">
                                    A 2% burn mechanism is active for every transaction, ensuring the ecosystem becomes scarcer as it scales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
