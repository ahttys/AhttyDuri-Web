import { useEffect } from "react";
import * as S from "./style";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { useHistory } from "react-router";
import { kakaoLogin } from "modules/user";

const KaKaoLogin = () => {
  const { loginSuccess } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  let authorizationCode = new URL(window.location.href).searchParams.get(
    "code"
  );

  if (loginSuccess) {
    // 로그인 성공 시 LandingPage로
    history.push("/");
  }

  console.log("kakologin");

  useEffect(() => {
    const getToken = async () => {
      let response = await axios.get(
        `https://sehwagod.xyz/api/auth/login/kakao?code=${authorizationCode}`
      );
      console.log(response);
      if (response.data.token) {
        dispatch(kakaoLogin(response.data.token));
      }
    };
    getToken();
  }, [authorizationCode, dispatch]);

  return <S.StyledLoading />;
};

export default KaKaoLogin;
