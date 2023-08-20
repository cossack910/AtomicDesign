import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: #000000;
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

export default BaseButton;
