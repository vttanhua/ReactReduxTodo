import { LOGIN_USER, LOGOUT_USER }  from "../constants/user";

export const loginUser = user => ({type: LOGIN_USER, payload: user});
export const logoutUser = user =>({type: LOGOUT_USER, payload: user});