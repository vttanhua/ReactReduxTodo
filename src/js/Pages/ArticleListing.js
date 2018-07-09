import React, { Component } from "react";
import List from "../components/List";
import Form from "../components/Form";


class ArticleListing extends Component{
	constructor(){
		super();
		console.log("Using refactored ArticleListing component!");
	}

	render(){
		return (<div className="row mt-5">
			<div className="col-md-4 offset-md-1">
			<h2>Articles</h2>
				<List />
			</div>
			<div className="col-md-4 offset-md-1">
				<h2>Add a new article</h2>
				<Form/>
			</div>	
		</div>		
		)
	}
}


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
