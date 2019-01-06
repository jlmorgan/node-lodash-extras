"use strict";

module.exports = [
  // Array Tests
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

  // Date Tests
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

  // Function Tests
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

  // Object Tests
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

  // String Tests
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
    "message": "string constructed is instance of String",
    /* eslint-disable no-new-wrappers */
    "value": new String()
  },
  {
    "constructor": Object,
    "expected": true,
    "message": "string constructed is instance of Object",
    /* eslint-disable no-new-wrappers */
    "value": new String()
  }
];
