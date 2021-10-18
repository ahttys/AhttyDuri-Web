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
  //box-sizing: border-box;
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
  &:-webkit-autofill {
    // 자동완성 시 색변경 방지
    box-shadow: 0 0 0px 1000px #ffffff inset;
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
  }
`;
