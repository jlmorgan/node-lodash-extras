"use strict";

module.exports = [
  // Booleans
  {
    "expected": true,
    "message": "boolean literal is type of boolean",
    "type": "boolean",
    "value": true
  },
  {
    "expected": true,
    "message": "Boolean constructor is type of boolean",
    "type": "boolean",
    /* eslint-disable no-magic-numbers */
    "value": Boolean(1)
  },

  // Functions
  {
    "expected": true,
    "message": "function expression is type of function",
    "type": "function",
    "value": function value() {
      // Do nothing.
    }
  },
  {
    "expected": true,
    "message": "lambda is type of function",
    "type": "function",
    "value": () => null
  },

  // Numbers
  {
    "expected": true,
    "message": "number literal is type of number",
    "type": "number",
    "value": 1
  },
  {
    "expected": true,
    "message": "Infinity is type of number",
    "type": "number",
    "value": Infinity
  },
  {
    "expected": true,
    "message": "NaN is type of number",
    "type": "number",
    "value": NaN
  },
  {
    "expected": true,
    "message": "Number constructor is type of number",
    "type": "number",
    "value": Number("1")
  },

  // Objects
  {
    "expected": true,
    "message": "array literal is type of object",
    "type": "object",
    "value": []
  },
  {
    "expected": true,
    "message": "Date constructor is type of object",
    "type": "object",
    "value": new Date()
  },
  {
    "expected": true,
    "message": "object literal is type of object",
    "type": "object",
    "value": {}
  },
  {
    "expected": true,
    "message": "Object created from null is type of object",
    "type": "object",
    "value": Object.create(null)
  },
  {
    "expected": true,
    "message": "Object created from object literal is type of object",
    "type": "object",
    "value": Object.create({})
  },
  {
    "expected": true,
    "message": "regex literal is type of object",
    "type": "object",
    "value": /regex/u
  },

  // Strings
  {
    "expected": true,
    "message": "string literal is type of string",
    "type": "string",
    "value": ""
  },
  {
    "expected": true,
    "message": "template literal is type of string",
    "type": "string",
    /* eslint-disable quotes */
    "value": `a`
  },
  {
    "expected": true,
    "message": "String constructor is type of string",
    "type": "string",
    /* eslint-disable no-magic-numbers */
    "value": String(1)
  },

  // Symbols
  {
    "expected": true,
    "message": "Symbol constructor is type of symbol",
    "type": "symbol",
    "value": Symbol("1")
  },
  {
    "expected": true,
    "message": "Symbol iterator is type of symbol",
    "type": "symbol",
    "value": Symbol.iterator
  },

  // Undefined
  {
    "expected": true,
    "message": "Symbol constructor is type of undefined",
    "type": "undefined",
    /* eslint-disable no-undefined */
    "value": undefined
  }
];
