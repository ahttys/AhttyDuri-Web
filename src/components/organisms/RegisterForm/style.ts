import styled from "styled-components";
import { Logo, Input, Button, Label } from "components";

export const RegisterFormContainer = styled.div`
  width: 300px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AtthyDuriLogo = styled(Logo)`
  width: 200px;
  height: 50px;
  margin-bottom: 30px;
`;

export const SocialLoginSection = styled.section`
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  justify-content: center;
`;

export const SocialLoginButton = styled.img`
  margin: 20px 10px;
  height: 50px;
  cursor: pointer;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const SocialInfoLabel = styled(Label)`
  color: ${(props) => props.theme.palette.grayscale[0]};
  font-size: 11px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
`;

export const InfoLabel = styled(Label)`
  color: ${(props) => props.theme.palette.text};
  font-weight: bolder;
  margin: 10px 0;
`;

export const StyledInput = styled(Input)`
  height: 50px;
`;

export const RegisterButton = styled(Button)`
  margin: 30px 0;
  width: 100%;
  height: 50px;
`;
