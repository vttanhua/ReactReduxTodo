import { LOGIN_USER, LOGOUT_USER, LOGIN_USER_SUCCEEDED, LOGIN_USER_FAILED }  from "../constants/user";
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState =Immutable( {
	userId: -1,
	username: "",
	loginSucceeded: false,
	loginStatusMessage: "",
	loginTime: "",
	
});

const userReducer = (state = initialState, action) => {
	switch (action.type){
		case LOGIN_USER_SUCCEEDED:{
			var jwt = action.payload.jwt;
			console.log("Login user succeeded!!"+action.payload.username);
			console.log("Authorization bearer is: "+jwt);
			sessionStorage.setItem('jwt', jwt);
			return Object.assign({}, state, {username: action.payload.username, loginSucceeded: true, loginStatusMessage: ""});
		}
		case LOGIN_USER_FAILED:{
			console.log("Login user failed!!"+action.payload.username);
			var jwt = action.payload.jwt;
			sessionStorage.setItem('jwt', jwt);
			return Object.assign({}, state, {username: action.payload.username, loginSucceeded: false, loginStatusMessage: action.payload.message});
		}
		default:
			return state;
	}
}

//selectors

export function getLoggedInUser(state){
	console.log("Inside getLoggedInUser TODO fix undefined return statement!");
	return undefined;
}

export function loginSucceeded(state){
	return state.user.loginSucceeded;
}

export default userReducer;