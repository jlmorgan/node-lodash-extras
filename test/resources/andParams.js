"use strict";

module.exports = [
  {
    "expected": false,
    "leftConjunct": false,
    "message": "false and false returns false",
    "rightConjunct": false
  },
  {
    "expected": false,
    "leftConjunct": true,
    "message": "true and false returns false",
    "rightConjunct": false
  },
  {
    "expected": false,
    "leftConjunct": false,
    "message": "false and true returns false",
    "rightConjunct": true
  },
  {
    "expected": true,
    "leftConjunct": true,
    "message": "true and true returns true",
    "rightConjunct": true
  },
  {
    "expected": false,
    "leftConjunct": () => false,
    "message": "constant false and constant false returns false",
    "rightConjunct": () => false
  },
  {
    "expected": false,
    "leftConjunct": () => true,
    "message": "constant true and constant false returns false",
    "rightConjunct": () => false
  },
  {
    "expected": false,
    "leftConjunct": () => false,
    "message": "constant false and constant true returns false",
    "rightConjunct": () => true
  },
  {
    "expected": true,
    "leftConjunct": () => true,
    "message": "constant true and constant true returns true",
    "rightConjunct": () => true
  }
];
