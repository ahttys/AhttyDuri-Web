import React from "react";
import * as S from "./style";
import { RegisterForm } from "components";

interface Props {
  onSubmit: (props: any) => void;
}

const Register = ({ onSubmit }: Props) => {
  return (
    <S.RegisterBackground>
      <RegisterForm onSubmit={onSubmit} />
    </S.RegisterBackground>
  );
};

export default Register;
