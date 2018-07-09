import React, { Component } from "react";
import { connect } from "react-redux";

import * as articlesSelectors from "../reducers/article";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const mapStateToProps = state => {
	return { articles: articlesSelectors.getArticles(state) };  //load state using selectors!
	//return { articles: state.articles };// getArticles(state)
};

class ConnectedList extends Component{
	constructor(){
		super();
	}

	render(){
		const articles = this.props.articles;
		return (
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
	)

	}
}


const List = connect(mapStateToProps) (ConnectedList);

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
