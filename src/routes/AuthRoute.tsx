import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { userCheck } from "modules/user";

interface RouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const AuthRoute = ({ exact, path, component: Component }: RouteProps) => {
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(userCheck());
  }, [dispatch]);

  return loginSuccess ? ( // 로그인 했을 시 접근 불가 페이지들
    <Redirect to="/" />
  ) : (
    <Route exact={exact} path={path} component={Component} />
  );
};

export default AuthRoute;
