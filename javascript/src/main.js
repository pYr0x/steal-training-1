var h1 = document.querySelector('#headline h1');
h1.innerText = "Hello World";

if (!window.addArray) {
	console.log('addArray not defined');
} else {
	var result = addArray([1, 2, 3, 4]);
	var pre = document.querySelector('pre');
	pre.textContent = "Result is: " + result;
}