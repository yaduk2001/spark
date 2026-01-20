"use client";

import { useState, useEffect } from "react";
import { fetchAllUsers, toggleUserStatus, deleteUser } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { Loader2, Search, Trash2, Ban, CheckCircle, Shield } from "lucide-react";
import ConfirmModal from "@/components/ui/ConfirmModal";

export default function AdminUsersPage() {
    const { user } = useAuth();
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    // Modal State
    const [modalConfig, setModalConfig] = useState<{
        isOpen: boolean;
        title: string;
        message: string;
        type: "danger" | "warning" | "info";
        confirmText?: string;
        onConfirm: () => void;
    }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info",
        confirmText: "Confirm",
        onConfirm: () => { }
    });

    const loadUsers = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;
            const data = await fetchAllUsers(token);
            setUsers(data);
        } catch (err) {
            console.error("Failed to load users", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleToggleStatus = (userId: string, currentStatus: boolean) => {
        setModalConfig({
            isOpen: true,
            title: currentStatus ? "Ban User" : "Unban User",
            message: `Are you sure you want to ${currentStatus ? "ban" : "activate"} this user? ${currentStatus ? "They will no longer be able to log in." : "They will regain access to their account."}`,
            type: currentStatus ? "danger" : "warning",
            onConfirm: async () => {
                setActionLoading(userId);
                try {
                    const token = localStorage.getItem('token');
                    if (token) {
                        await toggleUserStatus(token, userId);
                        await loadUsers();
                    }
                } catch (err) {
                    alert("Failed to update status");
                } finally {
                    setActionLoading(null);
                }
            }
        });
    };

    const handleDelete = (userId: string) => {
        setModalConfig({
            isOpen: true,
            title: "Delete User Permanently",
            message: "This action cannot be undone. All user data, including wallet association and history, will be permanently erased.",
            type: "danger",
            confirmText: "Delete User",
            onConfirm: async () => {
                setActionLoading(userId);
                try {
                    const token = localStorage.getItem('token');
                    if (token) {
                        await deleteUser(token, userId);
                        await loadUsers();
                    }
                } catch (err) {
                    alert("Failed to delete user");
                } finally {
                    setActionLoading(null);
                }
            }
        });
    };

    const isOnline = (lastActive: string) => {
        if (!lastActive) return false;
        const diff = new Date().getTime() - new Date(lastActive).getTime();
        return diff < 5 * 60 * 1000; // Active in last 5 mins
    };

    const filteredUsers = users.filter(u =>
        u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="flex h-screen items-center justify-center text-brand-purple"><Loader2 className="animate-spin" size={32} /></div>;

    return (
        <div className="space-y-8">
            <ConfirmModal
                isOpen={modalConfig.isOpen}
                onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))}
                onConfirm={modalConfig.onConfirm}
                title={modalConfig.title}
                message={modalConfig.message}
                type={modalConfig.type}
                confirmText={modalConfig.confirmText}
            />

            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black mb-2">Users Directory</h1>
                    <p className="text-zinc-500 font-medium">Manage all platform members</p>
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 outline-none focus:border-brand-purple/50 text-sm w-64"
                        />
                    </div>
                </div>
            </header>

            <div className="glass-card overflow-hidden border-white/5">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-zinc-400 uppercase font-bold text-xs">
                        <tr>
                            <th className="p-4">User</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Joined</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {filteredUsers.map((u) => (
                            <tr key={u._id} className="hover:bg-white/5 transition-colors group">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${isOnline(u.lastActive) ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-700'}`} title={isOnline(u.lastActive) ? "Online" : "Offline"} />
                                        <div>
                                            <p className="font-bold text-white">{u.fullName}</p>
                                            <p className="text-zinc-500 font-mono text-xs">@{u.username}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    {u.isLoginEnabled ?
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-500 text-xs font-bold">Active</span> :
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-red-500/10 text-red-500 text-xs font-bold">Banned</span>
                                    }
                                </td>
                                <td className="p-4">
                                    {u.role === 'admin' ?
                                        <span className="flex items-center gap-1 text-brand-gold font-bold"><Shield size={14} /> Admin</span> :
                                        <span className="text-zinc-500">Member</span>
                                    }
                                </td>
                                <td className="p-4 text-zinc-500">
                                    {new Date(u.createdAt).toLocaleDateString()}
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {actionLoading === u._id ? (
                                            <Loader2 className="animate-spin text-zinc-500" size={16} />
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => handleToggleStatus(u._id, u.isLoginEnabled)}
                                                    className={`p-2 rounded-lg transition-colors ${u.isLoginEnabled ? 'hover:bg-red-500/20 text-zinc-400 hover:text-red-400' : 'hover:bg-emerald-500/20 text-red-500 hover:text-emerald-400'}`}
                                                    title={u.isLoginEnabled ? "Ban User" : "Unban User"}
                                                >
                                                    {u.isLoginEnabled ? <Ban size={16} /> : <CheckCircle size={16} />}
                                                </button>
                                                {u.role !== 'admin' && (
                                                    <button
                                                        onClick={() => handleDelete(u._id)}
                                                        className="p-2 rounded-lg hover:bg-red-500/20 text-zinc-400 hover:text-red-500 transition-colors"
                                                        title="Delete User"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredUsers.length === 0 && (
                    <div className="p-8 text-center text-zinc-500 font-medium">No users found.</div>
                )}
            </div>
        </div>
    );
}
