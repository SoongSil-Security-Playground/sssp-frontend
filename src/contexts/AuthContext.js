import React, { createContext, useContext, useState, useEffect } from 'react';
import { logoutUser, checkAdmin } from '../services/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
    const [token, setToken] = useState(null);

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        console.log(newToken)
        setIsLoggedIn(true);
        console.log('login')
    };

    const logout = async () => {
        try {
            const storedToken = localStorage.getItem('token');
            await logoutUser(storedToken);
        } catch (error) {
            console.error('Logout failed:', error.message);
        } finally {
            localStorage.removeItem('token');
            setToken(null);
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsLoggedIn(true);

            (async () => {
                try {
                    const adminStatus = await checkAdmin(storedToken);
                    setIsAdmin(adminStatus?.is_admin || false);
                } catch (error) {
                    console.error('Failed to verify admin status:', error.message);
                    setIsAdmin(false);
                }
            })();
        }
    }, []);
    
    return (
        <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};