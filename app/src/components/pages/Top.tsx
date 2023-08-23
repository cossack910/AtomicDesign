import styled from "styled-components";
import SecondaryButton from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
// import { useUserContext } from "../../providers/UseUserContext";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const navigate = useNavigate();
  //const { setUserInfo } = useUserContext();
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };

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
