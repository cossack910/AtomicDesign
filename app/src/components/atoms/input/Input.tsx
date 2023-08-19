import React from "react";
import styled from "styled-components";

interface InputProps {
  placefoldertext: string;
}

export const Input: React.FC<InputProps> = ({ placefoldertext }) => {
  return <SInput type="text" placeholder={placefoldertext}></SInput>;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
