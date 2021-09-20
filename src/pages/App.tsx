import { ThemeProvider } from "styled-components";
import theme from "../common/style/themes/default";
import GlobalStyles from "../common/style/GlobalStyle";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute, ProtectedRoute, AuthRoute } from "routes";
import {
  LandingPage,
  LoginPage,
  RegisterPage,
  TestPage,
  KaKaoLogin,
} from "pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={LandingPage} />
          <AuthRoute exact path="/login" component={LoginPage} />
          <AuthRoute exact path="/register" component={RegisterPage} />
          <ProtectedRoute exact path="/test" component={TestPage} />
          <AuthRoute
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
