import React from "react";
import * as S from "./style";
import { LoginForm } from "components";
import { IUser } from "../../../types/user";

interface IProps {
  onSubmit: (props: IUser) => void;
}

const Login = ({ onSubmit }: IProps) => {
  return (
    <S.LoginBackground>
      <LoginForm onSubmit={onSubmit}></LoginForm>
    </S.LoginBackground>
  );
};

export default Login;
