import React from "react";
import * as S from "./style";

interface Props {
  children: React.ReactNode;
  to?: string;
  href?: string;
}

const Link = ({ children, href, to, ...props }: Props) => {
  if (to) {
    return (
      <S.StyledLink to={to} {...props}>
        {children}
      </S.StyledLink>
    );
  } else if (href) {
    return <S.StyledAnchor href={href}>{children}</S.StyledAnchor>;
  } else {
    return <S.StyledAnchor>{children}</S.StyledAnchor>;
  }
};

export default Link;
