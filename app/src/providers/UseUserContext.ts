import { useContext } from "react";
import { UserContext } from "./UserProvider";

/**
 * ユーザーコンテキストを取得する共通関数
 */
export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContextなし");
  }

  return context;
};
