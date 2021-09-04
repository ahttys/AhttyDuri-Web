import React from "react";
import * as S from "./style";

interface Props {
  children: React.ReactNode;
}

const Label = ({ children, ...props }: Props) => {
  return <S.Label {...props}>{children}</S.Label>;
};

export default Label;
