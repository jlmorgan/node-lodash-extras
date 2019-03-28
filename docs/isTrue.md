# _.isTrue(value)

Determines whether or not the `value` is `true`.

## Arguments

* `value (*)`: Value to test.

## Returns

* `(Boolean)`: True if the value is explicitly `true`; otherwise, false.

## Examples

### Value is Truthy

```javascript
_.isTrue(1)
// => false

_.isTrue("a")
// => false

_.isTrue([1])
// => false

_.isTrue({ a: 1 })
// => false

_.isTrue(true)
// => true
```
