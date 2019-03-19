# _.invokeWith(value, morphism)

Invokes with a value on a `function`.

## Arguments

* `value (*)`: A value.
* `morphism (function)`: A function.

## Returns

* `(*)`: 

## Examples

### Invoking with a value

```javascript
_([_.add(1), _.add(2), _.add(3)])
  .map(_.invokeWith(1))
  .value();
// => [2, 3, 4]
```
