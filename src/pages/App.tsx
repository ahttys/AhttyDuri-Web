import { ThemeProvider } from "styled-components";
import theme from "../common/style/themes/default";
import GlobalStyles from "../common/style/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
