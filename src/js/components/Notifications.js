import React, { Component } from "react";

function Notifications(props){
	console.log(props);
	var message = "Default message";
	if(props && props.notification && props.notification.message)
	 message = props.notification.message
	return(
		<div className="col-md-4 offset-md-1">
		<h2>Latest notifications</h2>
			 <p>{message} </p>
		</div>
		);
	}

export default Notifications;

