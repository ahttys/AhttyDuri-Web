import * as S from "./style";
import { RegisterForm } from "components";
import { IRegister } from "../../../types/user";

interface Props {
  onSubmit: (props: IRegister) => void;
}

const Register = ({ onSubmit }: Props) => {
  return (
    <S.RegisterBackground>
      <RegisterForm onSubmit={onSubmit} />
    </S.RegisterBackground>
  );
};

export default Register;
