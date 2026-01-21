"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Shield, Globe, Award, Target, Rocket } from "lucide-react";
import GlitchText from "@/components/GlitchText";
import FuturePlanCard from "@/components/FuturePlanCard";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="mb-12 relative z-10 flex flex-col items-center">
                    <GlitchText
                        text="NEW REVOLUTION WITH"
                        as="h1"
                        className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
                    />
                    <GlitchText
                        text="SPAARK GLOBAL TECH"
                        as="h1"
                        className="text-5xl md:text-8xl font-black tracking-tighter gradient-text uppercase"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-zinc-400 max-w-4xl mx-auto font-medium leading-relaxed relative z-10"
                >
                    <span className="text-white font-bold uppercase tracking-widest block mb-4">Dubai & Australia Headquarters</span>
                    SPAARK GLOBAL TECH is a global technology and digital innovation company headquartered in Dubai and Australia, strategically positioned to operate across International Markets. We focus on developing scalable digital platforms across Financial Technology, Online Commerce, Blockchain Infrastructure, and Digital Entertainment.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-zinc-400 max-w-4xl mx-auto font-medium leading-relaxed mt-6 relative z-10"
                >
                    Our organization is built on strong Governance, Long-Term Strategic planning, and sustainable innovation. By combining advanced technology with structured business models, SPAARK GLOBAL TECH aims to create a connected digital ecosystem that supports growth for both the company and its global user community.
                </motion.p>
            </div>

            {/* Vision & Mission Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 rgb-border relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Globe size={120} className="text-brand-gold" />
                    </div>
                    <div className="mb-6 flex items-center gap-4">
                        <span className="w-12 h-1 bg-brand-gold"></span>
                        <GlitchText text="Our Vision" as="h2" className="text-3xl font-black uppercase tracking-wide" />
                    </div>
                    <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                        To become a Globally recognized technology enterprise that connects Digital Finance, Online Commerce, and Blockchain Innovation— while providing structured opportunities for customers and partners to build sustainable, High-Growth Online Businesses within the SPAARK Ecosystem.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 rgb-border relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Target size={120} className="text-brand-purple" />
                    </div>
                    <div className="mb-6 flex items-center gap-4">
                        <span className="w-12 h-1 bg-brand-purple"></span>
                        <GlitchText text="Our Mission" as="h2" className="text-3xl font-black uppercase tracking-wide" />
                    </div>
                    <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                        To Develop Secure, Scalable, and Future-ready digital platforms that empower Individuals and Businesses to participate in the Global Digital Economy through transparent and innovative online business models.
                    </p>
                </motion.div>
            </div>

            {/* Strategic Pillars */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <GlitchText text="Strategic Pillars" as="h2" className="text-4xl font-extrabold mb-4" />
                    <p className="text-zinc-500">The foundation of our revolution</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Innovation", desc: "Pioneering new standards in blockchain utility and decentralized access.", icon: <Lightbulb size={40} /> },
                        { title: "Security", desc: "Enterprise-grade infrastructure ensuring the safety of your digital assets.", icon: <Shield size={40} /> },
                        { title: "Growth", desc: "Sustainable economic models designed for long-term community prosperity.", icon: <Rocket size={40} /> }
                    ].map((item, i) => (
                        <div key={i} className="text-center p-8 rgb-border bg-white/5 hover:bg-white/10 transition-all group hover:-translate-y-2">
                            <div className="w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(138,43,226,0.2)]">
                                {item.icon}
                            </div>
                            <GlitchText text={item.title} as="h3" className="text-2xl font-bold mb-4 justify-center" />
                            <p className="text-zinc-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Roadmap Section */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <GlitchText text="Future Roadmap" as="h2" className="text-4xl font-extrabold mb-4" />
                    <p className="text-zinc-500 uppercase tracking-widest font-bold text-sm">Our Path to Global Technological Dominance</p>
                </div>

                <div className="space-y-4 max-w-5xl mx-auto">
                    <div className="glass-card hover:border-[#BF953F]/50 transition-colors p-[2px]">
                        <FuturePlanCard step="2028" title="Spaark Coin" description="Launching of Spaark Coin, a proprietary digital asset designed to support ecosystem Transactions, Rewards, and Platform Utility." image="/images/IMG_20260121_204808.jpg" imageFit="cover" />
                    </div>
                    <div className="glass-card hover:border-[#BF953F]/50 transition-colors p-[2px]">
                        <FuturePlanCard step="2030" title="Online Market Hub" description="Introduction of a Global Online Market Hub enabling Digital Commerce, Services, and Entrepreneurial participation through SPAARK-powered platform." image="/images/IMG_20260121_210255 (1).jpg" isReversed={true} imageFit="contain" />
                    </div>
                    <div className="glass-card hover:border-[#BF953F]/50 transition-colors p-[2px]">
                        <FuturePlanCard step="2031" title="Online Games" description="Expansion into Online Gaming Platforms, integrating Digital Economies and user engagement within the broader SPAARK ecosystem." image="/images/IMG_20260121_204726.jpg" imageFit="cover" />
                    </div>
                    <div className="glass-card hover:border-[#BF953F]/50 transition-colors p-[2px]">
                        <FuturePlanCard step="2032" title="Spaark Exchange" description="Launch of Spaark Exchange, a Secure and Scalable Digital Exchange Platform, designed to support Digital Asset Trading and Ecosystem Liquidity." image="/images/IMG_20260121_204833.jpg" isReversed={true} imageFit="cover" />
                    </div>
                    <div className="glass-card hover:border-[#BF953F]/50 transition-colors p-[2px]">
                        <FuturePlanCard step="2035" title="Spaark Blockchain" description="Deployment of Spaark Blockchain, a proprietary blockchain infrastructure focused on security, scalability, and enterprise-grade performance." image="/images/IMG_20260121_204921.jpg" imageFit="cover" />
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-linear-to-r from-brand-purple/20 to-brand-indigo/20 rounded-[3rem] p-12 md:p-24 border border-white/10 relative overflow-hidden">
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <Award className="w-16 h-16 text-brand-gold mx-auto mb-8" />
                        <GlitchText text="Our Core Commitment" as="h2" className="text-4xl md:text-5xl font-black mb-8" />
                        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-medium">
                            "We are dedicated to democratizing access to the digital economy. Every line of code we write and every partnership we forge is designed to put power back into the hands of the community."
                        </p>
                        <div className="mt-12">
                            <span className="text-brand-purple font-black tracking-widest uppercase">The Spaark Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
