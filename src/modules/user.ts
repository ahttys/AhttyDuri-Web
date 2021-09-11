export const LOGIN_USER = "LOGIN_USER" as const;
export const REGISTER_USER = "REGISTER_USER" as const;

type UserAction = ReturnType<typeof loginUser>;

type UserState = {};

type LoginUser = {
  email: string;
  password: string;
};

export const loginUser = (userInfo: LoginUser) => ({
  type: LOGIN_USER,
  payload: userInfo,
});

const initialState: LoginUser = {
  email: "",
  password: "",
};

const user = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSucess: action.payload };
    default:
      return state;
  }
};

export default user;
