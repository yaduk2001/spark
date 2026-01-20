"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    UserPlus,
    Settings,
    LogOut,
    ShieldCheck,
    ChevronRight,
    Menu,
    Wallet
} from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, loading, logout } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Protection logic
    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-bg-dark text-brand-purple animate-pulse">Initializing Portal...</div>;
    if (!user) return null;

    const menuItems = [
        { name: "Overview", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
        { name: "Wallet Hub", icon: <Wallet size={20} />, href: "/dashboard/wallet" },
        { name: "Referral Center", icon: <UserPlus size={20} />, href: "/dashboard/referrals" },
        { name: "Settings", icon: <Settings size={20} />, href: "/dashboard/settings" },
    ];

    const getVipLabel = (tier: number) => {
        switch (tier) {
            case 3: return "Gold";
            case 2: return "Silver";
            case 1: return "Bronze";
            default: return "Free Tier";
        }
    };

    return (
        <div className="min-h-screen bg-bg-dark flex pt-24">
            {/* Mobile Toggle */}
            <button
                className="md:hidden fixed top-24 left-6 z-50 p-2 bg-zinc-900 rounded-lg border border-white/10"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <Menu size={20} />
            </button>

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 bg-black/50 backdrop-blur-3xl border-r border-white/10 w-72 transition-transform duration-300 z-40 pt-32
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                md:fixed md:top-24 md:bottom-0 md:translate-x-0 md:pt-12
            `}>
                <div className="px-6 h-full flex flex-col space-y-8 pb-12">
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/10">
                        <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center font-bold text-white uppercase text-xs">
                            {user.fullName?.split(' ').map((n: string) => n[0]).join('') || user.username[0]}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold truncate">{user.fullName || user.username}</p>
                            <div className="flex items-center gap-1 text-[10px] text-brand-gold font-bold uppercase tracking-widest">
                                <ShieldCheck size={10} /> VIP {getVipLabel(user.vipTier)}
                            </div>
                        </div>
                    </div>

                    <nav className="space-y-2 flex-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`flex items-center justify-between p-4 rounded-xl transition-all group ${pathname === item.href
                                    ? "bg-white/5 text-brand-purple border border-white/10 shadow-inner"
                                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    {item.icon}
                                    <span className="font-medium text-sm">{item.name}</span>
                                </div>
                                <ChevronRight size={16} className={`transition-transform duration-300 ${pathname === item.href ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                            </Link>
                        ))}
                    </nav>

                    <button
                        onClick={logout}
                        className="flex items-center gap-3 p-4 w-full text-zinc-500 hover:text-red-500 transition-colors mt-auto border-t border-white/5 pt-8"
                    >
                        <LogOut size={20} />
                        <span className="font-medium text-sm">Logout Session</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 px-6 md:px-12 py-12 relative overflow-x-hidden md:ml-72">
                {children}
            </main>
        </div >
    );
}
