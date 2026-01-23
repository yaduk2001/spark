"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, AtSign, Lock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { registerUser, checkAvailability } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import CountryCodeSelector, { countries, type Country } from "@/components/CountryCodeSelector";
import { Check, X, Loader2 } from "lucide-react";
import GlitchText from "@/components/GlitchText";

function RegisterContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { login } = useAuth();
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries.find(c => c.code === "US") || countries[0]);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        username: "",
        password: "",
        confirmPassword: "",
        referralCode: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPolicyModal, setShowPolicyModal] = useState(false);
    const [referralEmailConsent, setReferralEmailConsent] = useState(false);
    const [followedName, setFollowedName] = useState("");

    useEffect(() => {
        if (formData.fullName && !followedName) {
            setFollowedName(formData.fullName);
        }
    }, [formData.fullName]);

    useEffect(() => {
        const refCode = searchParams.get('ref');
        if (refCode) {
            setFormData(prev => ({ ...prev, referralCode: refCode }));
        }
    }, [searchParams]);

    // ... existing validation states ...
    // Validation States: 'idle' | 'checking' | 'available' | 'taken'
    const [usernameStatus, setUsernameStatus] = useState<'idle' | 'checking' | 'available' | 'taken'>('idle');
    const [emailStatus, setEmailStatus] = useState<'idle' | 'checking' | 'available' | 'taken'>('idle');
    const [phoneStatus, setPhoneStatus] = useState<'idle' | 'checking' | 'available' | 'taken'>('idle');

    // ... existing debounces ...
    // Debounce Logic for Username
    useEffect(() => {
        const checkUsername = async () => {
            if (formData.username.length < 3) {
                setUsernameStatus('idle');
                return;
            }
            setUsernameStatus('checking');
            try {
                const res = await checkAvailability('username', formData.username);
                setUsernameStatus(res.available ? 'available' : 'taken');
            } catch (err) {
                setUsernameStatus('idle');
            }
        };

        const timer = setTimeout(checkUsername, 500);
        return () => clearTimeout(timer);
    }, [formData.username]);

    // Debounce Logic for Email
    useEffect(() => {
        const checkEmail = async () => {
            if (!formData.email.includes('@') || formData.email.length < 5) {
                setEmailStatus('idle');
                return;
            }
            setEmailStatus('checking');
            try {
                const res = await checkAvailability('email', formData.email);
                setEmailStatus(res.available ? 'available' : 'taken');
            } catch (err) {
                setEmailStatus('idle');
            }
        };

        const timer = setTimeout(checkEmail, 500);
        return () => clearTimeout(timer);
    }, [formData.email]);

    // Debounce Logic for Phone Number
    useEffect(() => {
        const checkPhone = async () => {
            if (formData.phoneNumber.length < 5) {
                setPhoneStatus('idle');
                return;
            }
            setPhoneStatus('checking');
            try {
                const fullPhoneNumber = `${selectedCountry.dialCode}${formData.phoneNumber}`;
                const res = await checkAvailability('phoneNumber', fullPhoneNumber);
                setPhoneStatus(res.available ? 'available' : 'taken');
            } catch (err) {
                setPhoneStatus('idle');
            }
        };

        const timer = setTimeout(checkPhone, 500);
        return () => clearTimeout(timer);
    }, [formData.phoneNumber, selectedCountry]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!formData.referralCode) {
            setError("Please enter referral code");
            return;
        }

        // Trigger Policy Modal instead of direct submission
        setShowPolicyModal(true);
    };

    const handleFinalRegistration = async () => {
        setLoading(true);
        setShowPolicyModal(false);

        try {
            const submissionData = {
                ...formData,
                phoneNumber: `${selectedCountry.dialCode}${formData.phoneNumber}`,
                referralEmailConsent,
                followedName
            };
            const data = await registerUser(submissionData);
            login(data.token, data.user);
            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative h-screen overflow-hidden flex flex-col lg:flex-row bg-[#080808] pt-20 lg:pt-24">
            {/* Left Decorative Section - Hidden on Mobile */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(138,43,226,0.1),transparent_70%)]" />
                <div className="relative z-10 max-w-lg lg:translate-y-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-4 leading-tight">
                            <GlitchText text="JOIN THE" as="h2" className="text-5xl font-black italic tracking-tighter" />
                            <br />
                            <GlitchText text="ELITE" as="h2" className="text-5xl font-black italic tracking-tighter gradient-text" />
                        </div>
                        <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-12">
                            The Founders Circle is more than just a membership. It's your bridge to the next era of digital ownership and governance.
                        </p>
                    </motion.div>

                    {/* Animated Decorative Element */}
                    <div className="relative h-64 w-64 mt-12">
                        <motion.div
                            animate={{
                                rotateY: [0, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-2 border-brand-gold/20 border-dashed"
                        />
                        <motion.div
                            animate={{
                                rotateX: [0, 360],
                                scale: [1.1, 1, 1.1]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-brand-purple/30"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-3xl bg-linear-to-br from-brand-gold to-brand-purple blur-3xl opacity-20 animate-pulse" />
                            <Sparkles className="text-brand-gold scale-[3.5]" size={36} />
                        </div>
                    </div>
                </div>

                {/* Particle Glows */}
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-gold/10 blur-[100px] rounded-full"
                />
            </div>

            {/* Right Form Section */}
            <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
                <div className="absolute inset-0 lg:hidden">
                    <div className="absolute top-1/4 -right-24 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full px-brand-purple" />
                    <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-brand-purple/5 blur-[120px] rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-xl relative z-10 lg:translate-y-0"
                >
                    <div className="glass-card p-5 space-y-3 bg-black/40 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rgb-border">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div className="space-y-1">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1"
                                >
                                    <Sparkles size={12} /> Genesis Membership
                                </motion.div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <GlitchText text="Create" as="h1" className="text-3xl font-extrabold tracking-tighter" />
                                    <GlitchText text="Account" as="h1" className="text-3xl font-extrabold tracking-tighter gradient-text" />
                                </div>
                                <p className="text-zinc-500 text-xs font-medium">Join the elite Founders Circle ecosystem today.</p>
                            </div>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold flex items-center gap-2"
                            >
                                <ShieldCheck size={14} className="shrink-0" />
                                {error}
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-purple transition-colors" size={16} />
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            className="w-full bg-black/60 border border-white/5 rounded-xl py-2 pl-11 pr-4 outline-none focus:border-brand-purple/50 focus:bg-black/80 transition-all text-sm font-medium text-white placeholder:text-zinc-700"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Username</label>
                                    <div className="relative group">
                                        <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-purple transition-colors" size={16} />
                                        <input
                                            type="text"
                                            required
                                            placeholder="Choose a username"
                                            value={formData.username}
                                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                            className={`w-full bg-black/60 border rounded-xl py-2 pl-11 pr-10 outline-none focus:bg-black/80 transition-all text-sm font-medium text-white placeholder:text-zinc-700 ${usernameStatus === 'taken' ? 'border-red-500/50 focus:border-red-500' :
                                                usernameStatus === 'available' ? 'border-green-500/50 focus:border-green-500' :
                                                    'border-white/5 focus:border-brand-purple/50'
                                                }`}
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                            {usernameStatus === 'checking' && <Loader2 size={16} className="animate-spin text-brand-purple" />}
                                            {usernameStatus === 'available' && <Check size={16} className="text-green-500" />}
                                            {usernameStatus === 'taken' && <X size={16} className="text-red-500" />}
                                        </div>
                                    </div>
                                    {usernameStatus === 'taken' && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">Username already taken</p>}
                                    {usernameStatus === 'available' && <p className="text-[10px] text-green-500 font-bold mt-1 ml-1">Username available</p>}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-purple transition-colors" size={16} />
                                        <input
                                            type="email"
                                            required
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={`w-full bg-black/60 border rounded-xl py-2 pl-11 pr-10 outline-none focus:bg-black/80 transition-all text-sm font-medium text-white placeholder:text-zinc-700 ${emailStatus === 'taken' ? 'border-red-500/50 focus:border-red-500' :
                                                emailStatus === 'available' ? 'border-green-500/50 focus:border-green-500' :
                                                    'border-white/5 focus:border-brand-purple/50'
                                                }`}
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                            {emailStatus === 'checking' && <Loader2 size={16} className="animate-spin text-brand-purple" />}
                                            {emailStatus === 'available' && <Check size={16} className="text-green-500" />}
                                            {emailStatus === 'taken' && <X size={16} className="text-red-500" />}
                                        </div>
                                    </div>
                                    {emailStatus === 'taken' && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">Email already registered</p>}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Phone Number</label>
                                    <div className="flex gap-2">
                                        <CountryCodeSelector
                                            selectedCountry={selectedCountry}
                                            onSelect={setSelectedCountry}
                                        />
                                        <div className="relative group flex-1">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-purple transition-colors" size={16} />
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Number"
                                                value={formData.phoneNumber}
                                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                                className="w-full bg-black/60 border border-white/5 rounded-xl py-2 pl-11 pr-4 outline-none focus:border-brand-purple/50 focus:bg-black/80 transition-all text-sm font-medium text-white placeholder:text-zinc-700"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Secure Password</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-purple transition-colors" size={16} />
                                        <input
                                            type="password"
                                            required
                                            placeholder="••••••••"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            className="w-full bg-black/60 border border-white/5 rounded-xl py-2 pl-11 pr-4 outline-none focus:border-brand-purple/50 focus:bg-black/80 transition-all text-sm font-medium text-white placeholder:text-zinc-700"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Confirm Password</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-purple transition-colors" size={16} />
                                        <input
                                            type="password"
                                            required
                                            placeholder="••••••••"
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                            className="w-full bg-black/60 border border-white/5 rounded-xl py-2 pl-11 pr-4 outline-none focus:border-brand-purple/50 focus:bg-black/80 transition-all text-sm font-medium text-white placeholder:text-zinc-700"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2 space-y-1.5">
                                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Referral Code</label>
                                    <div className="relative group">
                                        <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-purple transition-colors" size={16} />
                                        <input
                                            type="text"
                                            placeholder="Enter referral code"
                                            value={formData.referralCode}
                                            onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                                            className="w-full bg-black/60 border border-white/5 rounded-xl py-2 pl-11 pr-4 outline-none focus:border-brand-purple/50 focus:bg-black/80 transition-all text-sm font-medium text-white placeholder:text-zinc-700"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading || usernameStatus === 'taken' || emailStatus === 'taken'}
                                className="group relative w-full py-2.5 bg-white text-black rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-white hover:shadow-[0_0_30px_rgba(255,184,0,0.3)] transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50 active:scale-[0.98]"
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-zinc-200 border-t-zinc-800 rounded-full animate-spin" />
                                        CONSTRUCTING...
                                    </div>
                                ) : (
                                    <>
                                        INITIALIZE MEMBERSHIP
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Integrated Footer Link */}
                        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest leading-none">
                                SECURE GENESIS REGISTRATION <br className="hidden md:block" /> DATA IS END-TO-END ENCRYPTED.
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Already a member?</span>
                                <Link
                                    href="/login"
                                    className="relative group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-500 font-bold text-[10px] uppercase tracking-widest text-brand-purple hover:text-white overflow-hidden"
                                >
                                    <div className="absolute inset-0 p-[1px] rounded-lg opacity-100">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#ff0000,#ff8000,#ffff00,#80ff00,#00ff00,#00ff80,#00ffff,#0080ff,#0000ff,#8000ff,#ff00ff,#ff0000)]"
                                        />
                                        <div className="absolute inset-[1px] bg-[#0c0c0c] rounded-[7px]" />
                                    </div>
                                    <span className="relative z-10">Secure Login</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Policy Overlay Modal */}
            {showPolicyModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="glass-card max-w-2xl w-full p-8 space-y-6 relative border-brand-gold/30 gold-glow"
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 rounded-2xl bg-brand-gold/10 text-brand-gold">
                                <ShieldCheck size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black uppercase tracking-tighter">Protocols & Terms</h2>
                                <p className="text-zinc-500 text-sm font-medium">Please review carefully before initializing membership.</p>
                            </div>
                        </div>

                        {/* Confirmation Signature Area - MOVED ABOVE & MADE BIGGER */}
                        <div className="space-y-4">
                            <div className="space-y-3">
                                <label className="text-xs font-black text-brand-gold uppercase tracking-[0.2em] ml-1 italic flex items-center gap-2">
                                    <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
                                    I <span className={`underline decoration-2 underline-offset-4 ${followedName && formData.fullName.trim().toUpperCase() !== followedName.trim() ? 'text-red-500 decoration-red-500' : ''}`}>
                                        {followedName || '______'}
                                    </span> AND AGREE:
                                </label>
                                <div className="relative group">
                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-brand-gold transition-colors" size={24} />
                                    <input
                                        type="text"
                                        placeholder="TYPE FULL NAME TO INITIALIZE"
                                        value={followedName}
                                        onChange={(e) => setFollowedName(e.target.value.toUpperCase())}
                                        className={`w-full bg-white/5 border rounded-2xl py-5 pl-14 pr-6 outline-none focus:bg-black/80 transition-all text-xl font-black tracking-[0.3em] placeholder:text-zinc-800 placeholder:tracking-widest ${followedName && formData.fullName.trim().toUpperCase() !== followedName.trim()
                                            ? 'border-red-500/50 focus:border-red-500 text-red-500'
                                            : 'border-white/10 focus:border-brand-gold/50 text-white'
                                            }`}
                                    />
                                    {followedName && formData.fullName.trim().toUpperCase() !== followedName.trim() && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-red-500 uppercase tracking-widest animate-pulse"
                                        >
                                            Identity Variance
                                        </motion.div>
                                    )}
                                </div>
                                {followedName && formData.fullName.trim().toUpperCase() !== followedName.trim() && (
                                    <p className="text-[10px] font-bold text-red-500/80 italic ml-1">
                                        Signature must exactly match your registration name: <span className="text-white">{formData.fullName.toUpperCase()}</span>
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Policy Text - NO INTERNAL SCROLL */}
                        <div className="space-y-6 text-xs text-zinc-400 font-medium leading-relaxed bg-black/20 p-6 rounded-2xl border border-white/5 border-dashed">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-brand-gold font-bold uppercase tracking-widest mb-2 flex items-center gap-2 text-[10px]">
                                        <span className="w-1 h-1 bg-brand-gold rounded-full" /> 1. GOVERNANCE
                                    </p>
                                    <p>Decentralized ecosystem assets and rewards are subject to Genesis Whitepaper protocols.</p>
                                </div>
                                <div>
                                    <p className="text-brand-gold font-bold uppercase tracking-widest mb-2 flex items-center gap-2 text-[10px]">
                                        <span className="w-1 h-1 bg-brand-gold rounded-full" /> 2. PRIVACY
                                    </p>
                                    <p>Data is end-to-end encrypted. Aggregated analytics used for performance only.</p>
                                </div>
                                <div>
                                    <p className="text-brand-gold font-bold uppercase tracking-widest mb-2 flex items-center gap-2 text-[10px]">
                                        <span className="w-1 h-1 bg-brand-gold rounded-full" /> 3. REFERRALS
                                    </p>
                                    <p>Real-time distribution. Manipulation results in immediate Genesis ID termination.</p>
                                </div>
                                <div>
                                    <p className="text-brand-gold font-bold uppercase tracking-widest mb-2 flex items-center gap-2 text-[10px]">
                                        <span className="w-1 h-1 bg-brand-gold rounded-full" /> 4. RISK
                                    </p>
                                    <p>Participants acknowledge market volatility risks and user-side security responsibility.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        className="peer sr-only"
                                        checked={referralEmailConsent}
                                        onChange={(e) => setReferralEmailConsent(e.target.checked)}
                                    />
                                    <div className="w-6 h-6 border-2 border-zinc-700 rounded-lg peer-checked:bg-brand-gold peer-checked:border-brand-gold transition-all" />
                                    <Check className="absolute inset-0 m-auto text-black opacity-0 peer-checked:opacity-100 transition-all" size={16} strokeWidth={4} />
                                </div>
                                <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors uppercase tracking-widest text-center">
                                    Authorize display of my email ID for <span className="text-brand-gold underline decoration-brand-gold/30">Referral Master</span>
                                </span>
                            </label>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => setShowPolicyModal(false)}
                                className="flex-1 py-4 border border-white/10 text-zinc-500 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleFinalRegistration}
                                disabled={!followedName || formData.fullName.trim().toUpperCase() !== followedName.trim()}
                                className="flex-[2] py-4 bg-brand-gold text-black rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all disabled:opacity-50 active:scale-[0.98]"
                            >
                                AGREE & INITIALIZE
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}

export default function RegisterPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#080808] flex items-center justify-center"><div className="w-8 h-8 border-2 border-white/20 border-t-brand-gold rounded-full animate-spin"></div></div>}>
            <RegisterContent />
        </Suspense>
    );
}
