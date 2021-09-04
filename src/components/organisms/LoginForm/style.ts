import styled from "styled-components";
import { Input, Button, Label } from "components";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

export const AtthyDuriLogo = styled.img`
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
