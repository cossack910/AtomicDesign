import React, { memo } from "react";
import styled from "styled-components";
// import { useUserContext } from "../../../providers/UseUserContext";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

interface UserIconWithNameProps {
  image: string;
  name: string;
}

export const UserIconWithName: React.FC<UserIconWithNameProps> = memo(
  ({ image, name }) => {
    console.log("rendering  UserIconWithName");
    // const { userInfo } = useUserContext();
    const userInfo = useRecoilValue(userState);
    const isAdmin = userInfo ? userInfo.isAdmin : false;
    return (
      <SContainer>
        <SImg height={160} width={160} src={image} alt="プロフィール" />
        <SName>{name}</SName>
        {isAdmin && <SEdit>編集</SEdit>}
      </SContainer>
    );
  }
);

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decortion: underline;
  color: #aaa;
  cursor: pointer;
`;

export default UserIconWithName;
