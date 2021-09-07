import React from "react";
import * as S from "./style";
import { Link } from "components";
import kakaologin from "../../../assets/img/kakaologin.svg";
import applelogin from "../../../assets/img/applelogin.svg";
import { KAKAO_AUTH_URL } from "common/constants/kako";
import { useForm } from "react-hook-form";

type RegisterFormData = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

interface ActivationFormProps {
  onSubmit: (props: any) => void;
}

const RegisterForm = ({ onSubmit }: ActivationFormProps) => {
  const { register, handleSubmit } = useForm<RegisterFormData>();

  return (
    <S.RegisterFormContainer>
      <S.LogoWrapper>
        <S.AtthyDuriLogo />
      </S.LogoWrapper>
      <S.SocialInfoLabel>SNS계정으로 간편 회원가입</S.SocialInfoLabel>
      <S.SocialLoginSection>
        <Link href={KAKAO_AUTH_URL}>
          <S.SocialLoginButton src={kakaologin} />
        </Link>
        <S.SocialLoginButton src={applelogin} />
      </S.SocialLoginSection>
      <S.RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <S.InfoLabel>이메일</S.InfoLabel>
        <S.StyledInput
          type="email"
          placeholder="이메일"
          {...register("email")}
        />
        <S.InfoLabel>이름</S.InfoLabel>
        <S.StyledInput placeholder="이름" {...register("name")} />
        <S.InfoLabel>비밀번호</S.InfoLabel>
        <S.StyledInput
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        <S.InfoLabel>비밀번호 확인</S.InfoLabel>
        <S.StyledInput
          type="password"
          placeholder="비밀번호 확인"
          {...register("confirmPassword")}
        />
        <S.RegisterButton color="primary">회원가입</S.RegisterButton>
      </S.RegisterForm>
    </S.RegisterFormContainer>
  );
};

export default RegisterForm;
