import React, { createContext, useState } from "react";

interface UserProviderProps {
  children: React.ReactNode;
}

interface setUserInfoInterface {
  isAdmin: boolean | null;
}

interface UserContextType {
  userInfo: setUserInfoInterface;
  setUserInfo: React.Dispatch<React.SetStateAction<setUserInfoInterface>>;
}

export const UserContext = createContext<UserContextType>({
  userInfo: { isAdmin: null },
  setUserInfo: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<setUserInfoInterface>({
    isAdmin: null,
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
