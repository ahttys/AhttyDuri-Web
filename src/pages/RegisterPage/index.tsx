import React from "react";
import { Register } from "components";
import axios from "axios";

const RegisterPage = () => {
  const onSubmit = (userData: any) => {
    // "http://15.165.241.123/api/auth/join",
    console.log(userData);
  };
  return <Register onSubmit={onSubmit} />;
};

export default RegisterPage;
