const babel = require("@babel/core");

const code = `const a= 1`;
babel.transform(code, null, function (err, result) {
  console.log(result); // => { code, map, ast }
});
