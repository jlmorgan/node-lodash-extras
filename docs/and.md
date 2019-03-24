# _.and(left, right)

Performs the logical conjunction (and) on the `left` and `right` conjuncts. If the conjuncts are functions, they will be evaluated first before comparing.

## Arguments

* `left (*)`: Left conjunct.
* `right (*)`: Right conjunct.

## Returns

* `(Boolean)`: 

## Examples

### Function and Function

```javascript
_.and(() => true, () => false);
// => false
```

### Value and Value

```javascript
_.and(true, false);
// => false
```

### Evaluation chain

```javascript
const predicates = [
  value => value % 2 === 0, // isEven
  value => value >= 0, // isPositive
  value => value < 10 // isOnes
];

const testValue = value => _(predicates)
  .map(predicate => predicate(value))
  .reduce(_.and, true);

testValue(1);
// => false

testValue(2);
// => true

testValue(-1);
// => false

testValue(11);
// => false
```
