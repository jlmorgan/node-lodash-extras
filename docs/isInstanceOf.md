# _.isInstanceOf(constructor, instance)

Provides a curried implementation of the `instanceof` infix operator.

## Arguments

* `constructor (*)`: Class constructor of the type in question.
* `instance (Object)`: Object instance.

## Returns

* `(Boolean)`: True if the instance is an instance of the `constructor`; otherwise, false.

## Examples

### Truth table

```javascript
// Array
_.isInstanceOf(Array, []); // => true
_.isInstanceOf(Object, []); // => true

// Date
_.isInstanceOf(Date, new Date()); // => true
_.isInstanceOf(Object, new Date()); // => true

// Function
_.isInstanceOf(Function, () => null); // => true
_.isInstanceOf(Object, () => null); // => true
_.isInstanceOf(Function, function () {}); // => true
_.isInstanceOf(Object, function () {}); // => true

// Object
_.isInstanceOf(Object, {}); // => true
_.isInstanceOf(Object, Object.create({})); // => true
_.isInstanceOf(Object, Object.create(null)); // => false

// String
_.isInstanceOf(String, ""); // => false
_.isInstanceOf(Object, ""); // => false
_.isInstanceOf(String, new String()); // => true
_.isInstanceOf(Object, new String()); // => true
```
