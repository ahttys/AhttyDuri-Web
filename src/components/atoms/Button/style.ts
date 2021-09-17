import styled, { css } from "styled-components";
import { palette } from "styled-tools";
import { Link } from "react-router-dom";

export interface ButtonStyleProps {
  color: "primary" | "secondary";
}

const primaryStyle = css`
  background-color: ${palette("primary")};
  color: ${palette("secondary")};
  &:hover {
    background-color: ${palette("primaryscale", 0)};
  }
`;

const secondaryStyle = css`
  background-color: ${palette("secondary")};
  color: ${palette("white")};
  &:hover {
    background-color: ${palette("secondaryscale", 0)};
  }
`;

const ButtonStyle = css<ButtonStyleProps>`
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: inherit;
  margin: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: transparent;
  font-weight: 700;

  ${({ color }) => {
    switch (color) {
      case "primary":
        return primaryStyle;
      case "secondary":
        return secondaryStyle;
    }
  }}
`;

export const Button = styled.button`
  ${ButtonStyle}
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
`;
