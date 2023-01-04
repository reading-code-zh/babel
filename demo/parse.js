const { parse } = require("../packages/babel-parser");

const ast = parse(`const a = 1`, {});

console.log(ast);
