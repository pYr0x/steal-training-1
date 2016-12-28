var arrayMath = require('./arrayMath');
require('./gallery');


var h1 = document.querySelector('#headline h1');
h1.innerText = "Hello World";


if (!arrayMath.arrayAddition) {
  console.log('arrayAddition not defined');
} else {
  var array = [1, 2, 3, 4];
  var result = arrayMath.arrayAddition(array);
  var pre = document.querySelector('pre');
  pre.textContent = "Result of " + array.join(' + ') + " is " + result;
}


var btn = document.querySelector('#load-card');
btn.addEventListener('click', function () {
  document.querySelector("#card-widget").innerHTML = '<img class="text-xs-center" src="/styles/fancybox/fancybox_loading.gif">';


  steal.import("javascript/src/card").then(function(card) {

    document.querySelector("#card-widget").innerHTML = card.renderer({
      btn: {
        name: "Go to Google",
        url: 'http://google.de'
      }
    });
  }).catch(function (err) {
    console.error(err);
  });

});
