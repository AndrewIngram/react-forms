var compile = require('less-file/lib/compiler');
compile("./styles/index.less", {minify: true}).done(function(result) {
  console.log(result.raw.toString());
});
