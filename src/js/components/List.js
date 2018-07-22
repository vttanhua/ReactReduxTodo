import React, { Component } from "react";
import { connect } from "react-redux";

import * as articlesSelectors from "../reducers/article";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { selectArticle, loadArticles } from "../actions/article";

const mapStateToProps = state => {
	return { articles: articlesSelectors.getArticles(state) };  //load state using selectors!
	//return { articles: state.articles };// getArticles(state)
};

const mapDispatchToProps = dispatch => {
	return {
		selectArticle: selectedId => dispatch(selectArticle(selectedId)),
		loadArticles: ()=>dispatch(loadArticles())

	};
};

class ConnectedList extends Component{
	constructor(){
		super();
		this.handleOnClick = this.handleOnClick.bind(this);
	}

 	componentDidMount() {
 		console.log("List component componentDidMount method!");
 		this.props.loadArticles();
 	}

	handleOnClick(event) {
		//event.preventDefault();
		console.log("Link clicked!"+event.target.id);
		this.props.selectArticle(event.target.id);

	}

	render(){
		const articles = this.props.articles;
		return (
			<ul className="list-group list-group-flush">
		{articles.map(el => (
			<li className="list-group-item" key={el.id}>
				<table>
					<tbody><tr>
						<td>{el.title}</td><td><Link id={`${el.id}`} onClick={this.handleOnClick} to={`/articleDetails/${el.id}`} >Details</Link></td>
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
