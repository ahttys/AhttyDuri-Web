import styled from "styled-components";
import firstSection from "../../../assets/img/firstSection.jpg";

import { Header } from "components";

// interface IText {
//   color: "primary" | "white";
// }
interface IContnet {
  direction: "row" | "column";
}
interface IColor {
  color: "primary" | "white" | "black";
}

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
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.palette.primary};
  }
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    h5 {
      font-size: 8px;
    }
  }
`;

export const Content = styled.div<IContnet>`
  //width: 1200px;
  padding: 0 320px; // 미디어 쿼리 패딩조절
  // margin-top: -200px;
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0px;
`;

export const SubInfo = styled.p<IColor>`
  opacity: 0.9;
  margin-top: 20px;
  color: ${(props) =>
    props.color === "white"
      ? props.theme.palette.white
      : props.color === "primary"
      ? props.theme.palette.primary
      : props.theme.palette.text};
  font-size: 1rem;
`;

export const Line = styled.div`
  width: 72px;
  height: 2px;
  background-color: ${(props) => props.theme.palette.primary};
  margin-right: 20px;
`;
export const SecondSection = styled.div`
  background-color: ${(props) => props.theme.palette.grayscale[1]};
  display: flex;
  flex-direction: row;
  h5 {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.palette.primary};
  }
  h4 {
    margin-top: 10px;
    font-size: 1.5rem;
    color: ${(props) => props.theme.palette.text};
  }
`;

export const Half = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SecondImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondSectionImage = styled.img`
  max-width: 100%;
  width: 600px;
`;
