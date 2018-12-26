# _.isBlank(value)

Determines whether or not a string is blank.

## Arguments

* `value (String)`: String to evaluate.

## Returns

* `(Boolean)`: True if the value is blank; otherwise, false.

## Examples

### Value is blank

```javascript
_.isBlank() // undefined
// => true

_.isBlank(null)
// => true

_.isBlank("")
// => true

_.isBlank(" ")
// => true
```

### Value contains white space

```javascript
_.isBlank(" a ")
// => false
```
