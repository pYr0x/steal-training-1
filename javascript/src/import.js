var myFetch = function(url){
	this.url = url;
};
myFetch.prototype.import = function() {

	return fetch(this.url, {
		method: 'get'
	}).then(function(response) {
		return response.text();
	}).then(function(text) {
		eval(text);
		return this;
	}).catch(function(err) {
		// Error :(
	});

};

