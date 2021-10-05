import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "components";
import { RootState } from "modules";
import { userLogin } from "../../modules/user";
import { IUser } from "../../types/user";
import { useHistory } from "react-router";

const LoginPage = () => {
  const { loginSuccess, error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(error);

  if (loginSuccess) {
    // 로그인 성공 시 LandingPage로
    history.push("/");
  }

  const onSubmit = useCallback(
    (loginData: IUser) => {
      console.log("onSubmit - Login");
      console.log(loginData);
      dispatch(userLogin(loginData));

      if (error) {
        alert("로그인에 실패했습니다.");
      }
    },
    [dispatch, error]
  );

  return <Login onSubmit={onSubmit} />;
};

export default LoginPage;
