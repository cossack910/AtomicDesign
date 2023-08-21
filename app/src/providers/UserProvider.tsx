import React, { createContext } from "react";

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const contextName = "aaa";
  return (
    <UserContext.Provider value={contextName}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
