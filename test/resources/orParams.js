"use strict";

module.exports = [
  {
    "expected": false,
    "leftDisjunct": false,
    "message": "false and false returns false",
    "rightDisjunct": false
  },
  {
    "expected": true,
    "leftDisjunct": true,
    "message": "true and false returns false",
    "rightDisjunct": false
  },
  {
    "expected": true,
    "leftDisjunct": false,
    "message": "false and true returns false",
    "rightDisjunct": true
  },
  {
    "expected": true,
    "leftDisjunct": true,
    "message": "true and true returns true",
    "rightDisjunct": true
  },
  {
    "expected": false,
    "leftDisjunct": () => false,
    "message": "constant false and constant false returns false",
    "rightDisjunct": () => false
  },
  {
    "expected": true,
    "leftDisjunct": () => true,
    "message": "constant true and constant false returns false",
    "rightDisjunct": () => false
  },
  {
    "expected": true,
    "leftDisjunct": () => false,
    "message": "constant false and constant true returns false",
    "rightDisjunct": () => true
  },
  {
    "expected": true,
    "leftDisjunct": () => true,
    "message": "constant true and constant true returns true",
    "rightDisjunct": () => true
  }
];
