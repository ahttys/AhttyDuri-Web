import styled, { css } from "styled-components";
import { palette } from "styled-tools";

const outlineStyles = css`
  &:focus {
    outline: none;
    border: 2px solid ${palette("primary")};
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
    ${palette("grayscale", 0)};
  }
  &:hover {
    background-color: ${palette("grayscale", 1)};
  }
`;
