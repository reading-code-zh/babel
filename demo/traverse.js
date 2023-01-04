const { parse } = require("../packages/babel-parser");
const traverse = require("../packages/babel-traverse");

const code = `function square(n) {
  return n * n;
}`;

const ast = parse(code);

traverse.default(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      console.log(path.node.name);
      path.node.name = "x";
    }
  },
});

// traverse(ast, {
//   FunctionDeclaration: function(path) {
//     path.node.id.name = "x";
//   },
// });
