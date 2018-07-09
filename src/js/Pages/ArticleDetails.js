import React, { Component } from "react";


///TODO convert to component!!!!

const ArticleDetails = () => (
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


export default ArticleDetails;
