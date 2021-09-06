import styled from "styled-components";
import { LoginForm } from "components";

export const LoginBackground = styled.div`
  background-color: ${(props) => props.theme.palette.grayscale[1]};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CenteredLoginForm = styled(LoginForm)``;
