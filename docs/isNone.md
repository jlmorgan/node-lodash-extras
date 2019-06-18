# _.isNone(value)

Determines whether or not the value is `undefined` or `null`.

## Arguments

* `value (*)`: Value to test.

## Returns

* `(Boolean)`: True if the value is `null` or `undefined`; otherwise, false.

## Examples

### Value is `Nothing` (e.g., `undefined` or `null`)

```javascript
_.isNone()
// => true

_.isNone(null)
// => true
```

### Value is `Just`

```javascript
_.isNone(0)
// => false

_.isNone(false)
// => false

_.isNone("")
// => false

_.isNone([])
// => false

_.isNone({})
// => false
```
