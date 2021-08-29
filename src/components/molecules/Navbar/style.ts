import styled from "styled-components";
import Button from "../../atoms/Button";

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 0px 0px;
`;

export const StyledNav = styled.nav`
  width: 1280px;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div``;

export const AtthyDuriLogo = styled.img`
  height: 40px;
`;

export const StyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledLi = styled.li`
  font-weight: 700;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const StyledA = styled.a`
  cursor: pointer;
  margin: 10px;
  &:hover {
    color: ${(props) => props.theme.palette.gray};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const StyledButton = styled(Button)``;
