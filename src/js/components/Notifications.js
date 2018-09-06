import React, { Component } from "react";

function Notifications(props){
	console.log(props);
	var message = "Default message";
	if(props && props.notifications && props.notifications.length > 0){
		var topNotification = props.notifications[0];
	 	message = topNotification.message;
	 }
	return(
		<div className="col-md-4 offset-md-1">
		<h2>Latest notifications</h2>
			 <p>{message} </p>
		</div>
		);
	}

export default Notifications;

