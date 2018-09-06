import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/user';

class LoginPage extends Component{
	constructor(props){
		super(props);
		this.state = {credentials: {username: '', password:''}}
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChange(event){
		const field = event.target.name;
		const credentials = this.state.credentials;
		credentials[field] = event.target.value;
		return this.setState({credentials:credentials});
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.actions.logIn(this.state.credentials);
	}

	render(){
		return (
			<div>
				<form  onSubmit={this.handleSubmit} >
					<label htmlFor="username" >Username:</label>
					<input type="text" className="form-control"	id="username" name="username"
					 	value={this.state.credentials.username} onChange={this.onChange} />
					<label htmlFor="password" >Password</label>
					<input type="password" className="form-control"	id="password" name="password"
					 	value={this.state.credentials.password} onChange={this.onChange} />
					<button type="submit" className="btn btn-success btn-lg">Login</button> 	
				</form>		
			</div>
			);
	}
}

	function mapDispatchToProps(dispatch){
		return{
			actions: bindActionCreators(sessionActions, dispatch)
		};
	}

export default connect(null, mapDispatchToProps) (LoginPage);