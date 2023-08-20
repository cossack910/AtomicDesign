import React from "react";
import { Header } from "../atoms/layout/Header";

interface HaederOnlyProps {
  children: React.ReactNode;
}

export const HaederOnly: React.FC<HaederOnlyProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HaederOnly;
