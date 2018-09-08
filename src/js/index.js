import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import ArticleListing from "./Pages/ArticleListing";
//import ArticleDetails from "./Pages/ArticleDetails";
import ArticleDetails from "./Pages/ArticleDetailsMounted";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginPage from "./Pages/LoginPage";

import Header from "./components/Header";

const NavBar = () => (
	<Router>
		<div>
			<hr/>

			<Route path="/index.html" component={Home}/>
				<Route path="/articles/listing" component={ListingWrapper}/>
				<Route path="/articles/about" component={About}/>
				<Route path="/articles/topics" component={Topics}/>
				<Route path="/articles/articleDetails/:id" component={ListingWrapper}/>
			<Route path="/login" component={LoginWrapper}/>
		</div>			
	</Router>

 );

function requireAuth(nextState, replace){
	if(sessionStorage.jwt){
		replace({
			pathname: '/login',
			state: {nextPathname: nextState.location.pathname}
		})
	}
}

const LoginWrapper = () => (
	<div>
	<Header/>
		<div>
			<LoginPage/>
		</div>
		</div>	
	);

const ListingWrapper = () => (
	<div>
	<Header/>
		<div>
			<ArticleListing/>
		</div>
		</div>	
	);

const Detail = ({ match }) => (
		<div>
		<Header/>
		<div>
			<h2>ArticleDetail:id is {match.params.id}</h2>
		</div>
		</div>	
	);
const About = () => (
	<div>
	<Header/>
		<div>
			<h2>About</h2>
		</div>
		</div>	
	);

const Home = () => (
<div>
	<Header/>
		<div>
			<h2>Home</h2>
		</div>	
		</div>
	);

const Topics = () => (
		<div>
		<Header/>
		<div>
			<h2>Topics</h2>
		</div>
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

