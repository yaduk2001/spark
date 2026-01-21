"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, CheckSquare, Square, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface AgreementModalProps {
    isOpen: boolean;
    onClose: () => void;
    planTitle: string;
}

const AgreementModal = ({ isOpen, onClose, planTitle }: AgreementModalProps) => {
    const [agreed, setAgreed] = useState(false);
    const router = useRouter();

    const handleContinue = () => {
        if (agreed) {
            router.push("/register");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(138,43,226,0.3)] rgb-border"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex items-center justify-between bg-zinc-900/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-purple/20 flex items-center justify-center text-brand-purple shadow-[0_0_15px_rgba(138,43,226,0.3)]">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black uppercase tracking-tight">
                                        Spaark <span className="text-brand-purple">Exchange</span>
                                    </h2>
                                    <p className="text-xs text-zinc-400 font-bold tracking-widest uppercase">Membership Agreement</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-500 hover:text-white">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Agreement Text */}
                        <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                            <div className="space-y-6 text-zinc-400">
                                <section>
                                    <h4 className="text-white font-black uppercase tracking-wider mb-2">1. Participation Awareness</h4>
                                    <p className="text-sm leading-relaxed">
                                        I understand that participating in Spaark Exchange involves interaction with decentralized blockchain protocols and digital assets (SPK Tokens). I acknowledge that I am responsible for managing my own digital security and wallet credentials.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="text-white font-black uppercase tracking-wider mb-2">2. Ecosystem Rewards</h4>
                                    <p className="mb-4 text-sm leading-relaxed">
                                        By proceeding, I acknowledge that <strong>Spaark Exchange</strong> is a decentralized autonomous organization (DAO) focused on community building, education, and blockchain technology development.
                                    </p>
                                    <p className="text-sm leading-relaxed">
                                        I acknowledge the 8 types of ecosystem rewards, including Community Building, Staking, and Growth Partner income. I understand that these rewards are performance-based and dependent on the sustained growth and participation of the global community.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="text-white font-black uppercase tracking-wider mb-2">3. Risk Disclosure</h4>
                                    <p className="text-sm leading-relaxed">
                                        I am aware that digital assets and blockchain technologies are subject to market volatility. Spark Global does not provide financial advice, and my participation is based on my own due diligence.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="text-white font-black uppercase tracking-wider mb-2">4. Subscription Terms</h4>
                                    <p className="text-sm leading-relaxed">
                                        I understand that the Spark Starter ($3.5) and Global Pro ($50) memberships are lifetime access entry points. I agree to the specific allocation and withdrawal conditions mentioned in the reward modules.
                                    </p>
                                </section>

                                <section>
                                    <h4 className="text-white font-black uppercase tracking-wider mb-2">5. Community Conduct</h4>
                                    <p className="text-sm leading-relaxed">
                                        I agree to maintain ethical standards when building my community levels. Any attempt to exploit or manipulate the reward system may result in account restriction within the Spark Network.
                                    </p>
                                </section>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-8 bg-zinc-900/50 border-t border-white/5 space-y-4">
                            <button
                                onClick={() => setAgreed(!agreed)}
                                className="flex items-center gap-3 group cursor-pointer"
                            >
                                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${agreed ? "bg-brand-purple border-brand-purple shadow-[0_0_15px_rgba(138,43,226,0.5)]" : "border-white/20 group-hover:border-white/40"}`}>
                                    {agreed ? <CheckSquare size={16} className="text-white" /> : <Square size={16} className="text-transparent" />}
                                </div>
                                <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                                    I have read and agree to the Membership Terms
                                </span>
                            </button>

                            <button
                                onClick={handleContinue}
                                disabled={!agreed}
                                className={`w-full py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${agreed
                                    ? "bg-white text-black hover:bg-brand-gold hover:text-black shadow-[0_0_30px_rgba(255,184,0,0.3)]"
                                    : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                                    }`}
                            >
                                CONTINUE TO REGISTER <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AgreementModal;
