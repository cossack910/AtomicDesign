import React, { memo } from "react";
import styled from "styled-components";
import Card from "../../atoms/card/card";
import UserIconWithName from "../../molecule/user/UserIconWithName";

interface UserCardProps {
  name: string;
  image: string;
  email: string;
  phone: string;
  company: string;
  website: string;
}

export const UserCard: React.FC<UserCardProps> = memo(
  ({ name, image, email, phone, company, website }) => {
    console.log("rendering  UserCard");
    return (
      <Card>
        <UserIconWithName name={name} image={image} />
        <SDL>
          <dt>メール</dt>
          <dd>{email}</dd>
          <dt>TEL</dt>
          <dd>{phone}</dd>
          <dt>会社名</dt>
          <dd>{company}</dd>
          <dt>ウェブサイト</dt>
          <dd>{website}</dd>
        </SDL>
      </Card>
    );
  }
);

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
