import { ThemeProvider } from "styled-components";
import theme from "../common/style/themes/default";
import GlobalStyles from "../common/style/GlobalStyle";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//import { KaKaoLogin } from "components";
import {
  LandingPage,
  LoginPage,
  RegisterPage,
  TestPage,
  KaKaoLogin,
} from "pages";
import { PublicRoute, PrivateRoute } from "routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={LandingPage} />
          <PublicRoute exact path="/login" component={LoginPage} />
          <PublicRoute exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/test" component={TestPage} />
          <PublicRoute
            exact
            path="/oauth/callback/kakao"
            component={KaKaoLogin}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
