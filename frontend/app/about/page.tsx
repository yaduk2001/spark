"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Shield, Globe, Award, Target, Rocket } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none" />

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter mb-8 relative z-10"
                >
                    NEW REVOLUTION WITH <br />
                    <span className="gradient-text">SPARK GLOBAL TECH</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed relative z-10"
                >
                    A global technology and digital innovation company strategically positioned to operate across International Markets. We are redefining the future of digital business.
                </motion.p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Target size={120} className="text-brand-purple" />
                    </div>
                    <h2 className="text-3xl font-black mb-6 uppercase tracking-wide flex items-center gap-4">
                        <span className="w-12 h-1 bg-brand-purple"></span>
                        Our Mission
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                        To Develop Secure, Scalable, and Future-ready digital platforms that empower Individuals and Businesses to participate in the Global Digital Economy through transparent and innovative online business models.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Globe size={120} className="text-brand-gold" />
                    </div>
                    <h2 className="text-3xl font-black mb-6 uppercase tracking-wide flex items-center gap-4">
                        <span className="w-12 h-1 bg-brand-gold"></span>
                        Our Vision
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                        To become a Globally recognized technology enterprise that connects Digital Finance, Online Commerce, and Blockchain Innovation— while providing structured opportunities for customers and partners to build sustainable, High-Growth Online Businesses within the SPARK Ecosystem.
                    </p>
                </motion.div>
            </div>

            {/* Strategic Pillars */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-4">Strategic Pillars</h2>
                    <p className="text-zinc-500">The foundation of our revolution</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Innovation", desc: "Pioneering new standards in blockchain utility and decentralized access.", icon: <Lightbulb size={40} /> },
                        { title: "Security", desc: "Enterprise-grade infrastructure ensuring the safety of your digital assets.", icon: <Shield size={40} /> },
                        { title: "Growth", desc: "Sustainable economic models designed for long-term community prosperity.", icon: <Rocket size={40} /> }
                    ].map((item, i) => (
                        <div key={i} className="text-center p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-purple/30 transition-all group hover:-translate-y-2">
                            <div className="w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(138,43,226,0.2)]">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-zinc-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Core Values */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-linear-to-r from-brand-purple/20 to-brand-indigo/20 rounded-[3rem] p-12 md:p-24 border border-white/10 relative overflow-hidden">
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <Award className="w-16 h-16 text-brand-gold mx-auto mb-8" />
                        <h2 className="text-4xl md:text-5xl font-black mb-8">Our Core Commitment</h2>
                        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-medium">
                            "We are dedicated to democratizing access to the digital economy. Every line of code we write and every partnership we forge is designed to put power back into the hands of the community."
                        </p>
                        <div className="mt-12">
                            <span className="text-brand-purple font-black tracking-widest uppercase">The Spark Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
