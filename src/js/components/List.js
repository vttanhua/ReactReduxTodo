import React, { Component } from "react";
import { connect } from "react-redux";

import * as articlesSelectors from "../reducers/article";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { selectArticle, loadArticles, deleteArticle } from "../actions/article";

const mapStateToProps = state => {
	return { articles: articlesSelectors.getArticles(state) };  //load state using selectors!
	//return { articles: state.articles };// getArticles(state)
};

const mapDispatchToProps = dispatch => {
	return {
		selectArticle: selectedId => dispatch(selectArticle(selectedId)),
		loadArticles: ()=>dispatch(loadArticles()),
		deleteArticle: selectedId => dispatch(deleteArticle(selectedId))
	};
};

class ConnectedList extends Component{
	constructor(){
		super();
		this.handleDetailsOnClick = this.handleDetailsOnClick.bind(this);
		this.handleDeleteOnClick = this.handleDeleteOnClick.bind(this);
	}

 	componentDidMount() {
 		console.log("List component componentDidMount method!");
 		this.props.loadArticles();
 	}

	handleDetailsOnClick(event) {
		//event.preventDefault();
		//console.log("Link clicked!"+event.target.id);
		var idParts = event.target.id.split("_");
		this.props.selectArticle(idParts[1]);

	}

		handleDeleteOnClick(event) {
		event.preventDefault();
		//console.log("Link clicked!"+event.target.id);
		var idParts = event.target.id.split("_");
		this.props.deleteArticle(idParts[1]);

	}

	render(){
		const articles = this.props.articles;
		return (
			<ul className="list-group list-group-flush">
		{articles.map(el => (
			<li className="list-group-item" key={el.id}>
				<table>
					<tbody><tr>
						<td>{el.title}</td>
						<td><Link id={`details_${el.id}`} onClick={this.handleDetailsOnClick} to={`/articles/articleDetails/${el.id}`} >Details</Link></td>
						<td><Link id={`delete_${el.id}`} onClick={this.handleDeleteOnClick} to={`/articles/articleDetails/${el.id}`} >Delete</Link></td>
					</tr></tbody>
				</table>
			</li> 	
		))}
	</ul>
	)

	}
}


const List = connect(mapStateToProps,mapDispatchToProps) (ConnectedList);

export default List;



/*
const ConnectedList = ( { articles }) =>(
	<ul className="list-group list-group-flush">
		{articles.map(el => (
			<li className="list-group-item" key={el.id}>
				<table>
					<tbody><tr>
						<td>{el.title}</td><td><Link to={`/articleDetails/${el.id}`} >Details</Link></td>
					</tr></tbody>
				</table>
			</li> 	
		))}
	</ul>
);*/
