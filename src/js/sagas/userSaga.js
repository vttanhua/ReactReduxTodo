import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {  	LOGIN_USER, LOGIN_USER_SUCCEEDED,LOGIN_USER_FAILED,LOGOUT_USER } from '../constants/user'
import * as userService from '../services/userService'
import * as notificationActions from '../actions/notification'
import Notification from '../BusinessObjects/Notification'

function* loginUser(action){
	try{
		console.log("loginUser from redux-saga!"+action.payload.username);
		const userLoginResult = yield call(userService.authenticateUser,action.payload);
		console.log("Authorization bearer is: "+userLoginResult.getAuthorizationBearer());
		sessionStorage.setItem('jwt', userLoginResult.getAuthorizationBearer());
		var notification = Notification.successNotification("User login succeeded" );
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