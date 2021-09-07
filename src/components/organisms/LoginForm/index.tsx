import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./style";
import { Link } from "components";
import kakaologin from "../../../assets/img/kakaologin.svg";
import applelogin from "../../../assets/img/applelogin.svg";
import { KAKAO_AUTH_URL } from "common/constants/kako";

type LoginFormData = {
  email: string;
  password: string;
};

interface ActivationFormProps {
  onSubmit: (props: any) => void;
}

const LoginForm = ({ onSubmit }: ActivationFormProps) => {
  const { register, handleSubmit } = useForm<LoginFormData>();

  return (
    <S.LoginFormContainer>
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <S.AtthyDuriLogo />
        <S.StyledInput
          type="email"
          placeholder="이메일"
          {...register("email")}
        />
        <S.StyledInput
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        <S.LoginButton color="primary">로그인</S.LoginButton>
      </S.LoginForm>
      <S.LinkSection>
        <Link to="/register">
          <S.ColoredLabel>회원가입</S.ColoredLabel>
        </Link>
        <Link to="/">
          <S.ColoredLabel>비밀번호 변경</S.ColoredLabel>
        </Link>
      </S.LinkSection>

      <S.SocialLoginSection>
        <S.SocialInfoLabel>SNS계정으로 간편 회원가입</S.SocialInfoLabel>
        <S.ButtonWrapper>
          <Link href={KAKAO_AUTH_URL}>
            <S.SocialLoginButton src={kakaologin} />
          </Link>
          <S.SocialLoginButton src={applelogin} />
        </S.ButtonWrapper>
      </S.SocialLoginSection>
    </S.LoginFormContainer>
  );
};

export default LoginForm;
