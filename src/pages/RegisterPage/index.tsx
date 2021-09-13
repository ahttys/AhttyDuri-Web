import React from "react";
import { Register } from "components";
import axios from "axios";
import { IRegister } from "../../types/user";

const RegisterPage = () => {
  const onSubmit = async (registerData: IRegister) => {
    console.log(registerData);
    if (registerData.password !== registerData.confirmPassword) {
      alert("비밀번호와 비밀번호 확인은 같아야합니다.");
      return;
    }
    let joinInfo = {
      email: registerData.email,
      name: registerData.name,
      password: registerData.password,
    };

    const response = await axios.post(
      "http://15.165.241.123/api/auth/join",
      joinInfo
    );
    // if(response.status === 200)
    console.log(response);
  };

  return <Register onSubmit={onSubmit} />;
};

export default RegisterPage;
