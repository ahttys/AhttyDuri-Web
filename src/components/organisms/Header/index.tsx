import React from "react";
import * as S from "./style";
import { Logo } from "components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { userLogout } from "modules/user";

const Header = () => {
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector((state: RootState) => state.user);

  return (
    <S.HeaderContainer>
      <S.StyledNav>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>
        <S.StyledUl>
          <S.StyledLi>
            <S.StyledLink to="/test">
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
          <S.StyledUl>
            <S.StyledLi>
              <S.StyledButton
                color="secondary"
                onClick={() => {
                  dispatch(userLogout());
                }}
              >
                로그아웃
              </S.StyledButton>
            </S.StyledLi>
          </S.StyledUl>
        ) : (
          <S.StyledUl>
            <S.StyledLi>
              <S.StyledButton color="primary" to="/login">
                로그인
              </S.StyledButton>
            </S.StyledLi>
            <S.StyledLi>
              <S.StyledButton color="secondary" to="/register">
                회원가입
              </S.StyledButton>
            </S.StyledLi>
          </S.StyledUl>
        )}
      </S.StyledNav>
    </S.HeaderContainer>
  );
};

export default Header;
