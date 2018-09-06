import { LOGIN_USER, LOGOUT_USER }  from "../constants/user";

export const logIn= credentials => ({type: LOGIN_USER, payload: credentials});
export const logOut = user =>({type: LOGOUT_USER, payload: user});