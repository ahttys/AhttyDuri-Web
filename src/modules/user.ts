import axios from "axios";

const LOGIN = "user_LOGIN" as const;
const LOGIN_SUCCESS = "user_LOGIN_SUCCESS" as const;
const LOGIN_ERROR = "user_LOGIN_ERROR" as const;

// const REGISTER = "user_REGISTER" as const;
// const REGISTER_SUCCESS = "user_REGISTER_SUCCESS";
// const REGISTER_ERROR = "user_REGISTER_ERROR";

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
    dispatch({ type: LOGIN_SUCCESS, token: response.data.token });
  } catch (e: any) {
    dispatch({ type: LOGIN_ERROR, error: e });
    console.log(e.message);
  }
};

// export const userRegister = (registerData: any) => async (dispatch: any) => {
//   dispatch({
//     type: REGISTER,
//   });
//   try {
//     const response = await axios.post(
//       "http://15.165.241.123/api/auth/join",
//       registerData
//     );
//     dispatch({ type: "REGISTER_SUCCESS" });
//     // if (response.status === 200) {
//     //   alert("회원가입이 완료되었습니다.!");
//     //   // 라우팅
//     // }
//   } catch (e: any) {
//     dispatch({ type: "REGISTER_ERROR", error: e });
//   }
// };

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
    // case REGISTER:
    //   return { ...state };
    // case REGISTER_SUCCESS:
    //   return { ...state };
    default:
      return state;
  }
};

export default user;
