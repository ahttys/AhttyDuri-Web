import Logo from "./";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Molecules/Logo",
  component: [Logo],
};

export const Default = () => (
  <Router>
    <Logo />
  </Router>
);
