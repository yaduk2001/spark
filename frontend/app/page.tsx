"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Trophy, Users, Award, Gem, Coins, Network, ShieldCheck, Globe, Star } from "lucide-react";
import NFTCoin from "@/components/NFTCoin";
import SubscriptionPriceCard from "@/components/SubscriptionPriceCard";
import RewardCard from "@/components/RewardCard";
import MembershipCounter from "@/components/MembershipCounter";
import UserTicker from "@/components/UserTicker";
import FuturePlanCard from "@/components/FuturePlanCard";
import Footer from "@/components/Footer";
import AiNetworkVisual from "@/components/AiNetworkVisual";
import FloatingMobileTicker from "@/components/FloatingMobileTicker";
import ScrollReveal from "@/components/ScrollReveal";
import WhitepaperSection from "@/components/WhitepaperSection";
import GlitchText from "@/components/GlitchText";
import CinematicBackground from "@/components/CinematicBackground";
import { textReveal, revealUp, containerStagger, cinematicReveal } from "@/utils/animations";

export default function Home() {
  return (
    <div className="relative overflow-hidden text-white selection:bg-brand-purple/30">
      <CinematicBackground />
      <UserTicker />

      {/* Abstract Background Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none z-[-1]" />

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-48 pb-8 lg:pb-12 px-4 lg:px-6 min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-visible">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={cinematicReveal} className="inline-flex items-center gap-3 px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-black/40 border border-brand-gold/50 text-xs lg:text-sm font-black text-brand-gold mb-8 lg:mb-12 uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,184,0,0.3)] backdrop-blur-md hover:bg-brand-gold hover:text-black transition-colors duration-300">
              <span className="w-2 h-2 lg:w-3 lg:h-3 bg-brand-gold rounded-full animate-pulse-fast" />
              WE DON'T LAUNCH. WE ARRIVE.
            </motion.div>

            <motion.h1 variants={cinematicReveal} className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 lg:mb-8 tracking-tighter uppercase drop-shadow-2xl">
              SPAARK <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">EXCHANGE</span> <br />
              <GlitchText text="REVOLUTION" as="span" className="gradient-text animate-shine" />
            </motion.h1>

            <motion.p variants={cinematicReveal} className="text-base lg:text-lg text-zinc-300 font-bold mb-8 lg:mb-10 max-w-xl leading-snug border-l-4 border-brand-purple pl-4 lg:pl-6">
              We are building the future of decentralized finance and gaming. <span className="text-white">Join the revolution</span> that empowers communities and rewards participation.
            </motion.p>

            <motion.div variants={revealUp} className="mb-12 lg:mb-16 scale-100 lg:scale-110 origin-left">
              <MembershipCounter />
            </motion.div>
          </motion.div>

          {/* Floating Coin & Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Desktop View: Massive Coin */}
            <div className="hidden lg:block relative z-10">
              <div className="relative w-[450px] h-[450px] flex items-center justify-center">
                <NFTCoin size={450} className="scale-100" />
              </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden relative w-[300px] h-[300px]">
              <div className="absolute top-4 right-4 z-20">
                <NFTCoin size={120} className="animate-float" />
              </div>
              {/* Floating User Info - centered at bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-full scale-90">
                <FloatingMobileTicker />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are & Mission Section */}
      <section className="py-8 lg:py-16 px-4 lg:px-6 relative bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal animation="slide-right" className="flex flex-col gap-6">
              {/* Global Connectivity Card with Background Visual */}
              <div className="glass-card-heavy rgb-border min-h-[400px] lg:h-[500px] flex flex-col justify-end p-6 lg:p-10 group relative overflow-hidden">

                {/* Dynamic Background Visual */}
                <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100 transition-transform">
                  <AiNetworkVisual />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-3 py-1 lg:px-4 lg:py-2 bg-brand-purple border border-white/20 rounded-xl text-[10px] lg:text-xs font-black text-white shadow-[0_0_20px_rgba(138,43,226,0.5)] uppercase tracking-widest">
                    AI POWERED NETWORK
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-brand-purple/20 backdrop-blur-md flex items-center justify-center text-brand-purple mb-4 lg:mb-6 shadow-[0_0_30px_rgba(138,43,226,0.4)] border border-brand-purple/30">
                    <Network size={28} className="lg:hidden" />
                    <Network size={32} className="hidden lg:block" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-3 lg:mb-4 text-white uppercase tracking-tight">Global <span className="text-brand-purple">Connectivity</span></h3>
                  <p className="text-zinc-300 leading-snug font-bold max-w-md text-sm lg:text-base">
                    Connecting markets, gamers, and investors in a unified blockchain ecosystem.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={0.2}>
              <div className="mb-6">
                <GlitchText text="WHO WE ARE" as="h2" className="text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-none text-white" />
              </div>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-medium border-l-2 border-zinc-700 pl-6">
                Spaark Global Tech is a global technology and digital innovation company headquartered in Dubai and Australia, strategically positioned to operate across International Markets. We focus on developing scalable digital platforms across Financial Technology, Online Commerce, Blockchain, Infrastructure, and Digital Entertainment. Our organization is built on strong governance, long-term strategic planning, and sustainable innovation. By combining advanced technology with structured business models, Spaark Global Tech aims to create a connected digital ecosystem that supports growth for both the company and its global user community.
              </p>

              <div className="space-y-3">
                {[
                  { title: "Vision", desc: "Our Vision is to become a globally recognized technology enterprise that connects Digital, Finance, Online Commerce, and Blockchain Innovation while providing structured opportunities for customers and partners to build sustainable, High-Growth Online Businesses within the Spaark Ecosystem.", icon: <Zap size={24} /> },
                  { title: "Mission", desc: "Our Mission is to develop secure, scalable, and future-ready digital platforms that empower individuals and businesses to participate in the Global Digital Economy through transparent and innovative online business models.", icon: <Globe size={24} /> },
                  { title: "Values", desc: "Transparency, Community, and Innovation.", icon: <ShieldCheck size={24} /> }
                ].map((item, i) => (
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    key={i}
                    className="flex gap-6 p-6 rounded-2xl bg-white/5 border-l-4 border-transparent hover:border-brand-gold hover:bg-white/10 transition-all cursor-none"
                  >
                    <div className="mt-1 w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0 shadow-[0_0_15px_rgba(138,43,226,0.2)]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white uppercase tracking-wide">{item.title}</h4>
                      <p className="text-base text-zinc-400 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Subscription Section - "Activate Membership" flow */}
      <section className="py-12 lg:py-20 px-6 relative" id="subscription">
        <div className="absolute inset-0 bg-brand-purple/5 skew-y-3 transform origin-top-left pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal animation="fade-up" className="text-center mb-12 lg:mb-20">
            <GlitchText text="ACCESS THE FUTURE" as="h2" className="text-3xl md:text-4xl font-black mb-5 uppercase tracking-tighter mix-blend-screen text-stroke text-white block" />
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-bold uppercase tracking-widest">Choose your entry point</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <ScrollReveal animation="slide-right" delay={0.1} className="h-full">
              <div className="transform hover:scale-105 transition-transform duration-300 h-full rgb-border">
                <SubscriptionPriceCard
                  title="Spark Starter"
                  price="$3.5"
                  features={[
                    "Entry level access",
                    "Community participation",
                    "Basic reward eligibility",
                    "SPK Token Purchase Access"
                  ]}
                  delay={0.1}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-left" delay={0.2} className="h-full">
              <div className="relative transform hover:scale-105 transition-transform duration-300 h-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold to-brand-purple opacity-30 blur-2xl animate-pulse-fast -z-10 rounded-3xl" />
                <SubscriptionPriceCard
                  title="Global Pro"
                  price="$50"
                  isPopular={true}
                  features={[
                    "9000 Spark SPK Tokens included",
                    "Withdrawal option enabled (w/ 2nd purchase)",
                    "Full Staking Rewards",
                    "Community Building Bonuses",
                    "Priority Support"
                  ]}
                  delay={0.2}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Spark - Card Structure */}
      <section className="py-16 lg:py-24 px-6 bg-black/40 backdrop-blur-sm relative overflow-hidden">
        {/* Aggressive Grid Background */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20" />

        <div className="max-w-8xl mx-auto relative z-10">
          <ScrollReveal animation="fade-up" className="mb-12 lg:mb-20 text-center">
            <GlitchText text="WHY CHOOSE SPARK GLOBAL?" as="h2" className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white block" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Decentralized Power", desc: "Full control of your assets with our non-custodial architecture.", icon: <Network size={40} /> },
              { title: "Instant Rewards", desc: "Real-time settlement for all community and staking rewards.", icon: <Zap size={40} /> },
              { title: "Global Community", desc: "Join a network of thousands of like-minded innovators.", icon: <Users size={40} /> }
            ].map((card, i) => (
              <ScrollReveal key={i} animation="zoom-in" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="p-8 lg:p-10 rounded-[2rem] bg-zinc-900/80 backdrop-blur-md border-double border-4 border-transparent bg-origin-border transition-all group shadow-2xl h-full flex flex-col items-center text-center rgb-border"
                >
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 lg:mb-8 group-hover:scale-125 group-hover:bg-brand-gold group-hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(255,184,0,0.2)]">
                    <div className="group-hover:animate-spin-slow">
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-4 text-white uppercase italic">{card.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-bold text-base lg:text-lg">
                    {card.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Core Section */}
      <section className="py-16 lg:py-24 px-6 bg-zinc-950/50 backdrop-blur-sm relative" id="rewards">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent" />
        <div className="max-w-8xl mx-auto">
          <ScrollReveal animation="fade-up" className="text-center mb-12 lg:mb-20">
            <span className="text-brand-purple font-black tracking-[0.5em] uppercase mb-4 block animate-pulse text-sm lg:text-base">Unlock Potential</span>
            <GlitchText text="8 TYPES OF REWARDS" as="h2" className="text-3xl md:text-5xl font-black mb-4 uppercase text-white block" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 mb-12 lg:mb-20">
            {/* Reward Type 1 */}
            <ScrollReveal animation="fade-right" delay={0.1}>
              <div className="glass-card-heavy rgb-border p-2 hover:bg-brand-purple/5 transition-colors">
                <RewardCard
                  title="1. Start-Up Community Rewards"
                  icon={<Zap size={32} className="animate-pulse-fast text-brand-gold" />}
                  items={[
                    {
                      label: "Initial Allocation",
                      value: "9000 SPK Tokens",
                      subtext: "With $50 Subscription"
                    },
                    {
                      label: "Withdrawal Condition",
                      value: "Buy 2nd SPK",
                      subtext: "Must purchase 2 more Spark SPK Tokens ($50 x 2 = $100). Total 9000 SPK Tokens."
                    },
                    {
                      label: "Benefit",
                      value: "Unlock Withdrawals",
                      highlight: true,
                      subtext: "$10 SPK Token withdrawal option enables and reward transfers automatically."
                    }
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Reward Type 2 */}
            <ScrollReveal animation="fade-left" delay={0.2}>
              <div className="glass-card-heavy rgb-border p-2 hover:bg-brand-gold/5 transition-colors">
                <RewardCard
                  title="2. Community Building Rewards"
                  icon={<Users size={32} className="animate-bounce text-brand-purple" />}
                  items={[
                    {
                      label: "Referral Reward",
                      value: "$15.00",
                      highlight: true,
                      subtext: "Automatically transferred to wallet when someone buys Spark SPK Token under your community."
                    },
                    {
                      label: "Staking Access",
                      value: "Enabled",
                      subtext: "Unlocks community staking potential."
                    }
                  ]}
                  delay={0.2}
                />
              </div>
            </ScrollReveal>

            {/* Reward Type 4: Withdrawal Income (New) */}
            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="glass-card-heavy rgb-border p-2 hover:bg-brand-gold/5 transition-colors">
                <RewardCard
                  title="4. Withdrawal Income"
                  icon={<Coins size={32} className="animate-pulse text-brand-gold" />}
                  items={[
                    {
                      label: "Global Dividend",
                      value: "5% Distribution",
                      highlight: true,
                      subtext: "Distributed among active community members from total ecosystem withdrawals."
                    },
                    {
                      label: "Frequency",
                      value: "Instant",
                      subtext: "Settled in real-time as withdrawals occur across the network."
                    }
                  ]}
                  delay={0.3}
                />
              </div>
            </ScrollReveal>

            {/* Reward Type 5: 1st Level Growth Partners (New) */}
            <ScrollReveal animation="fade-up" delay={0.4}>
              <div className="glass-card-heavy rgb-border p-2 hover:bg-brand-purple/5 transition-colors">
                <RewardCard
                  title="5. 1st Level Growth Partners"
                  icon={<Network size={32} className="text-brand-purple" />}
                  items={[
                    {
                      label: "Direct Bonus",
                      value: "$2.50 / Partner",
                      subtext: "Monthly retention bonus for maintaining active 1st level growth partners."
                    },
                    {
                      label: "Performance Pool",
                      value: "Eligible",
                      highlight: true,
                      subtext: "Contributes toward your rank achiever status."
                    }
                  ]}
                  delay={0.4}
                />
              </div>
            </ScrollReveal>

            {/* Reward Type 6: 2nd Level Growth Partners (New) */}
            <ScrollReveal animation="fade-up" delay={0.5}>
              <div className="glass-card-heavy rgb-border p-2 hover:bg-brand-purple/5 transition-colors">
                <RewardCard
                  title="6. 2nd Level Growth Partners"
                  icon={<Users size={32} className="text-brand-purple" />}
                  items={[
                    {
                      label: "Override Bonus",
                      value: "10% Reward",
                      highlight: true,
                      subtext: "Earn based on the combined volume and activity of your secondary level partners."
                    },
                    {
                      label: "Network Depth",
                      value: "36 Partners",
                      subtext: "Maximized when your second level reaches full capacity."
                    }
                  ]}
                  delay={0.5}
                />
              </div>
            </ScrollReveal>

            {/* Reward Type 7: 3rd Level Growth Partners (New) */}
            <ScrollReveal animation="fade-up" delay={0.6}>
              <div className="glass-card-heavy rgb-border p-2 hover:bg-brand-gold/5 transition-colors">
                <RewardCard
                  title="7. 3rd Level Growth Partners"
                  icon={<Globe size={32} className="text-brand-gold" />}
                  items={[
                    {
                      label: "Global Pool Entry",
                      value: "Entry Granted",
                      highlight: true,
                      subtext: "Special access to the 3rd level global revenue share pool."
                    },
                    {
                      label: "Threshold",
                      value: "216 Partners",
                      subtext: "Requires a fully established 3rd level team of growth partners."
                    }
                  ]}
                  delay={0.6}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Reward Type 3: Buying Rewards Tier */}
          <div className="mb-16 lg:mb-24">
            <ScrollReveal animation="fade-up" className="text-center mb-8 lg:mb-12">
              <GlitchText text="3. SPARK COMMUNITY BUYING REWARDS" as="h3" className="text-2xl md:text-4xl font-black mb-6 lg:mb-8 uppercase tracking-tight text-white block" />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <ScrollReveal animation="zoom-in" delay={0.1}>
                <div className="glass-card hover:bg-white/10 p-1 rgb-border">
                  <RewardCard
                    title="Tiers 1-2"
                    items={[
                      { label: "Level 1", value: "$0.875" },
                      { label: "Level 2", value: "$0.875" }
                    ]}
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal animation="zoom-in" delay={0.2}>
                <div className="glass-card hover:bg-white/10 p-1 rgb-border">
                  <RewardCard
                    title="Tiers 3-4"
                    items={[
                      { label: "Level 3", value: "$1.3125" },
                      { label: "Level 4", value: "$1.3125" }
                    ]}
                    delay={0.1}
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal animation="zoom-in" delay={0.3}>
                <div className="glass-card hover:bg-white/10 p-1 scale-100 lg:scale-105 border-brand-gold/50 shadow-[0_0_30px_rgba(255,184,0,0.2)] rgb-border">
                  <RewardCard
                    title="Tiers 5-6"
                    items={[
                      { label: "Level 5", value: "$1.75" },
                      { label: "Level 6", value: "$2.685", highlight: true }
                    ]}
                    delay={0.2}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Staking Calculations Example */}
          <div className="glass-card-heavy p-6 lg:p-12 border-brand-purple/20 mb-16 lg:mb-24 bg-gradient-to-r from-brand-purple/10 via-black to-brand-purple/10 relative overflow-hidden rgb-border">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-[100px] rounded-full animate-pulse" />

            <div className="flex items-center gap-4 mb-8 lg:mb-10 relative z-10">
              <Coins className="text-brand-gold animate-spin-slow shrink-0" size={32} />
              <GlitchText text="STAKING CALCULATION EXAMPLES" as="h3" className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white block" />
            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-6 font-mono text-sm lg:text-base text-zinc-300 relative z-10">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors">
                <span>$0.875 x 6 Team Growth Partners</span>
                <span className="text-brand-gold font-bold text-lg lg:text-xl">$5.25</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors">
                <span>$0.875 x 36 Team Growth Partners</span>
                <span className="text-brand-gold font-bold text-lg lg:text-xl">$31.50</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors">
                <span>$1.3125 x 216 Team Growth Partners</span>
                <span className="text-brand-gold font-bold text-lg lg:text-xl">$283.50</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors">
                <span>$1.3125 x 1,296 Team Growth Partners</span>
                <span className="text-brand-gold font-bold text-lg lg:text-xl">$1,701.00</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors">
                <span>$1.75 x 7,776 Team Growth Partners</span>
                <span className="text-brand-gold font-bold text-lg lg:text-xl">$13,608.00</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors scale-100 lg:scale-105 origin-left">
                <span className="text-brand-purple font-bold">$2.625 x 46,656 Team Growth Partners</span>
                <span className="text-green-400 font-black text-xl lg:text-2xl text-glow">$122,472.00</span>
              </div>

              {/* Total Earning */}
              <div className="col-span-full mt-6 p-6 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex justify-between items-center group hover:bg-brand-gold/20 transition-all">
                <span className="text-white font-black uppercase tracking-widest text-lg lg:text-xl">Total team building earning</span>
                <span className="text-white font-black text-2xl lg:text-4xl text-glow-gold animate-pulse">$138,101.25</span>
              </div>
            </div>
          </div>

          {/* Reward Type 8: Extra Staking Rewards */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-purple/5 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <div className="text-center mb-12 lg:mb-16">
                <GlitchText text="8. RANK ACHIEVERS REWARDS" as="h3" className="text-2xl md:text-5xl font-black uppercase text-white block" />
                <p className="text-zinc-500 text-base lg:text-xl mt-2 font-bold tracking-widest uppercase">Eligible for Spark Staking Community Only</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  { reward: "$2.40", label: "1st Rank Achievement Reward", subtext: "1st Direct 6 enrollment Supervisor" },
                  { reward: "$10.80", label: "2nd Rank Achievement Reward", subtext: "2nd level 36 team growth partners Assistant Manager" },
                  { reward: "$54.00", label: "3rd Rank Achievement Reward", subtext: "3rd 216 team growth partners Manager" },
                  { reward: "$259.20 + Mobile Phone", label: "4th Rank Achievement Reward", subtext: "1296 Team Growth Partners Senior Manager" },
                  { reward: "$1,555.20 + Bike Fund", label: "5th Rank Achievement Reward", subtext: "7776 Team Growth Partners Regional Manager" },
                  { reward: "$6,998.40 + Car Fund", label: "6th Rank Achievement Reward", subtext: "46656 Team Growth Partners Director" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-black/60 border-double border-4 border-transparent p-6 lg:p-8 rounded-[2rem] flex flex-col items-center text-center hover:bg-brand-purple/20 bg-origin-border transition-all shadow-xl group rgb-border h-full"
                  >
                    <div className="text-xl lg:text-2xl font-black text-white mb-6 uppercase tracking-wider leading-tight min-h-[3.5rem] flex items-center">{item.subtext}</div>
                    <div className="text-3xl lg:text-4xl font-black text-brand-gold mb-6 text-glow-gold">{item.reward}</div>
                    <div className="mt-auto text-[10px] lg:text-xs text-white/80 font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-full uppercase tracking-wider">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-16 lg:py-24 px-6 relative overflow-hidden bg-black/40 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal animation="fade-up" className="text-center mb-16 lg:mb-24">
            <GlitchText text="FUTURE PLANS" as="h2" className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white block" />
            <p className="text-base lg:text-lg text-zinc-400 font-medium max-w-2xl mx-auto">The roadmap to global adoption and technological dominance.</p>
          </ScrollReveal>

          <div className="space-y-0">
            {/* 2028 - Spark Coin */}
            <ScrollReveal animation="slide-left" delay={0.1}>
              <div className="transform hover:scale-[1.02] transition-transform duration-500 rgb-border p-[2px]">
                <FuturePlanCard
                  step="2028"
                  title="Spark Coin"
                  description="Launching of Spark Coin, a proprietary digital asset designed to support ecosystem Transactions, Rewards, and Platform Utility."
                  image="/images/community-building.png" // Keeping existing image for now as per minimal asset changes rule
                  imageFit="cover"
                />
              </div>
            </ScrollReveal>

            {/* 2030 - Online Market Hub */}
            <ScrollReveal animation="slide-right" delay={0.2}>
              <div className="transform hover:scale-[1.02] transition-transform duration-500 rgb-border p-[2px]">
                <FuturePlanCard
                  step="2030"
                  title="Online Market Hub"
                  description="Introduction of a Global Online Market Hub enabling Digital Commerce, Services, and Entrepreneurial participation through Spaark-powered platform."
                  image="/images/market-hub.png"
                  isReversed={true}
                  imageFit="contain"
                />
              </div>
            </ScrollReveal>

            {/* 2031 - Online Games */}
            <ScrollReveal animation="slide-left" delay={0.3}>
              <div className="transform hover:scale-[1.02] transition-transform duration-500 rgb-border p-[2px]">
                <FuturePlanCard
                  step="2031"
                  title="Online Games"
                  description="Expansion into Online Gaming Platforms, integrating Digital Economies and user engagement within the broader Spaark Ecosystem."
                  image="/images/gaming-hub.jpg"
                  imageFit="cover"
                />
              </div>
            </ScrollReveal>

            {/* 2032 - Spark Exchange */}
            <ScrollReveal animation="slide-right" delay={0.4}>
              <div className="transform hover:scale-[1.02] transition-transform duration-500 rgb-border p-[2px]">
                <FuturePlanCard
                  step="2032"
                  title="Spark Exchange"
                  description="Launch of Spark Exchange, a Secure and Scalable Digital Exchange Platform, designed to support Digital Asset Trading and Ecosystem Liquidity."
                  image="/images/spark-exchange.jpg"
                  isReversed={true}
                  imageFit="cover"
                />
              </div>
            </ScrollReveal>

            {/* 2035 - Spark Blockchain */}
            <ScrollReveal animation="slide-left" delay={0.5}>
              <div className="transform hover:scale-[1.02] transition-transform duration-500 rgb-border p-[2px]">
                <FuturePlanCard
                  step="2035"
                  title="Spark Blockchain"
                  description="Deployment of Spark Blockchain, a proprietary blockchain infrastructure focused on security, scalability, and enterprise-grade performance."
                  image="/images/ai-gaming-hub.png" // Reusing available asset
                  imageFit="cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI/Blockchain Bottom Visual */}
      {/* AI/Blockchain Bottom Visual - REPLACED with AI Gaming Hub */}
      <section className="relative py-12 lg:py-24 bg-black/40 backdrop-blur-sm overflow-hidden flex justify-center">
        <ScrollReveal animation="zoom-in" delay={0.2} className="relative w-full max-w-6xl h-[300px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(138,43,226,0.2)] rgb-border p-1">
          <Image
            src="/images/ai-gaming-hub.png"
            alt="AI Gaming & Market Hub"
            fill
            className="object-cover"
          />
          {/* Subtle Overlay only for integration, not blocking visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </ScrollReveal>
      </section>

      {/* User Benefits Section */}
      <section className="py-12 lg:py-20 px-6 bg-linear-to-b from-black/50 to-zinc-900/50 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
              <Gem size={12} /> Member Perks
            </div>
            <GlitchText text="USER BENEFITS" as="h2" className="text-4xl font-black mb-4 text-white block" />
            <p className="text-zinc-500">Everything you need to succeed in the digital economy.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Exclusive Access", desc: "Early entry to all Spark ecosystem launches and presales." },
              { title: "Passive Income", desc: "Earn daily rewards through our verified staking pools." },
              { title: "Global Networking", desc: "Connect with entrepreneurs and investors worldwide." },
              { title: "Governance", desc: "Voting rights in the Spark DAO for future developments." }
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
                <div className="bg-white/5 border-double border-4 border-transparent p-6 rounded-2xl hover:bg-white/10 bg-origin-border transition-colors text-center group h-full rgb-border">
                  <div className="w-12 h-12 bg-linear-to-br from-brand-purple to-brand-purple/50 rounded-xl mx-auto mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_30px_rgba(138,43,226,0.2)]">
                    <Star size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WhitepaperSection />
      <Footer />
    </div>
  );
}
