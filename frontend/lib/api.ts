export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Authentication Endpoints
export const registerUser = async (data: any) => {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Registration failed');
    return result;
};

export const checkAvailability = async (field: 'username' | 'email' | 'phoneNumber', value: string) => {
    try {
        const res = await fetch(`${API_URL}/auth/check`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ field, value }),
        });
        if (!res.ok) return { available: true }; // Assume available if offline
        return await res.json();
    } catch (error) {
        return { available: true };
    }
};

export const loginUser = async (data: any) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Login failed');
    return result;
};

export const fetchProfile = async (token: string) => {
    const res = await fetch(`${API_URL}/auth/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Failed to fetch profile');
    return result;
};

export const updateProfile = async (token: string, data: any) => {
    const res = await fetch(`${API_URL}/auth/profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Failed to update profile');
    return result;
};

export const deleteAccount = async (token: string) => {
    const res = await fetch(`${API_URL}/auth/account`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Failed to delete account');
    return result;
};

// Ecosystem Endpoints
export const fetchMintStatus = async () => {
    try {
        const res = await fetch(`${API_URL}/mint-status`);
        if (!res.ok) throw new Error('Failed to fetch');
        return await res.json();
    } catch (error) {
        console.warn("API unreachable, using mock data for Mint Status");
        return {
            totalMinted: 8500,
            remaining: 1500,
            price: 50
        };
    }
};

export const fetchPresaleStats = async () => {
    try {
        const res = await fetch(`${API_URL}/presale-stats`);
        if (!res.ok) throw new Error('Failed to fetch');
        return await res.json();
    } catch (error) {
        console.warn("API unreachable, using mock data for Presale Stats");
        return {
            hardCap: 1500000,
            currentRaised: 450000, // Mock value
            participants: 1250,
            exchangeRate: 1250,
            tokensSold: 562500000
        };
    }
};

export const fetchDashboardData = async (userId: string) => {
    try {
        const res = await fetch(`${API_URL}/user/dashboard/${userId}`);
        if (!res.ok) throw new Error('Failed to fetch');
        return await res.json();
    } catch (error) {
        console.warn("API unreachable, using mock data for Dashboard");
        return {
            balance: 15000,
            rewards: 320,
            rank: 'Gold',
            teamSize: 12
        };
    }
};

export const mineCoins = async (token: string) => {
    const res = await fetch(`${API_URL}/mining/mine`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Mining failed');
    return result;
};

// Admin API
export const fetchAllUsers = async (token: string) => {
    const res = await fetch(`${API_URL}/admin/users`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Failed to fetch users');
    return result;
};

export const toggleUserStatus = async (token: string, userId: string) => {
    const res = await fetch(`${API_URL}/admin/users/${userId}/status`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` }
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Failed to update status');
    return result;
};

export const deleteUser = async (token: string, userId: string) => {
    const res = await fetch(`${API_URL}/admin/users/${userId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Failed to delete user');
    return result;
};
