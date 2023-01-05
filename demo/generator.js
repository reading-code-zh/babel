const { parse } = require("../packages/babel-parser");
const generate = require("../packages/babel-generator")

const code = "const a = 1";
const ast = parse(code);

const output = generate.default(
  ast,
  {
    /* options */
  },
  code
);

console.log(output)
