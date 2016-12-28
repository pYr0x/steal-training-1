(function () {

  var template = '' +
    '<div class="card">\n' +
    '<h3 class="card-header">Featured</h3>\n' +
    '<div class="card-block">\n' +
    '<h4 class="card-title">Special title treatment</h4>\n' +
    '<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
    '<a href="' + window.templateVars.btn.url + '" class="btn btn-primary btn-sm">' + window.templateVars.btn.name + '</a>\n' +
    '</div>\n' +
    '</div>';

  document.querySelector("#card-widget").innerHTML = template;

}());