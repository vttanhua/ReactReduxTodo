import { LOGIN_USER, LOGOUT_USER }  from "../constants/user";
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState =Immutable( {
	userId: -1,
	loginTime: ""
});

const userReducer = (state = initialState, action) => {
	switch (action.type){
		case LOGIN_USER:{
			console.log("Login user!!");
			return state;
		}
		case LOGOUT_USER:{
			return  state;
		}
		default:
			return state;
	}
}

export default userReducer;