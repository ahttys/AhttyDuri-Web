import styled from "styled-components";
import { palette } from "styled-tools";
export const MapContainer = styled.div`
  width: 100%;
  height: 70vh;
  width: 40%;
  border-radius: 5px;
  border: 2px solid ${palette("secondary")}; ;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
`;
// style={{
//     width: "100vw",
//     height: "100vh",
//   }}
