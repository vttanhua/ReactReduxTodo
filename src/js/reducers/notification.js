import { ADD_NOTIFICATION, ERROR_NOTIFICATION, SUCCESS_NOTIFICATION}  from "../constants/notification";
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState =Immutable( {
	notifications: []
});


export function getNotifications(state){
	return [{message: "My first notification!", messageType: SUCCESS_NOTIFICATION},{message: "My second notification!", messageType:SUCCESS_NOTIFICATION}]
}


