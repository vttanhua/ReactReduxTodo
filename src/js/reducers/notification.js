import { ADD_NOTIFICATION, SUCCESS_NOTIFICATION, ERROR_NOTIFICATION}  from "../constants/notification";
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const initialState =Immutable( {
	notifications: []
});

const notificationReducer = (state = initialState, action) => {
	switch (action.type){
		case ADD_NOTIFICATION:{
			console.log("Notification ("+action.payload.messageType+": "+action.payload.message+")");
			return Immutable({ notifications: [action.payload,...state.notifications]});
		}
		default:
			return state;
	}
}

export default notificationReducer;

export function getNotifications(state){
	return [...state.notifications.notifications.slice(0,2)]
}


