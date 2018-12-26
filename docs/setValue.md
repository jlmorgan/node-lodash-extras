# _.setValue(path, object, value)

Sets the value at the path of an object.

## Arguments

* `path (String)`: Object path.
* `object (Object)`: Object on which to set.
* `value (*)`: Value to set on the object.

## Returns

* `(Object)`: Object with the value set at the path.

## Examples

### Set value on an object

```javascript
const object = { 'a': [{ 'b': { 'c': 3 } }] };
_.setValue('a[0].b.c', object, 4);
console.log(object.a[0].b.c);
// => 4

_.setValue(['x', '0', 'y', 'z'], object, 5);
console.log(object.x[0].y.z);
// => 5
```
