import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

interface UserIconWithNameProps {
  image: string;
  name: string;
}

export const UserIconWithName: React.FC<UserIconWithNameProps> = ({
  image,
  name,
}) => {
  const { userInfo } = useContext(UserContext);
  const IsAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt="プロフィール" />
      <SName>{name}</SName>
      {IsAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

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
