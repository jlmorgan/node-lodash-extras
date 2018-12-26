# _.isJust(value)

Determines whether or not the `value` is just a value.

## Arguments

* `value (*)`: Value to test.

## Returns

* `(Boolean)`: True if the value is not `null` or `undefined`; otherwise, false.

## Examples

### Value is `Nothing` (e.g., `undefined` or `null`)

```javascript
_.isJust() // undefined
// => false

_.isJust(null)
// => false
```

### Value is `Just`

```javascript
_.isJust(0)
// => true

_.isJust(false)
// => true

_.isJust("")
// => true

_.isJust([])
// => true

_.isJust({})
// => true
```
