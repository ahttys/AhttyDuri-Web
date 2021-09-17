import React from "react";
import * as S from "./style";

interface Props extends S.ButtonStyleProps {
  children: React.ReactNode;
  color: "primary" | "secondary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: string;
}

const Button = ({ children, color, onClick, to, ...props }: Props) => {
  if (to) {
    return (
      <S.StyledLink to={to}>
        <S.Button color={color} {...props}>
          {children}
        </S.Button>
      </S.StyledLink>
    );
  } else {
    return (
      <S.Button color={color} {...props} onClick={onClick}>
        {children}
      </S.Button>
    );
  }
};

export default Button;
