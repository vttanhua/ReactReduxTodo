import React, { Component } from "react";
import { connect } from "react-redux";

import * as articlesSelectors from "../reducers/article";
import { updateArticle } from "../actions/article";

const mapStateToProps = state => {
	return { article: articlesSelectors.getSelectedArticle(state) }; 
};

const mapDispatchToProps = dispatch => {
	return {
		updateArticle: article => dispatch(updateArticle(article))
	};
};

class ArticleDetailsMounted extends Component{
	constructor(props){
		super(props);
		console.log("Using article from props!"+this.props);
		
		this.isEditingToggleOnClick = this.isEditingToggleOnClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitleOnChange = this.handleTitleOnChange.bind(this);

		console.log("article title in constructor "+this.props.article.title);
		this.state = {
			isEditing: false,
			title: this.props.article.title,
			articleId: this.props.article.id,
		};
		console.log("article title in constructor 2:"+this.state.title);
	}


	handleTitleOnChange(event){
		this.setState({ title: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		const { title,articleId } = this.state;
		var article = {title: title, id:articleId}
		this.props.updateArticle(article);
	}

	isEditingToggleOnClick(event){
		event.preventDefault();
		this.setState({'isEditing': !this.state.isEditing});
	}

	render(){
		let title;
		let formSubmit;
		if(!this.state.isEditing ) {
			title = <h3>{this.props.article.title}</h3>
			formSubmit = "";
		}else{
			title = <input type="text"
					className="form-control"
					id="title" 
					value={this.state.title}
					onChange={this.handleTitleOnChange}

			/>
			formSubmit = <button type="submit" className="btn btn-success btn-lg">SAVE</button>
		}
		return (
			<form  onSubmit={this.handleSubmit} >
				<div>
					<h2>ArticleDetail:id is {this.props.article.id}</h2>
					{title}
					<p><a href="#" onClick={this.isEditingToggleOnClick}>Toggle:{this.state.isEditing}</a></p>	
				</div>
				{formSubmit}
			</form>	
				
		);
	}
}


const ArticleDetails = connect(mapStateToProps,mapDispatchToProps) (ArticleDetailsMounted);


export default ArticleDetails;