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
        { name: "Mint SPK Token", href: "/mint" },
        { name: "Presale", href: "/presale" },
        { name: "Ecosystem", href: "/ecosystem" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="glass-card px-8 py-4 flex items-center justify-between border-white/5 bg-black/40 backdrop-blur-2xl rgb-border-hover"
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full border border-brand-gold/20 group-hover:border-brand-gold/50 transition-all overflow-hidden relative">
                            <Image
                                src="/images/coin_new.jpg"
                                alt="Spark Coin"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <span className="text-xl font-black tracking-tighter uppercase hidden md:block">
                            Spaark <span className="text-brand-purple">Exchange</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all text-sm group"
                                >
                                    <User size={18} className="text-brand-purple" />
                                    Account
                                </Link>
                                <button
                                    onClick={logout}
                                    className="p-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all"
                                >
                                    <LogOut size={20} />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/login"
                                    className="text-sm font-bold text-zinc-400 hover:text-white uppercase tracking-widest"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/register"
                                    className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-linear-to-r from-brand-purple to-brand-indigo text-white font-black hover:shadow-[0_0_30px_rgba(138,43,226,0.4)] transition-all scale-100 hover:scale-105 active:scale-95 group"
                                >
                                    JOIN CIRCLE
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden mt-2 glass-card overflow-hidden border-white/10 bg-black/90 backdrop-blur-2xl"
                    >
                        <div className="p-6 flex flex-col gap-6">
                            {navLinks.filter(link => link.name !== "About").map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold text-zinc-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <hr className="border-white/5" />

                            {/* Mobile User Actions */}
                            {user ? (
                                <>
                                    <Link href="/dashboard" onClick={() => setIsOpen(false)} className="text-lg font-bold text-brand-purple flex items-center gap-2">
                                        <User size={20} /> Dashboard
                                    </Link>
                                    <button onClick={logout} className="text-lg font-bold text-red-500 text-left flex items-center gap-2">
                                        <LogOut size={20} /> Sign Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold text-zinc-300 hover:text-white"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        href="/register"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full py-4 rounded-xl bg-linear-to-r from-brand-purple to-brand-indigo text-center font-black text-white shadow-[0_0_20px_rgba(138,43,226,0.5)]"
                                    >
                                        JOIN CIRCLE
                                    </Link>
                                </>
                            )}

                            <hr className="border-white/5" />

                            {/* Social Icons for Mobile */}
                            <div className="flex items-center gap-6 justify-center">
                                {/* Placeholders for Admin Editable Links */}
                                {[
                                    { name: 'Facebook', color: 'hover:text-blue-500' },
                                    { name: 'Twitter', color: 'hover:text-sky-400' },
                                    { name: 'Instagram', color: 'hover:text-pink-500' }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href="#"
                                        className={`text-zinc-500 transition-colors ${social.color}`}
                                        title={social.name}
                                    >
                                        <span className="sr-only">{social.name}</span>
                                        {/* Simple Circle placeholders or icons */}
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                            <span className="text-xs font-bold">{social.name[0]}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

export default Navbar;
