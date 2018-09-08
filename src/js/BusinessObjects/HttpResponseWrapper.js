

class HttpResponseWrapper{

	constructor(response){
		if(response.status >= 200 && response.status <300){
			this.status = response.status;
		}
		else{
			this.status = response.response.status;
			if(response.status != 200){
				this.error = response.message;
			}
		}	
		this.originalResponse = response;
	}

	getStatus(){
		return this.originalResponse.status;
	}

	getData(){
		return this.originalResponse.data;
	}
	getAuthorizationBearer(){
		return this.originalResponse.headers["authorization"];
	}
	getStatus(){
		return this.status;
	}
	getIsOk(){
		if(this.status == 200)
			return true;
		return false;
	}
	getErrorMessage(){
		return this.error;
	}

	getCreatedObjectId(){
		var locationHeader = this.originalResponse.headers["location"];
		var splitterURL = locationHeader.split("/");
		console.log("id is:"+splitterURL[splitterURL.length-1]);
		return splitterURL[splitterURL.length-1];
	}
}


module.exports = HttpResponseWrapper;


module.exports.default = HttpResponseWrapper;