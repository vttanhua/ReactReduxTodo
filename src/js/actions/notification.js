import { ADD_NOTIFICATION }  from "../constants/notification";

export const addNotification = notification => ({type: ADD_NOTIFICATION, payload: notification});