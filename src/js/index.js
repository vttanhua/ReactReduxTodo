import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import ArticleListing from "./Pages/ArticleListing";
import ArticleDetail from "./Pages/ArticleDetails";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>	
				</li>
				<li>
					<Link to="/Topics">Topics</Link>
				</li>
			</ul>

			<hr/>

			<Route exact path="/" component={ArticleListing}/>
			<Route path="/about" component={About}/>
			<Route path="/topics" component={Topics}/>
			<Route path="/articleDetails/:id" component={Detail}/>
		</div>			
	</Router>

 );

const Detail = ({ match }) => (
		<div>
			<h2>ArticleDetail:id is {match.params.id}</h2>
		</div>	
	);
const About = () => (
		<div>
			<h2>About</h2>
		</div>	
	);

const Home = () => (
		<div>
			<h2>Home</h2>
		</div>	
	);

const Topics = () => (
		<div>
			<h2>Topics</h2>
		</div>	
	);

render(
	<Provider store={store}>
		<NavBar/>
	</Provider>,
	document.getElementById("app")	
);


/*
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")	
);
*/

//import store from "../js/store/index";

//way to test store from browser!
//store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) )
import { addArticle, selectArticle, deleteArticle } from "../js/actions/article";
import { loginUser, logoutUser } from "../js/actions/user";
window.store = store;
window.addArticle = addArticle;
window.selectArticle = selectArticle;
window.deleteArticle = deleteArticle;
window.loginUser = loginUser;
window.logoutUser = logoutUser;

