"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Wallet, Menu, X, ArrowRight, User, LogOut } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const pathname = usePathname();

    // Hide Navbar on admin pages
    if (pathname?.startsWith('/admin')) return null;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Mint SPK", href: "/mint" },
        { name: "Presale", href: "/presale" },
        { name: "Ecosystem", href: "/ecosystem" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
            <div className="max-w-7xl mx-auto">
                <div className="pdf-card px-8 py-4 flex items-center justify-between bg-black/80 backdrop-blur-xl border-brand-gold/30">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full border border-brand-gold/50 relative overflow-hidden">
                            <Image
                                src="/images/coin_new.jpg"
                                alt="Spaark Coin"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight uppercase text-white">
                            Spaark <span className="text-brand-gold">Exchange</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-zinc-400 hover:text-brand-gold transition-colors uppercase tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-brand-gold transition-colors"
                                >
                                    <User size={18} />
                                    Account
                                </Link>
                                <button
                                    onClick={logout}
                                    className="text-red-500 hover:text-red-400 transition-colors"
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-6">
                                <Link
                                    href="/login"
                                    className="text-sm font-bold text-zinc-400 hover:text-white uppercase tracking-wider"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-6 py-2 rounded-lg bg-brand-gold text-black text-sm font-bold hover:bg-white transition-colors"
                                >
                                    JOIN CIRCLE
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-6 right-6 pdf-card bg-black/95 border-brand-gold/20 p-6 lg:hidden flex flex-col gap-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-bold text-zinc-400 hover:text-brand-gold transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="border-white/10" />

                        {user ? (
                            <div className="flex flex-col gap-4">
                                <Link href="/dashboard" className="text-white font-bold flex items-center gap-2">
                                    <User size={18} /> Dashboard
                                </Link>
                                <button onClick={logout} className="text-red-500 font-bold flex items-center gap-2">
                                    <LogOut size={18} /> Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                <Link href="/login" onClick={() => setIsOpen(false)} className="text-white font-bold">Log In</Link>
                                <Link href="/register" onClick={() => setIsOpen(false)} className="text-brand-gold font-bold">Register Now</Link>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

export default Navbar;
