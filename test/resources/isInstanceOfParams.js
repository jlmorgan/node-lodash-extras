"use strict";

module.exports = [
  // Arrays
  {
    "constructor": Array,
    "expected": true,
    "message": "array literal is instance of Array",
    "value": []
  },
  {
    "constructor": Object,
    "expected": true,
    "message": "array literal is instance of Object",
    "value": []
  },

  // Booleans
  {
    "constructor": Boolean,
    "expected": false,
    "message": "boolean literal is not instance of Boolean",
    "value": true
  },
  {
    "constructor": Object,
    "expected": false,
    "message": "boolean literal is not instance of Object",
    "value": true
  },
  {
    "constructor": Boolean,
    "expected": true,
    "message": "Boolean constructor is instance of Boolean",
    /* eslint-disable no-magic-numbers, no-new-wrappers */
    "value": new Boolean(1)
  },
  {
    "constructor": Object,
    "expected": true,
    "message": "Boolean constructor is instance of Object",
    /* eslint-disable no-magic-numbers, no-new-wrappers */
    "value": new Boolean(1)
  },

  // Dates
  {
    "constructor": Date,
    "expected": true,
    "message": "date instance is instance of Date",
    "value": new Date()
  },
  {
    "constructor": Object,
    "expected": true,
    "message": "date instance is instance of Object",
    "value": new Date()
  },

  // Functions
  {
    "constructor": Function,
    "expected": true,
    "message": "lambda is instance of Function",
    "value": () => null
  },
  {
    "constructor": Object,
    "expected": true,
    "message": "lambda is instance of Object",
    "value": () => null
  },
  {
    "constructor": Function,
    "expected": true,
    "message": "function expression is instance of Function",
    "value": function value() {
      // Do nothing
    }
  },
  {
    "constructor": Object,
    "expected": true,
    "message": "function expression is instance of Object",
    "value": function value() {
      // Do nothing
    }
  },

  // Numbers
  {
    "constructor": Number,
    "expected": false,
    "message": "number literal is not instance of Number",
    "value": 1
  },
  {
    "constructor": Object,
    "expected": false,
    "message": "number literal is not instance of Object",
    "value": 1
  },
  {
    "constructor": Number,
    "expected": false,
    "message": "Infinity is not instance of Number",
    "value": Infinity
  },
  {
    "constructor": Object,
    "expected": false,
    "message": "Infinity is not instance of Object",
    "value": Infinity
  },
  {
    "constructor": Number,
    "expected": false,
    "message": "NaN is not instance of Number",
    "value": NaN
  },
  {
    "constructor": Object,
    "expected": false,
    "message": "NaN is not instance of Object",
    "value": NaN
  },
  {
    "constructor": Number,
    "expected": true,
    "message": "Number constructor is instance of Number",
    "value": new Number("1")
  },
  {
    "constructor": Object,
    "expected": true,
    "message": "Number constructor is instance of Object",
    "value": new Number("1")
  },

  // Objects
  {
    "constructor": Object,
    "expected": true,
    "message": "object literal is instance of Object",
    "value": {}
  },
  {
    "constructor": Object,
    "expected": true,
    "message": "object create from literal is instance of Object",
    "value": Object.create({})
  },
  {
    "constructor": Object,
    "expected": false,
    "message": "object create from null is not instance of Object",
    "value": Object.create(null)
  },

  // Strings
  {
    "constructor": String,
    "expected": false,
    "message": "string literal is not instance of String",
    "value": ""
  },
  {
    "constructor": Object,
    "expected": false,
    "message": "string literal is not instance of Object",
    "value": ""
  },
  {
    "constructor": String,
    "expected": true,
    "message": "String constructor is instance of String",
    /* eslint-disable no-new-wrappers */
    "value": new String()
  },
  {
    "constructor": Object,
    "expected": true,
    "message": "String constructor is instance of Object",
    /* eslint-disable no-new-wrappers */
    "value": new String()
  },

  // Symbols
  {
    "constructor": Symbol,
    "expected": false,
    "message": "Symbol constructor is not instance of Symbol",
    "value": Symbol("1")
  },
  {
    "constructor": Object,
    "expected": false,
    "message": "Symbol constructor is not instance of Object",
    "value": Symbol("1")
  },
  {
    "constructor": Symbol,
    "expected": false,
    "message": "Symbol.iterator is not instance of Symbol",
    "value": Symbol.iterator
  },
  {
    "constructor": Object,
    "expected": false,
    "message": "Symbol.iterator is not instance of Object",
    "value": Symbol.iterator
  }
];
