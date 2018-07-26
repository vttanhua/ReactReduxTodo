import React, { Component } from "react";
import List from "../components/List";
import Form from "../components/Form";
import Notifications from "../components/Notifications";
import * as notificationSelectors from "../reducers/notification";
import { connect } from "react-redux";
const mapStateToProps = state => {
	return { notifications: notificationSelectors.getNotifications(state) };  //load state using selectors!
};

class ArticleListingComponent extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
		<div>	
		<div className="row mt-5">
			<Notifications notification={this.props.notifications.pop()}/>
		</div>
		<div className="row mt-5">
			<div className="col-md-4 offset-md-1">
			<h2>Articles</h2>
				<List />
			</div>
			<div className="col-md-4 offset-md-1">
				<h2>Add a new article</h2>
				<Form/>
			</div>	
		</div>	
		</div>	
		)
	}
}

const ArticleListing = connect(mapStateToProps) (ArticleListingComponent);
export default ArticleListing;


/*
const ArticleListing = () => (
	<div className="row mt-5">
		<div className="col-md-4 offset-md-1">
		<h2>Articles</h2>
			<List />
		</div>
		<div className="col-md-4 offset-md-1">
			<h2>Add a new article</h2>
			<Form/>
		</div>	
	</div>		
	);


*/
