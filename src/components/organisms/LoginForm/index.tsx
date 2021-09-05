import React from "react";
import * as S from "./style";
import { Link } from "components";
import kakaologin from "../../../assets/img/kakaologin.svg";
import applelogin from "../../../assets/img/applelogin.svg";

const LoginForm = () => {
  return (
    <S.LoginFormContainer>
      <S.LoginForm>
        <S.AtthyDuriLogo />
        <S.StyledInput placeholder="이메일" />
        <S.StyledInput placeholder="비밀번호" />
        <S.LoginButton color="primary">로그인</S.LoginButton>
      </S.LoginForm>
      <S.LinkSection>
        <Link to="/">
          <S.ColoredLabel>회원가입</S.ColoredLabel>
        </Link>
        <Link to="/">
          <S.ColoredLabel>비밀번호 변경</S.ColoredLabel>
        </Link>
      </S.LinkSection>
      <S.SocialLoginScetion>
        <Link>
          <S.SocialLoginButton src={kakaologin} />
        </Link>
        <S.SocialLoginButton src={applelogin} />
      </S.SocialLoginScetion>
    </S.LoginFormContainer>
  );
};

export default LoginForm;
