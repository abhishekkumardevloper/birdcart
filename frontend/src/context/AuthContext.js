import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('birdcarts_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password) => {
    // Mock login - in real app, this would call backend API
    const mockUser = {
      id: '1',
      name: 'Guest User',
      email: email,
      phone: '9999999999'
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('birdcarts_user', JSON.stringify(mockUser));
    return Promise.resolve(mockUser);
  };

  const register = (name, email, password, phone) => {
    // Mock registration
    const mockUser = {
      id: Date.now().toString(),
      name,
      email,
      phone
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('birdcarts_user', JSON.stringify(mockUser));
    return Promise.resolve(mockUser);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('birdcarts_user');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};