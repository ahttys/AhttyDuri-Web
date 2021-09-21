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

export const FullpageWrapper = styled.div``;

export const FirstSection = styled.div`
  background-image: url(${firstSection});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
