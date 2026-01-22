"use client";

import { Mail, MessageSquare, Phone, MapPin, Send, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission
        alert("Thank you for your message! Our support team will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="bg-rich-pattern min-h-screen text-white font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 text-xs font-bold text-[#D4AF37] mb-8 uppercase tracking-[0.2em] backdrop-blur-md gold-glow">
                        <MessageSquare size={16} />
                        We're Here to Help
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black leading-none mb-6 tracking-tight text-white uppercase">
                        Contact <span className="text-shimmer">Support</span>
                    </h1>
                    <p className="text-xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
                        Have questions? Our dedicated support team is ready to assist you with any inquiries or concerns.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="card-angular p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black uppercase text-white">Email Support</h3>
                                        <p className="text-sm text-zinc-500 mt-1">Get a response within 24 hours</p>
                                    </div>
                                </div>
                                <a href="mailto:support@spaark.global" className="text-[#D4AF37] hover:text-[#FACC15] transition-colors font-medium">
                                    support@spaark.global
                                </a>
                            </div>

                            <div className="card-angular p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black uppercase text-white">Headquarters</h3>
                                        <p className="text-sm text-zinc-500 mt-1">Global offices</p>
                                    </div>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-2">Dubai, UAE</p>
                                <p className="text-zinc-400 leading-relaxed">Australia</p>
                            </div>

                            <div className="card-angular p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black uppercase text-white">Support Hours</h3>
                                        <p className="text-sm text-zinc-500 mt-1">We're always available</p>
                                    </div>
                                </div>
                                <p className="text-zinc-400 leading-relaxed mb-2">24/7 Email Support</p>
                                <p className="text-zinc-400 leading-relaxed">Live Chat: Mon-Fri, 9AM-6PM (Dubai Time)</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="card-premium p-8 lg:p-12">
                            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-8">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all resize-none"
                                        placeholder="Please provide details about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-gold flex items-center justify-center gap-2"
                                >
                                    Send Message <Send size={18} />
                                </button>
                            </form>

                            <div className="mt-8 pt-8 border-t border-white/5">
                                <p className="text-sm text-zinc-500 text-center">
                                    By submitting this form, you agree to our <a href="/privacy" className="text-[#D4AF37] hover:text-[#FACC15] transition-colors">Privacy Policy</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
