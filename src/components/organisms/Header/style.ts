import styled from "styled-components";
import { Button, Label, Link } from "components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 0px 0px;
  padding-top: 15px;

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

export const StyledNav = styled.nav`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div``;

export const StyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledLi = styled.li`
  font-weight: 700;
  margin-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const StyledLabel = styled(Label)`
  cursor: pointer;
  margin: 10px;
  color: ${(props) => props.theme.palette.text};
  &:hover {
    color: ${(props) => props.theme.palette.grayscale[0]};
  }

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 8px;
  }
`;

export const StyledButton = styled(Button)`
  @media only screen and (max-width: 768px) {
    width: 30%;
    margin: 5px auto;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
`;
