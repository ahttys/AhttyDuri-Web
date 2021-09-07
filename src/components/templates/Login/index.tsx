import React from "react";
import * as S from "./style";
import { LoginForm } from "components";

interface Props {
  onSubmit: (props: any) => void;
}

const Login = ({ onSubmit }: Props) => {
  return (
    <S.LoginBackground>
      <LoginForm onSubmit={onSubmit}></LoginForm>
    </S.LoginBackground>
  );
};

export default Login;
