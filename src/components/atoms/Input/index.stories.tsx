import Input from "./";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 100px;
`;

export default {
  title: "Atoms/Input",
  component: [Input],
};

export const Default = () => (
  <Container>
    <Input placeholder="placeholder" />
  </Container>
);
