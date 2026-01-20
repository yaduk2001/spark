"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Coins, ArrowRight, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";
import NFTCoin from "@/components/NFTCoin";
import { fetchMintStatus } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function MintPage() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();

    const [amount, setAmount] = useState(1);
    const [mintData, setMintData] = useState({
        totalSlots: 500,
        remainingSlots: 500,
        priceETH: 0.05,
        isActive: true
    });
    const [isConnecting, setIsConnecting] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        fetchMintStatus()
            .then(setMintData)
            .catch(err => console.error("Failed to fetch mint status:", err));
    }, []);

    const benefits = [
        { icon: <Shield className="text-brand-purple" />, title: "Instant VIP Status", desc: "Gain immediate access to premium community channels and private events." },
        { icon: <Sparkles className="text-brand-gold" />, title: "Token Multiplier", desc: "Holders receive a 2.5x multiplier on all $PROJECT token farming rewards." },
        { icon: <Coins className="text-green-500" />, title: "Dev Fund Voting", desc: "Shape the future. Vote on the allocation of the ecosystem development fund." },
    ];

    const handleConnectAndMint = async () => {
        if (!user) {
            router.push('/login');
            return;
        }

        setIsConnecting(true);
        try {
            // Simulate wallet connection and association with existing account
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsConnected(true);
            // In a real app, we would send the wallet address to the backend profile here
        } catch (err) {
            console.error("Sync failed:", err);
        } finally {
            setIsConnecting(false);
        }
    };

    const progress = ((mintData.totalSlots - mintData.remainingSlots) / mintData.totalSlots) * 100;

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Showcase */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-5xl font-bold mb-6">The <span className="gradient-text">Founders Circle</span></h1>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                Become a pillar of the ecosystem. The Genesis Founders NFT is your permanent membership card to an elite tier of utility and influence.
                            </p>
                        </motion.div>

                        <div className="grid gap-6">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-6 flex gap-6 items-start"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Minting Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="sticky top-32"
                    >
                        <div className="glass-card p-1 pb-8 overflow-hidden relative">
                            <div className="flex justify-center py-12 bg-black/40 relative overflow-hidden">
                                <NFTCoin size={280} />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute top-4 left-4 right-4 flex justify-between items-end pointer-events-none">
                                <div className="px-3 py-1 rounded-full bg-black/50 border border-white/20 backdrop-blur-md text-xs font-bold text-white uppercase tracking-widest">
                                    Pre-Launch Tier
                                </div>
                            </div>
                        </div>

                        <div className="px-8 space-y-8 mt-8">
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <p className="text-sm text-zinc-400 uppercase tracking-widest font-bold">Minting Progress</p>
                                    <p className="text-sm font-bold text-white">{mintData.remainingSlots} / {mintData.totalSlots} Left</p>
                                </div>
                                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(mintData.remainingSlots / mintData.totalSlots) * 100}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-linear-to-r from-brand-gold via-brand-purple to-brand-indigo"
                                    />
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6">
                                <div className="flex justify-between items-center">
                                    <p className="text-zinc-400">Unit Price</p>
                                    <p className="text-xl font-bold text-white">{mintData.priceETH} ETH / $50 eq.</p>
                                </div>

                                <div className="flex items-center justify-between p-2 bg-black/40 rounded-xl border border-white/5">
                                    <button
                                        onClick={() => setAmount(Math.max(1, amount - 1))}
                                        className="w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors font-bold text-xl"
                                    >
                                        -
                                    </button>
                                    <span className="text-2xl font-bold">{amount}</span>
                                    <button
                                        onClick={() => setAmount(Math.min(10, amount + 1))}
                                        className="w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors font-bold text-xl"
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                    <p className="text-zinc-400">Total Payment</p>
                                    <p className="text-2xl font-bold text-brand-gold">{(amount * mintData.priceETH).toFixed(2)} ETH</p>
                                </div>
                            </div>

                            <button
                                onClick={handleConnectAndMint}
                                disabled={isConnecting || authLoading}
                                className="w-full py-5 bg-white text-black rounded-2xl font-bold text-lg hover:bg-brand-gold hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(255,215,0,0.2)] flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                <Wallet size={20} />
                                {isConnecting ? "Synchronizing..." : isConnected ? "Proceed to Mint" : user ? "Connect & Sync Wallet" : "Log In to Sync Wallet"}
                            </button>

                            <p className="text-center text-xs text-zinc-500">
                                Transaction secured by smart-contract technology. <br />
                                Gas fees apply depending on network congestion.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
