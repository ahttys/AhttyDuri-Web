import React from "react";
import * as S from "./style";
import { Link, Logo } from "components";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.StyledNav>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>

        <S.StyledUl>
          <S.StyledLi>
            <Link>
              <S.StyledLabel>코스 조회</S.StyledLabel>
            </Link>
          </S.StyledLi>
          <S.StyledLi>
            <Link>
              <S.StyledLabel>코스 등록하기</S.StyledLabel>
            </Link>
          </S.StyledLi>
          <S.StyledLi>
            <Link>
              <S.StyledLabel>제휴 문의</S.StyledLabel>
            </Link>
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
    </S.HeaderContainer>
  );
};

export default Header;
