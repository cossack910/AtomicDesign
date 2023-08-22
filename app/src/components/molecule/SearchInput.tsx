import React, { memo } from "react";
import PrimaryButton from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { styled } from "styled-components";

export const SearchInput: React.FC = memo(() => {
  console.log("redering  SearchInput");
  return (
    <SContainer>
      <Input placefoldertext="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton text="検索" />
      </SButtonWrapper>
    </SContainer>
  );
});

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default SearchInput;
