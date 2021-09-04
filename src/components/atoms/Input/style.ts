import styled, { css } from "styled-components";

const outlineStyles = css`
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.palette.primary};
  }
`;

export const Input = styled.input`
  ${outlineStyles}
  width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(34, 36, 38, 0.15);
  &::placeholder {
    color: ${(props) => props.theme.palette.gray};
  }
`;
