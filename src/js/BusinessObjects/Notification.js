import { ERROR_NOTIFICATION, SUCCESS_NOTIFICATION  }  from "../constants/notification";

class Notification{

	constructor(message, messageType){
		this.created = new Date();
		this.messageType = messageType;
		this.message = message;
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