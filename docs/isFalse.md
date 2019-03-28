# _.isFalse(value)

Determines whether or not the `value` is `false`.

## Arguments

* `value (*)`: Value to test.

## Returns

* `(Boolean)`: True if the value is explicitly `false`; otherwise, false.

## Examples

### Value is Falsey

```javascript
_.isFalse() // undefined
// => false

_.isFalse(null)
// => false

_.isFalse(0)
// => false

_.isFalse("")
// => false

_.isFalse([])
// => false

_.isFalse({})
// => false

_.isFalse(false)
// => true
```
