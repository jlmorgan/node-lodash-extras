# _.isNothing(value)

Determines whether or not the value is `undefined` or `null`.

## Arguments

* `value (*)`: Value to test.

## Returns

* `(Boolean)`: True if the value is `null` or `undefined`; otherwise, false.

## Examples

### Value is `Nothing` (e.g., `undefined` or `null`)

```javascript
_.isNothing()
// => true

_.isNothing(null)
// => true
```

### Value is `Just`

```javascript
_.isNothing(0)
// => false

_.isNothing(false)
// => false

_.isNothing("")
// => false

_.isNothing([])
// => false

_.isNothing({})
// => false
```
