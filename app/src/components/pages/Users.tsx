import React, { memo } from "react";
import styled from "styled-components";
import SearchInput from "../molecule/SearchInput";
import users from "./TestData";
import UserCard from "../organisms/user/UserCard";
import SecondaryButton from "../atoms/button/SecondaryButton";
import { useUserContext } from "../../providers/UseUserContext";

export const Users: React.FC = memo(() => {
  const { userInfo, setUserInfo } = useUserContext();
  const onClickSwicth = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  console.log("rendering Users");
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton text="権限切り替え" onClick={onClickSwicth} />
      <SUSreArea>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            image={user.image}
            email={user.email}
            phone={user.phone}
            company={user.company.name}
            website={user.website}
          />
        ))}
      </SUSreArea>
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUSreArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export default Users;
