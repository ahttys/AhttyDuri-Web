import { Header } from "../../../components";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../../../modules/index";
import Thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
);

export default {
  title: "Molecules/Header",
  component: [Header],
};

export const Default = () => (
  <Provider store={store}>
    <Header />
  </Provider>
);
