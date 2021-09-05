import { ThemeProvider } from "styled-components";
import theme from "../common/style/themes/default";
import GlobalStyles from "../common/style/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch></Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
