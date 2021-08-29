import Button from ".";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
`;

export default {
  title: "Atoms/Button",
  component: [Button],
};

export const PrimaryButton = () => (
  <Container>
    <Button color="primary">Primary</Button>
  </Container>
);

export const SecondaryButton = () => (
  <Container>
    <Button color="secondary">Secondary</Button>
  </Container>
);
