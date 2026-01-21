"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Zap, Trophy, Users, Award, Gem, Coins, Network, ShieldCheck, Globe, Star } from "lucide-react";
import SubscriptionPriceCard from "@/components/SubscriptionPriceCard";
import RewardCard from "@/components/RewardCard";
import MembershipCounter from "@/components/MembershipCounter";
import FuturePlanCard from "@/components/FuturePlanCard";
import Footer from "@/components/Footer";
import WhitepaperSection from "@/components/WhitepaperSection";
import CelebrationOverlay from '@/components/CelebrationOverlay';
import SparkCoin from "@/components/SparkCoin";

// CORPORATE FADE ANIMATION
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="bg-rich-pattern min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#BF953F]/30 relative">
      <CelebrationOverlay />

      {/* CIRCUIT PATTERN BACKGROUND (PDF Style) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BF953F' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#BF953F]/30 bg-[#BF953F]/10 text-xs font-bold text-[#BF953F] mb-8 uppercase tracking-[0.2em] backdrop-blur-md">
              <span className="w-2 h-2 bg-[#BF953F] rounded-full animate-pulse" />
              WE DON'T LAUNCH. WE ARRIVE.
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-none mb-6 tracking-tight text-white uppercase">
              SPAARK <span className="text-metallic block mt-2">EXCHANGE</span>
              <span className="block text-2xl lg:text-3xl mt-2 text-zinc-500 font-bold tracking-widest">REVOLUTION</span>
            </h1>

            <p className="text-xl text-zinc-300 font-medium mb-10 max-w-xl leading-relaxed border-l-4 border-[#BF953F] pl-6">
              We are building the future of decentralized finance and gaming. <span className="text-white font-bold">Join the revolution</span> that empowers communities and rewards participation.
            </p>

            <div className="mb-12">
              <MembershipCounter />
            </div>

            <motion.div variants={fadeInUp} transition={{ duration: 1.0 }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/register" className="btn-gold text-center">
                Join Circle
              </Link>
              <Link href="/about" className="btn-glass text-center">
                Mission
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center relative"
          >
            <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative animate-float-subtle">
              <SparkCoin />
              {/* Shadow element separate from rotation to stay on the "floor" or behind */}
              <div className="absolute inset-0 z-[-1] rounded-full drop-shadow-[0_20px_60px_rgba(191,149,63,0.3)]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are & Mission Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Connectivity Card */}
          <div className="glass-card-premium p-10 min-h-[500px] flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1 border border-[#BF953F]/30 rounded text-xs font-bold text-[#BF953F] uppercase tracking-widest">
                AI POWERED NETWORK
              </span>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#BF953F]/10 flex items-center justify-center text-[#BF953F] mb-6 border border-[#BF953F]/30">
                <Network size={32} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Global <span className="text-metallic">Connectivity</span></h3>
              <p className="text-zinc-300 font-medium leading-relaxed">
                Connecting markets, gamers, and investors in a unified blockchain ecosystem.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-8">WHO WE ARE</h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed border-l-2 border-zinc-800 pl-6">
              Spaark Global Tech is a global technology and digital innovation company headquartered in Dubai and Australia, strategically positioned to operate across International Markets. We focus on developing scalable digital platforms across Financial Technology, Online Commerce, Blockchain, Infrastructure, and Digital Entertainment. Our organization is built on strong governance, long-term strategic planning, and sustainable innovation. By combining advanced technology with structured business models, Spaark Global Tech aims to create a connected digital ecosystem that supports growth for both the company and its global user community.
            </p>

            <div className="space-y-4">
              {[
                { title: "Vision", desc: "Our Vision is to become a globally recognized technology enterprise that connects Digital, Finance, Online Commerce, and Blockchain Innovation while providing structured opportunities for customers and partners to build sustainable, High-Growth Online Businesses within the Spaark Ecosystem.", icon: Zap },
                { title: "Mission", desc: "Our Mission is to develop secure, scalable, and future-ready digital platforms that empower individuals and businesses to participate in the Global Digital Economy through transparent and innovative online business models.", icon: Globe },
                { title: "Values", desc: "Transparency, Community, and Innovation.", icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 flex gap-6 hover:bg-white/5 transition-colors">
                  <div className="mt-1 w-12 h-12 rounded-xl bg-[#BF953F]/10 flex items-center justify-center text-[#BF953F] shrink-0 border border-[#BF953F]/20">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-2">{item.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-20 px-6 relative z-10" id="subscription">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-2">ACCESS THE FUTURE</h2>
            <p className="text-[#BF953F] font-bold uppercase tracking-widest text-sm">Choose your entry point</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="glass-card p-2 transform hover:scale-[1.02] transition-transform">
              <SubscriptionPriceCard
                title="Spaark Starter"
                price="$3.5"
                features={["Entry level access", "Community participation", "Basic reward eligibility", "SPK Token Purchase Access"]}
                delay={0.1}
              />
            </div>
            <div className="glass-card-premium p-2 transform hover:scale-[1.02] transition-transform">
              <SubscriptionPriceCard
                title="Global Pro"
                price="$50"
                isPopular={true}
                features={[
                  "9000 Spaark SPK Tokens included",
                  "Withdrawal option enabled (w/ 2nd purchase)",
                  "Full Staking Rewards",
                  "Community Building Bonuses",
                  "Priority Support"
                ]}
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Spark */}
      <section className="py-20 px-6 bg-zinc-900/20 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight text-center text-white mb-16">WHY CHOOSE SPAARK GLOBAL?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Decentralized Power", desc: "Full control of your assets with our non-custodial architecture.", icon: Network },
              { title: "Instant Rewards", desc: "Real-time settlement for all community and staking rewards.", icon: Zap },
              { title: "Global Community", desc: "Join a network of thousands of like-minded innovators.", icon: Users }
            ].map((card, i) => (
              <div key={i} className="glass-card p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
                <div className="w-20 h-20 rounded-full bg-[#BF953F]/10 flex items-center justify-center text-[#BF953F] mb-6 border border-[#BF953F]/30">
                  <card.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase italic mb-4">{card.title}</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Core Section */}
      <section className="py-20 px-6 z-10 relative" id="rewards">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#BF953F] font-bold tracking-[0.3em] uppercase mb-2 block text-sm">Valid for Spaark Staking Community</span>
            <h2 className="text-5xl font-black uppercase text-white">8 TYPES OF REWARDS</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-2 hover:bg-[#BF953F]/5 transition-colors">
              <RewardCard
                title="1. Start-Up Community Rewards"
                icon={<Zap size={28} className="text-[#BF953F]" />}
                items={[
                  { label: "Initial Allocation", value: "9000 SPK Tokens", subtext: "With $50 Subscription" },
                  { label: "Withdrawal Condition", value: "Buy 2nd SPK", subtext: "Must purchase 2 more Spaark SPK Tokens ($50 x 2 = $100). Total 9000 SPK Tokens." },
                  { label: "Benefit", value: "Unlock Withdrawals", highlight: true, subtext: "$10 SPK Token withdrawal option enables and reward transfers automatically." }
                ]}
              />
            </div>
            <div className="glass-card p-2 hover:bg-[#BF953F]/5 transition-colors">
              <RewardCard
                title="2. Community Building Rewards"
                icon={<Users size={28} className="text-[#BF953F]" />}
                items={[
                  { label: "Referral Reward", value: "$15.00", highlight: true, subtext: "Automatically transferred to wallet when someone buys Spaark SPK Token under your community." },
                  { label: "Staking Access", value: "Enabled", subtext: "Unlocks community staking potential." }
                ]}
              />
            </div>
            <div className="glass-card p-2 hover:bg-[#BF953F]/5 transition-colors">
              <RewardCard
                title="4. Withdrawal Income"
                icon={<Coins size={28} className="text-[#BF953F]" />}
                items={[
                  { label: "Global Dividend", value: "5% Distribution", highlight: true, subtext: "Distributed among active community members from total ecosystem withdrawals." },
                  { label: "Frequency", value: "Instant", subtext: "Settled in real-time as withdrawals occur across the network." }
                ]}
              />
            </div>
            <div className="glass-card p-2 hover:bg-[#BF953F]/5 transition-colors">
              <RewardCard
                title="5. 1st Level Growth Partners"
                icon={<Network size={28} className="text-[#BF953F]" />}
                items={[
                  { label: "Direct Bonus", value: "$2.50 / Partner", subtext: "Monthly retention bonus for maintaining active 1st level growth partners." },
                  { label: "Performance Pool", value: "Eligible", highlight: true, subtext: "Contributes toward your rank achiever status." }
                ]}
              />
            </div>
            <div className="glass-card p-2 hover:bg-[#BF953F]/5 transition-colors">
              <RewardCard
                title="6. 2nd Level Growth Partners"
                icon={<Users size={28} className="text-[#BF953F]" />}
                items={[
                  { label: "Override Bonus", value: "10% Reward", highlight: true, subtext: "Earn based on the combined volume and activity of your secondary level partners." },
                  { label: "Network Depth", value: "36 Partners", subtext: "Maximized when your second level reaches full capacity." }
                ]}
              />
            </div>
            <div className="glass-card p-2 hover:bg-[#BF953F]/5 transition-colors">
              <RewardCard
                title="7. 3rd Level Growth Partners"
                icon={<Globe size={28} className="text-[#BF953F]" />}
                items={[
                  { label: "Global Pool Entry", value: "Entry Granted", highlight: true, subtext: "Special access to the 3rd level global revenue share pool." },
                  { label: "Threshold", value: "216 Partners", subtext: "Requires a fully established 3rd level team of growth partners." }
                ]}
              />
            </div>
          </div>

          {/* Buying Rewards Tier */}
          <div className="mb-20">
            <h3 className="text-3xl font-black mb-8 uppercase text-center text-white">3. SPAARK COMMUNITY BUYING REWARDS</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-1">
                <RewardCard title="Tiers 1-2" items={[{ label: "Level 1", value: "$0.875" }, { label: "Level 2", value: "$0.875" }]} />
              </div>
              <div className="glass-card p-1">
                <RewardCard title="Tiers 3-4" items={[{ label: "Level 3", value: "$1.3125" }, { label: "Level 4", value: "$1.3125" }]} />
              </div>
              <div className="glass-card-premium p-1">
                <RewardCard title="Tiers 5-6" items={[{ label: "Level 5", value: "$1.75" }, { label: "Level 6", value: "$2.685", highlight: true }]} />
              </div>
            </div>
          </div>

          {/* Staking Calculations */}
          <div className="glass-card p-8 lg:p-12 mb-20">
            <div className="flex items-center gap-4 mb-8">
              <Coins className="text-[#BF953F]" size={32} />
              <h3 className="text-3xl font-black uppercase text-white">STAKING CALCULATION EXAMPLES</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 font-mono text-zinc-300">
              {[
                { l: "$0.875 x 6 Team Growth Partners", v: "$5.25" },
                { l: "$0.875 x 36 Team Growth Partners", v: "$31.50" },
                { l: "$1.3125 x 216 Team Growth Partners", v: "$283.50" },
                { l: "$1.3125 x 1,296 Team Growth Partners", v: "$1,701.00" },
                { l: "$1.75 x 7,776 Team Growth Partners", v: "$13,608.00" },
                { l: "$2.625 x 46,656 Team Growth Partners", v: "$122,472.00", highlight: true },
              ].map((r, i) => (
                <div key={i} className={`flex justify-between border-b border-white/10 py-3 ${r.highlight ? 'text-[#BF953F] font-bold text-lg' : ''}`}>
                  <span>{r.l}</span>
                  <span>{r.v}</span>
                </div>
              ))}
              <div className="col-span-full mt-6 p-6 rounded-xl bg-[#BF953F]/20 border border-[#BF953F]/40 flex justify-between items-center">
                <span className="text-white font-black uppercase tracking-widest text-xl">Total team building earning</span>
                <span className="text-[#BF953F] font-black text-4xl">$138,101.25</span>
              </div>
            </div>
          </div>

          {/* Rank Achievers */}
          <div className="mb-20">
            <h3 className="text-4xl font-black uppercase text-center text-white mb-2">8. RANK ACHIEVERS REWARDS</h3>
            <p className="text-center text-zinc-500 font-bold tracking-widest uppercase mb-12">Eligible for Spaark Staking Community Only</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { reward: "$2.40", label: "1st Rank Achievement Reward", subtext: "1st Direct 6 enrollment Supervisor" },
                { reward: "$10.80", label: "2nd Rank Achievement Reward", subtext: "2nd level 36 team growth partners Assistant Manager" },
                { reward: "$54.00", label: "3rd Rank Achievement Reward", subtext: "3rd 216 team growth partners Manager" },
                { reward: "$259.20 + Phone", label: "4th Rank Achievement Reward", subtext: "1296 Team Growth Partners Senior Manager" },
                { reward: "$1,555.20 + Bike", label: "5th Rank Achievement Reward", subtext: "7776 Team Growth Partners Regional Manager" },
                { reward: "$6,998.40 + Car", label: "6th Rank Achievement Reward", subtext: "46656 Team Growth Partners Director" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-8 flex flex-col items-center text-center">
                  <div className="text-xl font-bold text-white mb-6 min-h-[4rem] flex items-center">{item.subtext}</div>
                  <div className="text-4xl font-black text-[#BF953F] mb-6">{item.reward}</div>
                  <div className="mt-auto px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider text-zinc-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-20 px-6 bg-zinc-900/40 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase text-center text-white mb-4">FUTURE PLANS</h2>
          <p className="text-center text-zinc-400 mb-16">The roadmap to global adoption and technological dominance.</p>

          <div className="space-y-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card hover:border-[#BF953F]/50 transition-colors p-[2px]">
                <FuturePlanCard step="2028" title="Spaark Coin" description="Launching of Spaark Coin, a proprietary digital asset designed to support ecosystem Transactions, Rewards, and Platform Utility." image="/images/IMG_20260121_204808.jpg" imageFit="cover" />
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card hover:border-[#BF953F]/50 transition-colors p-[2px]">
                <FuturePlanCard step="2030" title="Online Market Hub" description="Introduction of a Global Online Market Hub enabling Digital Commerce, Services, and Entrepreneurial participation through Spaark-powered platform." image="/images/IMG_20260121_210255 (1).jpg" isReversed={true} imageFit="contain" />
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card hover:border-[#BF953F]/50 transition-colors p-[2px]">
                <FuturePlanCard step="2031" title="Online Games" description="Expansion into Online Gaming Platforms, integrating Digital Economies and user engagement within the broader Spaark Ecosystem." image="/images/IMG_20260121_204726.jpg" imageFit="cover" />
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card hover:border-[#BF953F]/50 transition-colors p-[2px]">
                <FuturePlanCard step="2032" title="Spaark Exchange" description="Launch of Spaark Exchange, a Secure and Scalable Digital Exchange Platform, designed to support Digital Asset Trading and Ecosystem Liquidity." image="/images/IMG_20260121_204833.jpg" isReversed={true} imageFit="cover" />
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card hover:border-[#BF953F]/50 transition-colors p-[2px]">
                <FuturePlanCard step="2035" title="Spaark Blockchain" description="Deployment of Spaark Blockchain, a proprietary blockchain infrastructure focused on security, scalability, and enterprise-grade performance." image="/images/IMG_20260121_204921.jpg" imageFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Benefits */}
      <section className="py-20 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BF953F]/10 text-[#BF953F] text-xs font-bold uppercase tracking-widest mb-4">
            <Gem size={12} /> Member Perks
          </div>
          <h2 className="text-4xl font-black mb-4 text-white uppercase">USER BENEFITS</h2>
          <p className="text-zinc-500 mb-16">Everything you need to succeed in the digital economy.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Exclusive Access", desc: "Early entry to all Spaark ecosystem launches and presales." },
              { title: "Passive Income", desc: "Earn daily rewards through our verified staking pools." },
              { title: "Global Networking", desc: "Connect with entrepreneurs and investors worldwide." },
              { title: "Governance", desc: "Voting rights in the Spaark DAO for future developments." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-[#BF953F]/10 rounded-xl mx-auto mb-4 flex items-center justify-center text-[#BF953F]">
                  <Star size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhitepaperSection />
      <Footer />
    </div>
  );
}
