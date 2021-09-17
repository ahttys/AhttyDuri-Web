import styled from "styled-components";

export const RegisterBackground = styled.div`
  background-color: ${(props) => props.theme.palette.grayscale[1]};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
