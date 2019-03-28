# _.isAll(predicates, value)

Determines whether or not the `value` passes all `predicates`.

## Arguments

* `predicates (Array.<function()>)`: An array of predicates.
* `value (*)`: Value to apply to each predicate.

## Returns

* `(Boolean)`: 

## Examples

### All pass

```javascript
_.isAll([
  value => value > 0,
  value => value % 2 === 1,
  value => value < 10
], 1);
// => true
```

### One fails

```javascript
_.isAll([
  value => value > 0,
  value => value % 2 === 1,
  value => value < 10
], -1);
// => false
```
