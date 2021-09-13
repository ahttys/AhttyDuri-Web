import React from "react";
import * as S from "./style";
import { Logo } from "components";
import { useSelector } from "react-redux";
import { RootState } from "modules";

const Header = () => {
  const { loginSuccess } = useSelector((state: RootState) => state.user);

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
        {loginSuccess ? (
          "로그인됨"
        ) : (
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
        )}
      </S.StyledNav>
    </S.HeaderContainer>
  );
};

export default Header;
