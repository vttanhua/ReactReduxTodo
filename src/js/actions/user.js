import { LOGIN_USER, LOGOUT_USER, LOGIN_USER_SUCCEEDED, LOGIN_USER_FAILED }  from "../constants/user";

export const logIn= credentials => ({type: LOGIN_USER, payload: credentials});
export const logOut = user =>({type: LOGOUT_USER, payload: user});
export const logInSucceeded = credentials => ({type: LOGIN_USER_SUCCEEDED, payload: credentials});
export const logInFailed = credentials => ({type: LOGIN_USER_FAILED, payload: credentials});