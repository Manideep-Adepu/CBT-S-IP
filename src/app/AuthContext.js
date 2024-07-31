"use client"
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  const isLoggedIn = () => loggedIn;

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn, loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
