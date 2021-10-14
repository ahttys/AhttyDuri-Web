import LoginForm from "./";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Organisms/LoginForm",
  component: [LoginForm],
};

export const Default = () => (
  <LoginForm onSubmit={(data) => console.log(data)} />
);
