# _.ifThenElse(predicate, ifTrue, ifFalse, value)

Using the provided `value`, invokes the `predicate`. If the result of the `predicate` returns `true`, then invokes the `ifTrue` function with the `value`; otherwise, invokes the `ifFalse` function with the `value`.

## Arguments

* `predicate (function)`: A predicate evaluating with the provided `value`.
* `ifTrue (function)`: Function to invoke with the provided `value` if the `predicate` returns `true`.
* `ifFalse (function)`: Function to invoke with the provided `value` if the `predicate` returns `false`.
* `value (*)`: Value to pass into the `predicate` and the corresponding `ifTrue` or `ifFalse` functions.

## Returns

* `(*)`: Result of `value` applied to `ifTrue` or `ifFalse`.

## Examples

### If true

```javascript
_([0, 1, 2, 3])
  .map(_.ifThenElse(
    value => value % 2,
    value => "even",
    value => "odd"
  ))
  .value();
// => ["even", "odd", "even", "odd"]
```

### If false

```javascript
Promise.resolve(httpResponse) // 404 Not Found
  .then(_.ifThenElse(
    _.pipe(_.get("statusCode"), _.inRange(400, 600)),
    _.get("body"),
    _.pipe(_.get("statusMessage"), Promise.reject)
  ));
// => Reject("Not Found")
```
