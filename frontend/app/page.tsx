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

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-black text-white selection:bg-brand-purple/30">
      <UserTicker />

      {/* Abstract Background Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-indigo/20 blur-[150px] rounded-full pointer-events-none z-[-1]" />

      {/* Hero Section */}
      <section className="relative pt-48 pb-12 px-6 min-h-[90vh] flex items-center overflow-visible">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 border border-brand-gold/50 text-sm font-black text-brand-gold mb-12 uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,184,0,0.3)] backdrop-blur-md">
              <span className="w-3 h-3 bg-brand-gold rounded-full animate-pulse-fast" />
              The Next Evolution
            </div>

            <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-8 tracking-tighter uppercase drop-shadow-2xl">
              SPARK <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">GLOBAL</span> <br />
              <span className="gradient-text animate-shine">
                REVOLUTION
              </span>
            </h1>

            <p className="text-lg text-zinc-300 font-bold mb-10 max-w-xl leading-snug border-l-4 border-brand-purple pl-6">
              We are building the future of decentralized finance and gaming. <span className="text-white">Join the revolution</span> that empowers communities and rewards participation.
            </p>

            <div className="mb-16 scale-110 origin-left">
              <MembershipCounter />
            </div>
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
            <div className="lg:hidden relative w-[350px] h-[350px]">
              <div className="absolute top-4 right-4 z-20">
                <NFTCoin size={150} className="animate-float" />
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
      <section className="py-16 px-6 relative bg-zinc-950">
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="slide-right" className="flex flex-col gap-6">
              {/* Global Connectivity Card with Background Visual */}
              <div className="glass-card-heavy rgb-border h-[500px] flex flex-col justify-end p-10 group relative overflow-hidden">

                {/* Dynamic Background Visual */}
                <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100 transition-transform">
                  <AiNetworkVisual />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-4 py-2 bg-brand-purple border border-white/20 rounded-xl text-xs font-black text-white shadow-[0_0_20px_rgba(138,43,226,0.5)] uppercase tracking-widest">
                    AI POWERED NETWORK
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 backdrop-blur-md flex items-center justify-center text-brand-blue mb-6 shadow-[0_0_30px_rgba(59,130,246,0.4)] border border-brand-blue/30">
                    <Network size={32} />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Global <span className="text-brand-blue">Connectivity</span></h3>
                  <p className="text-zinc-300 leading-snug font-bold max-w-md text-base">
                    Connecting markets, gamers, and investors in a unified blockchain ecosystem.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={0.2}>
              <h2 className="text-3xl lg:text-4xl font-black mb-6 uppercase tracking-tighter leading-none">
                Who <span className="text-zinc-700">We Are</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-medium border-l-2 border-zinc-700 pl-6">
                Spark Global Tech is not just a platform; it's a movement. We are a collective of visionaries, developers, and community leaders dedicated to democratizing wealth.
              </p>

              <div className="space-y-3">
                {[
                  { title: "Mission", desc: "To create a sustainable, user-owned digital economy.", icon: <Globe size={24} /> },
                  { title: "Vision", desc: "A world where every digital interaction creates value.", icon: <Zap size={24} /> },
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
      <section className="py-20 px-6 relative" id="subscription">
        <div className="absolute inset-0 bg-brand-purple/5 skew-y-3 transform origin-top-left pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal animation="fade-up" className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black mb-5 uppercase tracking-tighter mix-blend-screen text-stroke">
              Access <span className="text-brand-purple">The Future</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-bold uppercase tracking-widest">Choose your entry point</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal animation="slide-right" delay={0.1} className="h-full">
              <div className="transform hover:scale-105 transition-transform duration-300 h-full rgb-border">
                <SubscriptionPriceCard
                  title="Spark Starter"
                  price="$3.5"
                  features={[
                    "Entry level access",
                    "Community participation",
                    "Basic reward eligibility",
                    "NFT Token Purchase Access"
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
                    "90,000 Spark NFT Tokens included",
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
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        {/* Aggressive Grid Background */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20" />

        <div className="max-w-8xl mx-auto relative z-10">
          <ScrollReveal animation="fade-up" className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Why Choose <span className="gradient-text-purple">Spark Global?</span></h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Decentralized Power", desc: "Full control of your assets with our non-custodial architecture.", icon: <Network size={40} /> },
              { title: "Instant Rewards", desc: "Real-time settlement for all community and staking rewards.", icon: <Zap size={40} /> },
              { title: "Global Community", desc: "Join a network of thousands of like-minded innovators.", icon: <Users size={40} /> }
            ].map((card, i) => (
              <ScrollReveal key={i} animation="zoom-in" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="p-10 rounded-[2rem] bg-zinc-900/80 backdrop-blur-md border-double border-4 border-transparent bg-origin-border transition-all group shadow-2xl h-full flex flex-col items-center text-center rgb-border"
                >
                  <div className="w-24 h-24 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-125 group-hover:bg-brand-gold group-hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(255,184,0,0.2)]">
                    <div className="group-hover:animate-spin-slow">
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-white uppercase italic">{card.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-bold text-lg">
                    {card.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Core Section */}
      <section className="py-24 px-6 bg-zinc-950 relative" id="rewards">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent" />
        <div className="max-w-8xl mx-auto">
          <ScrollReveal animation="fade-up" className="text-center mb-20">
            <span className="text-brand-purple font-black tracking-[0.5em] uppercase mb-4 block animate-pulse">Unlock Potential</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">4 Types of <span className="gradient-text">Rewards</span></h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            {/* Reward Type 1 */}
            <ScrollReveal animation="fade-right" delay={0.1}>
              <div className="glass-card-heavy rgb-border p-2 hover:bg-brand-purple/5 transition-colors">
                <RewardCard
                  title="1. Start-Up Community Rewards"
                  icon={<Zap size={32} className="animate-pulse-fast text-brand-gold" />}
                  items={[
                    {
                      label: "Initial Allocation",
                      value: "90,000 Tokens",
                      subtext: "With $50 Subscription"
                    },
                    {
                      label: "Withdrawal Condition",
                      value: "Buy 2nd NFT",
                      subtext: "Must purchase 2 more Spark NFT Tokens ($50 x 2 = $100). Total 90,000 Tokens."
                    },
                    {
                      label: "Benefit",
                      value: "Unlock Withdrawals",
                      highlight: true,
                      subtext: "$10 NFT Token withdrawal option enables and reward transfers automatically."
                    }
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Reward Type 2 */}
            <ScrollReveal animation="fade-left" delay={0.2}>
              <div className="glass-card-heavy rgb-border p-2 hover:bg-brand-indigo/5 transition-colors">
                <RewardCard
                  title="2. Community Building Rewards"
                  icon={<Users size={32} className="animate-bounce text-brand-blue" />}
                  items={[
                    {
                      label: "Referral Reward",
                      value: "$15.00",
                      highlight: true,
                      subtext: "Automatically transferred to wallet when someone buys Spark NFT Token under your community."
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
          </div>

          {/* Reward Type 3: Buying Rewards Tier */}
          <div className="mb-24">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <h3 className="text-4xl font-black mb-8 text-center uppercase tracking-tight">3. Spark Community Buying Rewards</h3>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="glass-card hover:bg-white/10 p-1 scale-105 border-brand-gold/50 shadow-[0_0_30px_rgba(255,184,0,0.2)] rgb-border">
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
          <div className="glass-card-heavy p-12 border-brand-purple/20 mb-24 bg-gradient-to-r from-brand-purple/10 via-black to-brand-indigo/10 relative overflow-hidden rgb-border">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-[100px] rounded-full animate-pulse" />

            <h3 className="text-4xl font-black mb-10 flex items-center gap-4 uppercase relative z-10">
              <Coins className="text-brand-gold animate-spin-slow" size={40} />
              Staking Calculation Examples
            </h3>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 font-mono text-base text-zinc-300 relative z-10">
              <div className="flex justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors">
                <span>$0.875 x 6 Tokens</span>
                <span className="text-brand-gold font-bold text-xl">$5.25</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors">
                <span>$0.875 x 36 Tokens</span>
                <span className="text-brand-gold font-bold text-xl">$31.50</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors">
                <span>$1.3125 x 216 Tokens</span>
                <span className="text-brand-gold font-bold text-xl">$283.50</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors">
                <span>$1.3125 x 1,296 Tokens</span>
                <span className="text-brand-gold font-bold text-xl">$1,701.00</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors">
                <span>$1.75 x 7,776 Tokens</span>
                <span className="text-brand-gold font-bold text-xl">$13,608.00</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-3 hover:bg-white/5 px-2 transition-colors scale-105 origin-left">
                <span className="text-brand-purple font-bold">$2.625 x 46,656 Tokens</span>
                <span className="text-green-400 font-black text-2xl text-glow">$122,472.00</span>
              </div>
            </div>
          </div>

          {/* Reward Type 4: Extra Staking Rewards */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-purple/5 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h3 className="text-5xl font-black uppercase"><span className="text-brand-gold">Extra</span> Community Rewards</h3>
                <p className="text-zinc-500 text-xl mt-2 font-bold tracking-widest uppercase">Eligible for Spark NFT Token Staking Community Only</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { count: "6", reward: "$2.40", label: "1st Extra Reward" },
                  { count: "36", reward: "$10.80", label: "2nd Extra Reward" },
                  { count: "216", reward: "$54.00", label: "3rd Extra Reward" },
                  { count: "1,296", reward: "$259.20", label: "4th Extra Reward" },
                  { count: "7,776", reward: "$1,555.20", label: "5th Extra Reward" },
                  { count: "46,656", reward: "$6,998.40", label: "6th Extra Reward" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-black/60 border-double border-4 border-transparent p-8 rounded-[2rem] flex flex-col items-center text-center hover:bg-brand-purple/20 bg-origin-border transition-all shadow-xl group rgb-border"
                  >
                    <div className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">{item.count}</div>
                    <div className="text-xs uppercase text-zinc-500 tracking-widest mb-6 font-bold">NFT Tokens Purchased</div>
                    <div className="text-3xl font-black text-brand-gold mb-4 text-glow-gold">{item.reward}</div>
                    <div className="text-xs text-black font-bold bg-brand-purple px-4 py-2 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(138,43,226,0.5)]">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal animation="fade-up" className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white">Future <span className="gradient-text">Plans</span></h2>
            <p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">The roadmap to global adoption and technological dominance.</p>
          </ScrollReveal>

          <div className="space-y-0">
            <ScrollReveal animation="slide-left" delay={0.1}>
              <div className="transform hover:scale-[1.02] transition-transform duration-500 rgb-border p-[2px]">
                <FuturePlanCard
                  step="Step 1"
                  title="Community Building"
                  description="Building a robust foundation through global networking and community engagement events."
                  image="/images/community-building.png"
                  imageFit="cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={0.2}>
              <div className="transform hover:scale-[1.02] transition-transform duration-500 rgb-border p-[2px]">
                <FuturePlanCard
                  step="Step 2"
                  title="Market Hub"
                  description="Launching the Spark Online Market Hub - the best place to sell and promote quality products."
                  image="/images/market-hub.png"
                  isReversed={true}
                  imageFit="contain"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={0.3}>
              <div className="transform hover:scale-[1.02] transition-transform duration-500 rgb-border p-[2px]">
                <FuturePlanCard
                  step="Step 3"
                  title="Gaming Hub"
                  description="Release of Spark Online Gaming Hub - a next-gen competitive ecosystem."
                  image="/images/gaming-hub.jpg"
                  imageFit="cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={0.4}>
              <div className="transform hover:scale-[1.02] transition-transform duration-500 rgb-border p-[2px]">
                <FuturePlanCard
                  step="Step 4"
                  title="Spark Exchange"
                  description="Full centralized and decentralized exchange capabilities for seamless trading."
                  image="/images/spark-exchange.jpg"
                  isReversed={true}
                  imageFit="cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI/Blockchain Bottom Visual */}
      {/* AI/Blockchain Bottom Visual - REPLACED with AI Gaming Hub */}
      <section className="relative py-24 bg-black overflow-hidden flex justify-center">
        <ScrollReveal animation="zoom-in" delay={0.2} className="relative w-full max-w-6xl h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(138,43,226,0.2)] rgb-border p-1">
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
      <section className="py-20 px-6 bg-linear-to-b from-black to-zinc-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
              <Gem size={12} /> Member Perks
            </div>
            <h2 className="text-4xl font-black mb-4">User <span className="text-white">Benefits</span></h2>
            <p className="text-zinc-500">Everything you need to succeed in the digital economy.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Exclusive Access", desc: "Early entry to all Spark ecosystem launches and presales." },
              { title: "Passive Income", desc: "Earn daily rewards through our verified staking pools." },
              { title: "Global Networking", desc: "Connect with entrepreneurs and investors worldwide." },
              { title: "Governance", desc: "Voting rights in the Spark DAO for future developments." }
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
                <div className="bg-white/5 border-double border-4 border-transparent p-6 rounded-2xl hover:bg-white/10 bg-origin-border transition-colors text-center group h-full rgb-border">
                  <div className="w-12 h-12 bg-linear-to-br from-brand-purple to-brand-indigo rounded-xl mx-auto mb-4 flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_30px_rgba(138,43,226,0.2)]">
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

      <Footer />
    </div>
  );
}
