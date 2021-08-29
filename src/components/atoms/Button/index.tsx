import React from "react";
import * as S from "./style";

interface Props extends S.ButtonStyleProps {
  children: React.ReactNode;
}

const Button = ({ children, color, ...props }: Props) => {
  return (
    <S.Button color={color} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
