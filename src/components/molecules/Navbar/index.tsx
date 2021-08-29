import React from "react";
import * as S from "./style";
import Logo from "../../../assets/img/Logo.png";

const Navbar = () => {
  return (
    <S.NavContainer>
      <S.StyledNav>
        <S.LogoContainer>
          <S.AtthyDuriLogo src={Logo} />
        </S.LogoContainer>

        <S.StyledUl>
          <S.StyledLi>
            <S.StyledA>코스 조회</S.StyledA>
          </S.StyledLi>
          <S.StyledLi>
            <S.StyledA>코스 등록하기</S.StyledA>
          </S.StyledLi>
          <S.StyledLi>
            <S.StyledA>제휴 문의</S.StyledA>
          </S.StyledLi>
        </S.StyledUl>

        <S.StyledUl>
          <S.StyledLi>
            <S.StyledButton color="primary">로그인</S.StyledButton>
          </S.StyledLi>
          <S.StyledLi>
            <S.StyledButton color="secondary">회원가입</S.StyledButton>
          </S.StyledLi>
        </S.StyledUl>
      </S.StyledNav>
    </S.NavContainer>
  );
};

export default Navbar;
