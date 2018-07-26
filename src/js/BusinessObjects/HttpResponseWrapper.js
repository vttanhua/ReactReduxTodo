

class HttpResponseWrapper{

	constructor(response){
		this.originalResponse = response;
	}

	getStatus(){
		return this.originalResponse.status;
	}

	getData(){
		return this.originalResponse.data;
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