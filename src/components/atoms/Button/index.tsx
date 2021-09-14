import React from "react";
import * as S from "./style";

interface Props extends S.ButtonStyleProps {
  children: React.ReactNode;
  color: "primary" | "secondary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, color, onClick, ...props }: Props) => {
  return (
    <S.Button color={color} {...props} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
