import LoginForm from "./";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Organisms/LoginForm",
  component: [LoginForm],
};

export const Default = () => (
  <Router>
    <LoginForm onSubmit={(data) => console.log(data)} />
  </Router>
);
