export interface IUser {
  email: string;
  password: string;
}

export interface IRegister extends IUser {
  name: string;
  confirmPassword: string;
}
