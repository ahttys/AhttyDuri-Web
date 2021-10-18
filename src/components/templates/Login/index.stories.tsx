import Login from "./";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Templates/Login",
  component: [Login],
};

export const Default = () => <Login onSubmit={(data) => console.log(data)} />;
