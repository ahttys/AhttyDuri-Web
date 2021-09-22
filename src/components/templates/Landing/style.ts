import styled from "styled-components";
import firstSection from "../../../assets/img/firstSection.png";
import { Header } from "components";

export const FixedHeader = styled(Header)`
  z-index: 9;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
`;

export const FullpageWrapper = styled.div`
  h3 {
    font-weight: 700;
    font-size: 4em;
  }
  #fp-nav ul li a span,
  .fp-slidesNav ul li a span {
    background: red;
  }
`;

export const FirstSection = styled.div`
  background-image: url(${firstSection});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  h3 {
    color: ${(props) => props.theme.palette.white};
    margin-left: 40px;
  }
  h5 {
    font-size: 1em;
    font-weight: 700;
    color: ${(props) => props.theme.palette.primary};
    margin-left: 20px;
  }
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;
