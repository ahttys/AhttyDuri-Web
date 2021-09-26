import { Route } from "react-router-dom";
import { Header } from "components";

interface RouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PublicRoute = ({ exact, path, component: Component }: RouteProps) => {
  // 로그인 안해도 되는 페이지들

  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        path === "/" ? (
          <Component />
        ) : (
          <>
            <Header />
            <Component />
          </>
        )
      }
    />
  );
};
export default PublicRoute;
