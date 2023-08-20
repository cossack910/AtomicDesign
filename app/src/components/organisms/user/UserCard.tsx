import React from "react";
import styled from "styled-components";
import Card from "../../atoms/card/card";
import UserIconWithName from "../../molecule/user/UserIconWithName";

interface UserCardProps {
  name: string;
  image: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
  website: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  name,
  image,
  email,
  phone,
  company,
  website,
}) => {
  return (
    <Card>
      <UserIconWithName name={name} image={image} />
      <SDL>
        <dt>メール</dt>
        <dd>{email}</dd>
        <dt>TEL</dt>
        <dd>{phone}</dd>
        <dt>会社名</dt>
        <dd>{company.name}</dd>
        <dt>ウェブサイト</dt>
        <dd>{website}</dd>
      </SDL>
    </Card>
  );
};

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 32px;
    overflow-wrap: break-word;
  }
`;

export default UserCard;
