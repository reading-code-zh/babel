"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bar", {
  enumerable: true,
  get: function () {
    return _foo.bar;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _foo.foo;
  }
});
var _foo = require("foo");
