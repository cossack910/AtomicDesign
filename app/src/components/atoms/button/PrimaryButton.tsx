import styled from "styled-components";
import { BaseButton } from "./BaseButton";

interface PrimaryButtonProps {
  text: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
  return <SButton>{text}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #008080;
`;

export default PrimaryButton;
