import React, { forwardRef } from "react";
import * as S from "./style";

interface Props {
  type?: string;
  placeholder?: string;
}
const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, placeholder, ...props }: Props, ref) => (
    <S.Input type={type} placeholder={placeholder} ref={ref} {...props} />
  )
);

export default Input;
