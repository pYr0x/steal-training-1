steal.config({
  paths: {
    jquery: "https://code.jquery.com/jquery-latest.min.js",
    fancybox: "javascript/fancybox/jquery.fancybox.js"
  },
  meta: {
    jquery: {
      format: "global"
    },
    fancybox: {
      deps: ["jquery"]
    }
  },
  ext: {
    css: "javascript/steal-css"
  }
});