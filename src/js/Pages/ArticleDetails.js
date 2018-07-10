import React, { Component } from "react";


class ArticleDetails extends Component{
	constructor(props){//props contains route data. Id is the article id.
		super(props);
		
		console.log("Using refactored ArticleDetails component!"+props);
	}

	render(){
		return (
			<div>
				<h2>ArticleDetail:id is {this.props.match.params.id}</h2>
			</div>		
		);
	}
}

export default ArticleDetails;
