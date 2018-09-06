import { ERROR_NOTIFICATION, SUCCESS_NOTIFICATION  }  from "../constants/notification";

class Notification{

	constructor(message, messageType){
		this.created = new Date();
		this.messageType = messageType;
		this.message = message;
	}

	static successNotification(message){
		var p = new Notification(message,SUCCESS_NOTIFICATION);
		return p;
	}
	static errorNotification(message){
		var p = new Notification(message,ERROR_NOTIFICATION);
		return p;
	}
	getMessage(){
		return this.message;
	}

	getMessageType(){
		return this.messageType;
	}

}


module.exports = Notification;


module.exports.default = Notification;