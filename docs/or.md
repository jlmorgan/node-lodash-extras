# _.or(left, right)

Performs the logical disjunction (or) on the `left` or `right` disjuncts. If the disjuncts are functions, they will be evaluated first before comparing.

## Arguments

* `left (*)`: Left conjunct.
* `right (*)`: Right conjunct.

## Returns

* `(Boolean)`: 

## Examples

### Function or Function

```javascript
_.or(() => true, () => false);
// => true
```

### Value or Value

```javascript
_.or(false, true);
// => true
```

### Mixed

```javascript
_.or(() => true, false);
// => true

_.or(true, () => false);
// => true
```

### Evaluation chain

```javascript
const predicates = [
  value => value % 2 === 0, // isEven
  value => value >= 0 // isPositive
];

const testValue = value => _(predicates)
  .map(predicate => predicate(value))
  .reduce(_.or, true);

testValue(1);
// => true

testValue(2);
// => true

testValue(-1);
// => false

testValue(-2);
// => true
```
