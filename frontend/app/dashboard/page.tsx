"use client";

import { motion } from "framer-motion";
import {
    TrendingUp,
    Wallet,
    Zap,
    Award,
    ArrowUpRight,
    ShieldCheck,
    Activity,
    Loader2,
    Timer,
    Users
} from "lucide-react";
import { useState, useEffect } from "react";
import { fetchDashboardData, mineCoins } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
    const { user } = useAuth();
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userId = user?.id || user?._id;
        if (userId) {
            fetchDashboardData(userId)
                .then(data => {
                    setStats(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to fetch dashboard data:", err);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) return <div className="text-brand-purple animate-pulse font-bold">SYNCHRONIZING PORTFOLIO...</div>;

    const cards = [
        {
            title: "Token Balance",
            value: `${stats?.tokenBalance.toLocaleString('en-US') || "0"} $FOUND`,
            sub: "+12.5% this week",
            icon: <TrendingUp className="text-brand-purple" />,
            trend: "up"
        },
        {
            title: "NFT Holdings",
            value: `${stats?.nftsOwned || "0"} Units`,
            sub: stats?.vipTier > 0 ? `VIP Multiplier: ${stats.vipMultiplier}x` : "Base Multiplier: 1.0x",
            icon: <Award className="text-brand-gold" />,
            trend: "gold"
        },
        {
            title: "Live Yield",
            value: `${(stats?.stakingYield || 0).toLocaleString('en-US')} $FOUND`,
            sub: "Auto-compounding live",
            icon: <Zap className="text-brand-indigo" />,
            trend: "indigo"
        },
        {
            title: "Referral Income",
            value: `$${(stats?.referralIncome || 0).toLocaleString('en-US')}`,
            sub: `${stats?.referrals || 0} Referrals`,
            icon: <Wallet className="text-emerald-500" />,
            trend: "emerald"
        }
    ];

    return (
        <div className="space-y-12">
            {/* Header section with VIP status */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold mb-2">Welcome Back, <span className="gradient-text">{user?.username}</span></h1>
                    <p className="text-zinc-500 font-medium">Your ecosystem performance is currently <span className="text-emerald-500 font-bold">Outperforming</span></p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-xl hidden md:flex">
                        <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
                            <Zap size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Spark Balance</p>
                            <p className="text-lg font-bold text-amber-500">{stats?.sparkBalance || 0} SPARK</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-xl">
                        <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                            <ShieldCheck size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Current Status</p>
                            <p className="text-lg font-bold text-brand-gold">{stats?.vipStatus || "Free Tier"}</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-8 group hover:border-brand-purple/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-brand-purple/10 transition-colors">
                                {card.icon}
                            </div>
                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>
                        <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-2">{card.title}</p>
                        <h3 className="text-3xl font-black mb-1">{card.value}</h3>
                        <p className="text-xs text-zinc-600 font-bold">{card.sub}</p>
                    </motion.div>
                ))}
            </div>

            {/* Network & Earnings Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Network Hierarchy */}
                <div className="glass-card p-6 border-brand-indigo/20">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Users className="text-brand-purple" />
                        Network Hierarchy
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map(level => (
                            <div key={level} className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col items-center">
                                <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Level {level}</span>
                                <span className="text-2xl font-black text-white">
                                    {stats?.levelCounts?.[level] || 0}
                                </span>
                                <span className="text-[10px] text-zinc-600">Members</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Earnings Log */}
                <div className="glass-card p-6 border-emerald-500/20">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Wallet className="text-emerald-500" />
                        Recent Earnings
                    </h3>
                    <div className="space-y-4">
                        {stats?.incomeLogs?.length > 0 ? (
                            stats.incomeLogs.map((log: any, i: number) => (
                                <div key={i} className="flex items-center justify-between bg-emerald-900/10 p-4 rounded-xl border border-emerald-500/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                                            <Zap size={18} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm">{log.description}</p>
                                            <p className="text-xs text-zinc-500">{new Date(log.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-emerald-400">
                                        +${log.amount.toLocaleString()}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-zinc-500 py-8">No earnings yet. Start referring!</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Detailed Stats Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Mining Station - Replaces Activity Pulse for higher engagement */}
                <div className="glass-card p-8 border-brand-gold/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Zap className="text-brand-gold" /> Mining Station
                            </h3>
                            <div className="px-3 py-1 bg-brand-gold/10 rounded-lg text-[10px] font-bold text-brand-gold border border-brand-gold/20 animate-pulse">
                                LIVE REWARD
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center py-4 space-y-6">
                            <div className="text-center">
                                <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-2">Available Reward</p>
                                <h4 className="text-4xl font-black text-white flex items-center gap-2 justify-center">
                                    {stats?.sparkBalance || 0} <span className="text-brand-gold">$SPARK</span>
                                </h4>
                            </div>

                            <MiningButton
                                lastMineTime={stats?.lastMineTime}
                                onMineComplete={() => {
                                    // Optimistically update spark balance +10
                                    setStats((prev: any) => ({
                                        ...prev,
                                        sparkBalance: (prev?.sparkBalance || 0) + 10,
                                        lastMineTime: new Date().toISOString()
                                    }));
                                }} />
                        </div>
                    </div>
                </div>

                <div className="glass-card p-8 border-brand-purple/20 bg-linear-to-br from-brand-purple/5 to-transparent">
                    <h3 className="text-xl font-bold mb-6">Founders Advantage</h3>
                    <div className="space-y-4">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                            <div className="flex justify-between items-center text-sm font-bold">
                                <span>Progress to next VIP Tier</span>
                                <span className="text-brand-purple">Next: {stats?.vipTier < 1 ? "Bronze" : stats?.vipTier === 1 ? "Silver" : "Gold"}</span>
                            </div>
                            <div className="h-3 bg-black/40 rounded-full overflow-hidden border border-white/5 shadow-inner">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "45%" }}
                                    className="h-full bg-linear-to-r from-brand-purple to-brand-indigo rounded-full"
                                />
                            </div>
                            <p className="text-[10px] text-zinc-500 font-bold text-center uppercase tracking-widest">
                                {stats?.vipTier < 3
                                    ? `Mint ${stats?.vipTier === 0 ? "1" : stats?.vipTier === 1 ? "2" : "2"} more NFTs to upgrade`
                                    : "Maximum VIP Level Reached"}
                            </p>
                        </div>

                        <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-widest">
                            View Tier Benefits
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



function MiningButton({ lastMineTime, onMineComplete }: { lastMineTime: string | null, onMineComplete: () => void }) {
    const [loading, setLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState<string | null>(null);
    const { user } = useAuth();

    useEffect(() => {
        const interval = setInterval(() => {
            if (!lastMineTime) {
                setTimeLeft(null);
                return;
            }

            const last = new Date(lastMineTime).getTime();
            const now = new Date().getTime();
            const diff = now - last;
            const twentyFourHours = 24 * 60 * 60 * 1000;

            if (diff < twentyFourHours) {
                const remaining = twentyFourHours - diff;
                const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
                setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
            } else {
                setTimeLeft(null);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [lastMineTime]);

    const handleMine = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token'); // Fallback
            if (!token) throw new Error("No token found");

            await mineCoins(token);
            onMineComplete();
        } catch (err) {
            console.error(err);
            alert("Mining failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (timeLeft) {
        return (
            <button disabled className="w-full py-4 bg-zinc-800/50 border border-white/5 rounded-xl text-zinc-500 font-bold cursor-not-allowed flex items-center justify-center gap-2">
                <Timer size={18} /> Next mine in: {timeLeft}
            </button>
        );
    }

    return (
        <button
            onClick={handleMine}
            disabled={loading}
            className="w-full py-4 bg-brand-gold text-black rounded-xl font-black uppercase tracking-widest hover:bg-white hover:shadow-[0_0_30px_rgba(255,184,0,0.4)] transition-all flex items-center justify-center gap-2"
        >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Zap size={20} fill="currentColor" />}
            {loading ? "MINING..." : "MINE 10 SPARK"}
        </button>
    );
}
