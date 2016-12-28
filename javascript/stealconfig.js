steal.config({
  paths: {
    jquery: "https://code.jquery.com/jquery-latest.min.js",
    fancybox: "javascript/fancybox/jquery.fancybox.js"
  },
  meta: {
    jquery: {
      format: "global",
      exports: "jQuery"
    },
    fancybox: {
      deps: ["jquery"]
    }
  },
  ext: {
    css: "javascript/steal-css"
  }
});