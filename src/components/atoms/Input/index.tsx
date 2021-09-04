import React from "react";
import * as S from "./style";

interface Props {
  placeholder?: string;
}
const Input = ({ placeholder, ...props }: Props) => {
  return <S.Input placeholder={placeholder} {...props} />;
};

export default Input;
