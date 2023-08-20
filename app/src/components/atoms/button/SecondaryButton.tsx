import React from "react";
import styled from "styled-components";

interface SecondaryButtonButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SecondaryButton: React.FC<SecondaryButtonButtonProps> = ({
  text,
  onClick,
}) => {
  return <SButton onClick={onClick}>{text}</SButton>;
};

const SButton = styled.button`
  background-color: #f0e68c;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 20px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default SecondaryButton;
