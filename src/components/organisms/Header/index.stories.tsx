import Header from ".";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Molecules/Header",
  component: [Header],
};

export const Default = () => (
  <Router>
    <Header />
  </Router>
);
