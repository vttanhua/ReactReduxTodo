import { call, put, takeEvery, takeLatest, select} from 'redux-saga/effects'
import {  	LOGIN_USER, LOGOUT_USER } from '../constants/user'
import * as userService from '../services/userService'
import * as notificationActions from '../actions/notification'
import * as userActions from '../actions/user'
import Notification from '../BusinessObjects/Notification'
import {loginSucceeded} from '../reducers/user'

function* loginUser(action){
	try{
		const userLoginResult = yield call(userService.authenticateUser, action.payload);
		var jwt = false;
		if(userLoginResult.getIsOk())
			jwt = userLoginResult.getAuthorizationBearer();
		if(jwt){
			var credentials = {jwt: jwt, username: action.payload.username};
			yield put(userActions.logInSucceeded(credentials));
		}
		else{
			var credentials = {jwt: null, username: action.payload.username, message: userLoginResult.getErrorMessage()};
			yield put(userActions.logInFailed(credentials));
		}

		let logInSucceeded = yield select(loginSucceeded); 
		var notification = null;
		if(logInSucceeded)
			notification = Notification.successNotification("User login succeeded with username: " +action.payload.username);
		else
			notification = Notification.errorNotification("User login failed with username: " +action.payload.username);
		yield put(notificationActions.addNotification(notification) );
	}
	catch(e){

	}
}

function* logoutUser(action){
	try{
		console.log("logoutUser from redux-saga!");

	}
	catch(e){

	}
}


function* userSaga(){
	yield takeLatest(LOGIN_USER, loginUser);
 	yield takeEvery(LOGOUT_USER, logoutUser);

}



export default userSaga;