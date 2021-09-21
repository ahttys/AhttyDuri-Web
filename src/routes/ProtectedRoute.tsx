import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { userCheck } from "modules/user";
import { Header } from "components";

interface RouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const ProtectedRoute = ({ exact, path, component: Component }: RouteProps) => {
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(userCheck());
  }, [dispatch]);

  return loginSuccess ? ( // 로그인이 돼있을 때만 접근할 수 있는 페이지
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          <>
            <Header />
            <Component />
          </>
        );
      }}
    />
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
