class Credentials{

	constructor(username, password){
		this.username = username;
		this.password = password;
	}

	getUsername(){
		return this.username;
	}

	getPassword(){
		return this.password;
	}


}


module.exports = Credentials;


module.exports.default = Credentials;