import RegisterForm from "./";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Organisms/RegisterForm",
  component: [RegisterForm],
};

export const Default = () => (
  <Router>
    <RegisterForm onSubmit={(data) => console.log(data)} />
  </Router>
);
