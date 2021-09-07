import React from "react";
import * as S from "./style";
import { Logo } from "components";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.StyledNav>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>

        <S.StyledUl>
          <S.StyledLi>
            <S.StyledLink>
              <S.StyledLabel>코스 조회</S.StyledLabel>
            </S.StyledLink>
          </S.StyledLi>
          <S.StyledLi>
            <S.StyledLink>
              <S.StyledLabel>코스 등록하기</S.StyledLabel>
            </S.StyledLink>
          </S.StyledLi>
          <S.StyledLi>
            <S.StyledLink>
              <S.StyledLabel>제휴 문의</S.StyledLabel>
            </S.StyledLink>
          </S.StyledLi>
        </S.StyledUl>

        <S.StyledUl>
          <S.StyledLi>
            <S.StyledLink to="/login">
              <S.StyledButton color="primary">로그인</S.StyledButton>
            </S.StyledLink>
          </S.StyledLi>
          <S.StyledLi>
            <S.StyledLink to="/register">
              <S.StyledButton color="secondary">회원가입</S.StyledButton>
            </S.StyledLink>
          </S.StyledLi>
        </S.StyledUl>
      </S.StyledNav>
    </S.HeaderContainer>
  );
};

export default Header;
