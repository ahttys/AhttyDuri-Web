import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import theme from "../src/common/style/themes/default";
import GlobalStyles from "../src/common/style/GlobalStyle";
//import StoryRouter from "storybook-react-router";

// storybook에 theme를 불러와 실행 시켜주기
addDecorator(withThemesProvider([theme]), ThemeProvider);
//addDecorator(StoryRouter());

// 모든 스토리에 스타일을 적용하기 위한 글로벌 decorator
addDecorator((story) => (
  <>
    <GlobalStyles /> {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
