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

// return  condition ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) :
// (<Redirect  to="/page/login"  />);

const PrivateRoute = ({ exact, path, component: Component }: RouteProps) => {
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(userCheck());
  }, [dispatch]);

  return loginSuccess ? (
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

export default PrivateRoute;