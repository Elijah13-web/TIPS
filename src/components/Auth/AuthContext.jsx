import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    // check localStorage on load
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, showLogoutModal, setShowLogoutModal }}>
      {children}
    </AuthContext.Provider>
  );
};



