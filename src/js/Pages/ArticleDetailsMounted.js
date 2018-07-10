import React, { Component } from "react";
import { connect } from "react-redux";

import * as articlesSelectors from "../reducers/article";


const mapStateToProps = state => {
	return { article: articlesSelectors.getSelectedArticle(state) }; 
};

class ArticleDetailsMounted extends Component{
	constructor(){
		super();
		
		console.log("Using article from props!"+this.props);
	}

	render(){
		return (
			<div>
				<h2>ArticleDetail:id is {this.props.article.id}</h2>
				<h3>{this.props.article.title}</h3>
			</div>		
		);
	}
}


const ArticleDetails = connect(mapStateToProps) (ArticleDetailsMounted);


export default ArticleDetails;