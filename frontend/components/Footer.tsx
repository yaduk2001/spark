"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Home, Target, Eye } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Social Icons */}
                <div className="flex items-center gap-8 mb-12">
                    {[
                        { icon: <Facebook size={24} />, href: "#", label: "Facebook", color: "hover:text-blue-600" },
                        { icon: <Instagram size={24} />, href: "#", label: "Instagram", color: "hover:text-pink-600" },
                        { icon: <Twitter size={24} />, href: "#", label: "Twitter", color: "hover:text-sky-500" },
                        { icon: <Youtube size={24} />, href: "#", label: "Youtube", color: "hover:text-red-600" }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            className={`nav-link text-zinc-400 transition-all transform hover:scale-125 stroke-moving ${social.color}`}
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                    {[
                        { name: "Home", icon: <Home size={18} />, href: "/" },
                        { name: "Mission", icon: <Target size={18} />, href: "/about" },
                        { name: "Vision", icon: <Eye size={18} />, href: "/about" }
                    ].map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="px-8 py-3 rounded-full rgb-border hover:bg-white/5 transition-all flex items-center gap-2 font-bold text-sm uppercase tracking-widest group"
                            style={{ borderRadius: "9999px" }}
                        >
                            <span className="text-zinc-500 group-hover:text-brand-purple transition-colors">{item.icon}</span>
                            <span className="text-white">{item.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Brand */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center border border-brand-gold/20">
                        <span className="text-xl">⚡</span>
                    </div>
                    <span className="text-xl font-black tracking-tighter uppercase">Spaark Exchange</span>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-zinc-600 text-xs uppercase tracking-widest font-bold">
                        © {new Date().getFullYear()} Spaark Exchange. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
