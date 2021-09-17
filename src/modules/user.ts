import axios from "axios";
import { setCookie, getCookie, removeCookie } from "utils/cookies";

const LOGIN = "user_LOGIN" as const;
const LOGIN_SUCCESS = "user_LOGIN_SUCCESS" as const;
const LOGIN_ERROR = "user_LOGIN_ERROR" as const;
const LOGOUT = "user_LOGOUT" as const;
const LOGIN_CHECK = "user_LOGIN_CHECK";

type UserAction = ReturnType<typeof userLogin>;

type UserState = {};

export const userLogin = (loginData: any) => async (dispatch: any) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const response = await axios.post(
      "http://15.165.241.123/api/auth/login",
      loginData
    );
    console.log(response);
    setCookie("userToken", response.data.token, {
      path: "/",
      maxAge: 60 * 60 * 9, // 9시간
    });
    dispatch({ type: LOGIN_SUCCESS, token: response.data.token });
  } catch (e: any) {
    dispatch({ type: LOGIN_ERROR, error: e });
    console.log(e.message);
  }
};

export const userCheck = () => (dispatch: any) => {
  const token = getCookie("userToken");
  if (token) {
    dispatch({
      type: LOGIN_CHECK,
    });
  }
};

export const userLogout = () => (dispatch: any) => {
  removeCookie("userToken");
  console.log("remove");
  dispatch({
    type: LOGOUT,
  });
};
const initialState: any = {
  // cookie에 값있으면 loginSuccess 및 user정보 갖고있기
  loginSuccess: false,
  user: null,
  error: null,
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return { ...state };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
      };
    case LOGIN_ERROR:
      return { ...state, error: action.error };
    case LOGOUT:
      return { ...state, loginSuccess: false };
    case LOGIN_CHECK:
      return { ...state, loginSuccess: true };
    default:
      return state;
  }
};

export default user;
