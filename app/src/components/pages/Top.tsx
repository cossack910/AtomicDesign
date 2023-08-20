import styled from "styled-components";
import SecondaryButton from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";

export const Top = () => {
  const navigate = useNavigate();

  const onClickAdmin = () => navigate("/users", { state: { isAdmin: true } });
  const onClickGeneral = () =>
    navigate("/users", { state: { isAdmin: false } });
  return (
    <SContainer>
      <h2>Topページ</h2>
      <SecondaryButton text="管理者ユーザー" onClick={onClickAdmin} />
      <br />
      <br />
      <SecondaryButton text="一般ユーザー" onClick={onClickGeneral} />
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

export default Top;
