# _.setProperty(value, object, path)

Sets the value at the path of an object.

## Arguments

* `value (*)`: Value to set on the object.
* `object (Object)`: Object on which to set.
* `path (String)`: Object path.

## Returns

* `(Object)`: Object with the value set at the path.

## Examples

### Set property on an object

```javascript
const object = { 'a': [{ 'b': { 'c': 3 } }] };
_.setProperty(4, object, 'a[0].b.c');
console.log(object.a[0].b.c);
// => 4

_.setProperty(5, object, ['x', '0', 'y', 'z']);
console.log(object.x[0].y.z);
// => 5
```
