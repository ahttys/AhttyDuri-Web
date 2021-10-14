import { forwardRef } from "react";
import * as S from "./style";

interface Props {
  type?: string;
  placeholder?: string;
  onChange?: any;
}
const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, placeholder, onChange, ...props }: Props, ref) => (
    <S.Input
      type={type}
      placeholder={placeholder}
      ref={ref}
      onChange={onChange}
      {...props}
    />
  )
);

export default Input;
