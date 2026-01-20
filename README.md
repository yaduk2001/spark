# 🟣 Founders Circle Ecosystem

**A Next.js 15 & Express.js Web3 Platform**

**Premium "Glassmorphism" UI** • **JWT Authentication** • **Real-time Mining (NTP Synced)** • **Multi-Level Referrals**

---

## 🏗️ System Architecture

This project uses a split-stack architecture. The **Frontend** (Next.js) handles the UI and connects to the **Backend** (Express) for data.

```mermaid
graph LR
    User((👤 User))
    subgraph Frontend [Next.js App :3000]
        UI[Glassmorphism UI]
        AuthClient[Auth Context]
        DashClient[Dashboard]
    end
    
    subgraph Backend [Express API :5000]
        API[API Routes]
        AuthServ[Auth Service]
        MineServ[Mining Service (NTP)]
        RefServ[Referral Logic]
    end
    
    DB[(🍃 MongoDB)]

    User <-->|HTTPS| UI
    UI <-->|JSON/REST| API
    API <-->|Mongoose| DB
    MineServ <-->|Sync| NTP[Atomic Clock]
```

---

## 🚀 Quick Start Guide

### 1️⃣ Backend (Server)
The engine of the application. Handles users, mining logic, and security.

```bash
cd backend
npm install
npm run dev
# Running on: http://localhost:5000
# Syncs time with pool.ntp.org on startup
```

### 2️⃣ Frontend (Client)
The visual interface. Built with React, Tailwind, and Framer Motion.

```bash
cd frontend
npm install
npm run dev
# Running on: http://localhost:3000
```

---

## ✨ Implemented Features

These features are **fully functional** and connected to the database.

| Component | Status | Details |
| :--- | :--: | :--- |
| **Authentication** | ✅ | Login, Register, Real-time Validation (Email/Phone), JWT Sessions. |
| **Referral System** | ✅ | **6-Level Income**, Direct Bonuses ($15), & Achiever Rewards. Tracks `referredBy`. |
| **Mining Station** | ✅ | **NTP-Synced**. Uses "Internet Time" to prevent cheat/drift. 10 SPARK / 24h. |
| **Dashboard** | ✅ | Live stats (Token Balance, VIP Tier), Referral Stats, Recent Income Logs. |
| **Settings** | ✅ | Update Profile, "Danger Zone" (Delete Account), View Referrer (@username). |
| **Admin Panel** | ✅ | User Management (`/admin/users`), Ban/Unban logic, Online Status. |

---

## � Referral Logic Breakdown

The system implements a robust commission structure:

1.  **Direct Bonus**: **$15** derived immediately for every direct invite.
2.  **Level Income**: Earn varying amounts from **Level 1 to Level 6** ancestors.
3.  **Achiever Rewards**: Automatic large bonuses for hitting team size milestones (e.g., 36 members at Level 2).
4.  **Transparency**: All earnings are logged in `IncomeLogs` and visible in the Dashboard.

---

## �🚧 Placeholders & Future Enhancements

These features have a **complete User Interface (UI)** but are simulating blockchain interactions.

| Feature | Status | What needs to be done? |
| :--- | :--: | :--- |
| **Wallet Hub** | 🟡 **UI Only** | A unique Wallet ID is generated in the DB, but **MetaMask** is not yet connected. |
| **Staking Yield** | 🟡 **Simulated** | The "Live Yield" number is calculated locally; needs Smart Contract integration. |
| **Minting** | 🟡 **UI Only** | The visual Mint page works, but the "Mint Now" button does not trigger a transaction. |
| **NFT Visuals** | 🟡 **Static** | NFT images are currently static assets, not loaded from IPFS metadata. |

---

## 📁 Key File Structure

### 🖥️ Frontend (`/frontend`)
*   `app/dashboard/` - Protected user routes (Overview, Referrals, Settings).
*   `app/register/` - Registration with auto-referral code detection (`?ref=CODE`).
*   `components/` - Reusable UI (Navbar, MiningButton).
*   `lib/api.ts` - Centralized API client.

### ⚙️ Backend (`/backend`)
*   `routes/auth.js` - Login, Register (w/ Referral Logic), Profile.
*   `routes/mining.js` - Mining logic using `timeProvider`.
*   `utils/timeProvider.js` - **NTP Client** to fetch real-world time.
*   `scripts/` - Maintenance scripts (`fixCodes.js`, `generateCodes.js`).
