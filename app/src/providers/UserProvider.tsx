import React, { createContext, useState } from "react";

interface UserProviderProps {
  children: React.ReactNode;
}

interface setUserInfoInterface {
  isAdmin: boolean;
}

interface UserContextType {
  userInfo: setUserInfoInterface;
  setUserInfo: React.Dispatch<React.SetStateAction<setUserInfoInterface>>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<setUserInfoInterface>({
    isAdmin: false,
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
