import { LOGIN_USER, LOGOUT_USER, LOGIN_USER_SUCCEEDED, LOGIN_USER_FAILED }  from "../constants/user";
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState =Immutable( {
	userId: -1,
	loginTime: "",
	
});

const userReducer = (state = initialState, action) => {
	switch (action.type){
		case LOGIN_USER_SUCCEEDED:{
			console.log("Login user succeeded!!"+action.payload.username);
			return state;
		}
		case LOGIN_USER_FAILED:{
			console.log("Login user failed!!"+action.payload.username);
			return state;
		}
		case LOGIN_USER:{
			console.log("Logout user!!");
			return  state;
		}
		case LOGOUT_USER:{
			console.log("Logout user!!");
			return  state;
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

export default userReducer;