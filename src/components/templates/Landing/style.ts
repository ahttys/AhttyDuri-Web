import styled from "styled-components";
import firstSection from "../../../assets/img/firstSection.png";
import { Header } from "components";

// interface IText {
//   color: "primary" | "white";
// }

export const FixedHeader = styled(Header)`
  z-index: 9;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
`;

export const FullpageWrapper = styled.div`
  position: relative;
  h3 {
    font-weight: 700;
    font-size: 64px;
  }
  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 32px;
    }
  }
`;

export const FirstSection = styled.div`
  background-image: url(${firstSection});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  h3 {
    color: ${(props) => props.theme.palette.white};
  }
  h5 {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.palette.primary};
  }
`;

export const Content = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 0 320px;
  margin-top: -200px;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0px;
`;

export const SubInfo = styled.p`
  opacity: 0.9;
  margin-top: 20px;
  color: ${(props) => props.theme.palette.white};
  font-size: 1rem;
`;

export const Line = styled.div`
  width: 72px;
  height: 2px;
  background-color: ${(props) => props.theme.palette.primary};
  margin-right: 20px;
`;
