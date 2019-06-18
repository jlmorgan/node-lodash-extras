# _.isSome(value)

Determines whether or not the `value` is just a value.

## Arguments

* `value (*)`: Value to test.

## Returns

* `(Boolean)`: True if the value is not `null` or `undefined`; otherwise, false.

## Examples

### Value is `Nothing` (e.g., `undefined` or `null`)

```javascript
_.isSome() // undefined
// => false

_.isSome(null)
// => false
```

### Value is `Just`

```javascript
_.isSome(0)
// => true

_.isSome(false)
// => true

_.isSome("")
// => true

_.isSome([])
// => true

_.isSome({})
// => true
```
