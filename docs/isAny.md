# _.isAny(predicates, value)

Determines whether or not the `value` passes any `predicates`.

## Arguments

* `predicates (Array.<function()>)`: An array of predicates.
* `value (*)`: Value to apply to each predicate.

## Returns

* `(Boolean)`: 

## Examples

### All fail

```javascript
_.isAny([
  value => value < 0,
  value => value % 2 === 1,
  value => value < 10
], 12);
// => false
```

### One passes

```javascript
_.isAny([
  value => value < 0,
  value => value % 2 === 1,
  value => value < 10
], 11);
// => true
```
