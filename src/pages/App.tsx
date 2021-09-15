import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../common/style/themes/default";
import GlobalStyles from "../common/style/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "components";
import { LandingPage, LoginPage, RegisterPage } from "pages";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { userCheck } from "modules/user";

function App() {
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(userCheck());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
