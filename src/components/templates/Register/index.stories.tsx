// import Register from ".";
import { Register } from "../../../components";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Templates/Register",
  component: [Register],
};

export const Default = () => (
  <Register onSubmit={(data) => console.log(data)} />
);
