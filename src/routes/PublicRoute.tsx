import { Route } from "react-router-dom";
import { Header } from "components";

interface RouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PublicRoute = ({ exact, path, component: Component }: RouteProps) => (
  // 로그인 안해도 되는 페이지들
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
);

export default PublicRoute;
