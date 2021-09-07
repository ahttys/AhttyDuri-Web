import { ThemeProvider } from "styled-components";
import theme from "../common/style/themes/default";
import GlobalStyles from "../common/style/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "components";
import { LandingPage, LoginPage, RegisterPage } from "pages";

function App() {
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
