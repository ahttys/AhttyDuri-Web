import * as S from "./style";
import { Link } from "components";
import kakaologin from "../../../assets/img/kakaologin.svg";
import applelogin from "../../../assets/img/applelogin.svg";
import { useForm } from "react-hook-form";
import { IRegister } from "../../../types/user";

type RegisterFormData = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

interface IProps {
  onSubmit: (props: IRegister) => void;
}

const RegisterForm = ({ onSubmit }: IProps) => {
  const { register, handleSubmit } = useForm<RegisterFormData>();

  return (
    <S.RegisterFormContainer>
      <S.LogoWrapper>
        <S.AtthyDuriLogo />
      </S.LogoWrapper>
      <S.SocialInfoLabel>SNS계정으로 간편 회원가입</S.SocialInfoLabel>
      <S.SocialLoginSection>
        <Link
          href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`}
        >
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
