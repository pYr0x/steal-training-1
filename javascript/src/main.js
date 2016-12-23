var h1 = document.querySelector('#headline h1');
h1.innerText = "Hello World";

if (!window.addArray) {
	console.log('addArray not defined');
} else {
	var result = addArray([1, 2, 3, 4]);
	var pre = document.querySelector('pre');
	pre.textContent = "Result is: " + result;
}


var btn = document.querySelector('#load-card');
btn.addEventListener('click', function() {

	fetch("/javascript/src/card.js").then(function(response) {

		document.querySelector("#card-widget").innerHTML = '<img class="text-xs-center" src="/styles/fancybox/fancybox_loading.gif">';

		return response.text();
	}).then(function(js) {
		window.templateVars = {
			btn: {
				name: "Go to Google",
				url: 'http://google.de'
			}
		};

		eval(js);
	}).catch(function(err) {
		console.error(err);
	});

});
