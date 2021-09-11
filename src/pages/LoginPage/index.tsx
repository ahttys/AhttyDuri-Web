import React from "react";
import { useDispatch } from "react-redux";
import { Login } from "components";
import { loginUser } from "../../modules/user";
import { IUser } from "../../types/user";
import axios from "axios";

const LoginPage = () => {
  //  const dispatch = useDispatch();

  const onSubmit = async (userData: IUser) => {
    console.log(userData);
    // dispatch(loginUser(userData));

    const response = await axios.post(
      "http://15.165.241.123/api/auth/login",
      userData
    );
    console.log(response);
  };

  return <Login onSubmit={onSubmit} />;
};

export default LoginPage;
