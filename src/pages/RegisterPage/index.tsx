import { useCallback } from "react";
import { useHistory } from "react-router";
import { Register } from "components";
import axios from "axios";
import { IRegister } from "../../types/user";

const RegisterPage = () => {
  const history = useHistory();
  const onSubmit = useCallback(
    async (registerData: IRegister) => {
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
        "https://sehwagod.xyz/api/auth/join",
        joinInfo
      );
      console.log(response);

      if (response.status === 200) {
        alert("회원가입이 완료됐습니다.");
        history.push("/login");
      }
    },
    [history]
  );

  return <Register onSubmit={onSubmit} />;
};

export default RegisterPage;
