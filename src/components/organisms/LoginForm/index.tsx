import React from "react";
import * as S from "./style";
import Logo from "../../../assets/img/Logo.png";

const LoginForm = () => {
  return (
    <S.LoginFormContainer>
      <S.AtthyDuriLogo src={Logo} />
      <S.StyledInput placeholder="이메일" />
      <S.StyledInput placeholder="비밀번호" />
      <S.LoginButton color="primary">로그인</S.LoginButton>
    </S.LoginFormContainer>
  );
};

export default LoginForm;
