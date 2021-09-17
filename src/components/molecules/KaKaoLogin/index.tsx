import { useEffect } from "react";
import * as S from "./style";
import axios from "axios";

const KaKaoLogin = () => {
  let authorizationCode = new URL(window.location.href).searchParams.get(
    "code"
  );

  //   axios.get("http://api.com", {params});

  //   // http://api.com?search[keyword]=안녕

  useEffect(() => {
    const getToken = async () => {
      let response = await axios.get(
        `https://honest-vampirebat-14.loca.lt/auth/login/kakao?code=${authorizationCode}`
      );
      console.log(response);
    };
    getToken();
  }, [authorizationCode]);

  console.log(authorizationCode);

  return <S.StyledLoading />;
};

export default KaKaoLogin;
