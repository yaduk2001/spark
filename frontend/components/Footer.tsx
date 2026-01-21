"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#080808] pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">

                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                            <Image src="/images/coin_new.jpg" alt="Spaark" fill className="object-cover" />
                        </div>
                        <span className="text-xl font-bold tracking-widest text-zinc-300 uppercase">Spaark Global</span>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-6">
                        {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                            <a key={i} href="#" className="text-zinc-600 hover:text-[#BF953F] transition-colors">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-zinc-600 font-medium tracking-widest uppercase">
                        © {new Date().getFullYear()} Spaark Global Tech. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
