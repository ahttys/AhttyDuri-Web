import styled from "styled-components";
import { Input, Button, Logo, Label } from "components";

export const LoginFormContainer = styled.div`
  width: 300px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AtthyDuriLogo = styled(Logo)`
  width: 200px;
  height: 50px;
  margin-bottom: 30px;
`;

export const StyledInput = styled(Input)`
  height: 50px;
`;

export const LoginButton = styled(Button)`
  margin: 30px 0;
  width: 100%;
  height: 50px;
`;

export const LinkSection = styled.section`
  display: flex;
  justify-content: center;
`;
export const ColoredLabel = styled(Label)`
  color: ${(props) => props.theme.palette.text};
  font-weight: bolder;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.palette.grayscale[0]};
  }
`;

export const SocialLoginScetion = styled.section`
  border-top: 1px solid rgb(219, 219, 219);
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;
export const SocialLoginButton = styled.img`
  margin: 20px 10px;
  height: 50px;
  cursor: pointer;
`;
