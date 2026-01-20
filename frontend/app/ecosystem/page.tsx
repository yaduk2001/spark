"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ShieldAlert, Lock, ArrowRight, Zap, Globe, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function EcosystemGate() {
    const [hasNFT, setHasNFT] = useState<boolean | null>(null);
    const [checking, setChecking] = useState(false);

    const simulateCheck = () => {
        setChecking(true);
        setTimeout(() => {
            // Simulate 70% chance of success for demo purposes
            setHasNFT(Math.random() > 0.3);
            setChecking(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center">
            <div className="max-w-2xl w-full text-center">
                <AnimatePresence mode="wait">
                    {hasNFT === null ? (
                        <motion.div
                            key="gateway"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="glass-card p-12 space-y-8"
                        >
                            <div className="w-24 h-24 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(138,43,226,0.3)]">
                                <Lock className="text-brand-purple" size={40} />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-4">Founder's <span className="text-brand-purple">Gate</span></h1>
                                <p className="text-zinc-500">
                                    This area is restricted to Genesis Founder NFT holders. Please verify your wallet to access the private ecosystem.
                                </p>
                            </div>
                            <button
                                onClick={simulateCheck}
                                disabled={checking}
                                className="w-full py-5 bg-white text-black rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {checking ? (
                                    <>
                                        <div className="w-5 h-5 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                                        VERIFYING WALLET...
                                    </>
                                ) : (
                                    "VERIFY OWNERSHIP"
                                )}
                            </button>
                        </motion.div>
                    ) : hasNFT ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-card p-12 space-y-8 border-green-500/20 bg-green-500/5"
                        >
                            <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(34,197,94,0.3)] text-green-500">
                                <ShieldCheck size={50} />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-4 text-green-500">Access Granted</h1>
                                <p className="text-zinc-400">
                                    Welcome, Founder. We've detected a Genesis NFT in your wallet. You now have full access to the inner circle.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Link href="#" className="p-4 glass-card bg-indigo-600/10 border-indigo-600/20 flex flex-col items-center gap-3 hover:bg-indigo-600/20">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center"><Zap size={20} /></div>
                                    <span className="text-xs font-bold uppercase tracking-widest">Enter Discord</span>
                                </Link>
                                <Link href="#" className="p-4 glass-card bg-brand-gold/10 border-brand-gold/20 flex flex-col items-center gap-3 hover:bg-brand-gold/20">
                                    <div className="w-10 h-10 rounded-lg bg-brand-gold flex items-center justify-center text-black"><Globe size={20} /></div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Alpha Portal</span>
                                </Link>
                            </div>

                            <button onClick={() => setHasNFT(null)} className="text-zinc-600 text-xs hover:text-white transition-colors">
                                Disconnect Wallet
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="denied"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-card p-12 space-y-8 border-red-500/20 bg-red-500/5"
                        >
                            <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(239,68,68,0.3)] text-red-500">
                                <ShieldAlert size={50} />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-4 text-red-500">Access Denied</h1>
                                <p className="text-zinc-400">
                                    No Genesis Founder NFT was detected in this wallet. To proceed, you must own at least one Membership Card.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Link href="/mint" className="w-full py-5 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all">
                                    PURCHASE NFT <ArrowRight size={20} />
                                </Link>
                                <button onClick={() => setHasNFT(null)} className="py-4 glass-card text-sm font-bold">
                                    TRY ANOTHER WALLET
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
