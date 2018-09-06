import React, { Component, PropTypes }  from "react";
import { render } from "react-dom";
import {connect, Provider } from "react-redux";
import { Link } from 'react-router-dom';
import * as userSelectors from "../reducers/user";
import { logOut } from "../actions/user";

const mapStateToProps = state => {
	return { loggedInUser: userSelectors.getLoggedInUser(state) }; 
};

const mapDispatchToProps = dispatch =>{
	logOut: loggedInUser => dispatch(logOut(loggedInUser))
}

class Header extends Component{
	constructor(props){
		super(props);
		this.logOut = this.logOut.bind(this);
	}

	logOut(event){
		event.preventDefault();
		this.props.actions.logOut(this.props.loggedInUser);
	}

	render(){
		let  logoutLoginHTML = "";
		if(this.props.loggedInUser !== undefined ){
			logoutLoginHTML = <li>
				<a href="/logout" onClick={this.logOut}>Log out</a>
			</li>	
		}
		else{
			logoutLoginHTML = <li>
				<Link to="/login">Login</Link>
			</li>			
		}

		return(
			<ul>
				<li>
					<Link to="/index.html">Home</Link>
				</li>
				<li>
					<Link to="/articles/listing">Listing</Link>
				</li>
				<li>
					<Link to="/articles/about">About</Link>	
				</li>
				<li>
					<Link to="/articles/Topics">Topics</Link>
				</li>
					{logoutLoginHTML}
			</ul>
			);
	}
}

/*
Header.propTypes = {
	actions: PropTypes.object.isRequired
}
*/



export default connect(mapStateToProps)(Header);