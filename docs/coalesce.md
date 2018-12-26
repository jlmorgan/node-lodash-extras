# _.coalesce(alternative, value)

Coalesces if the value is `Nothing` with an alternative value. The default of `value || alternative` is a _falsey_ coalesce and not a `Nothing` coalesce.

## Arguments

* `alternative (*)`: Value to use if value was null or undefined.
* `value (*)`: The value value.

## Returns

* `(*)`: The alternative value if value is `Nothing`; otherwise, the value value.

## Examples

### Value is falsey

```javascript
_.coalesce(false, 0);
// => 0

_.coalesce(false, "");
// => ""

_.coalesce(true, false);
// => false
```

### Value is `Nothing` (e.g., `undefined` or `null`)

```javascript
_.coalesce(false)(); // Passing the second argument as undefined
// => false

_.coalesce(1, null);
// => 1
```

### Value is `Just`

```javascript
_.coalesce(1, 2);
// => 2
```
