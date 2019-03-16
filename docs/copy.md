# _.copy(source, destination, objectPath)

Copies an object path from the `source` object to the `destination` object.

## Arguments

* `source (Object)`: Source object.
* `destination (Object)`: Destination object.
* `objectPath (String)`: Object path.

## Returns

* `(Object)`: 

## Examples

### Copying

```javascript
_.copy({ "a": 1 }, { "b": 2}, "a");
// => { "a": 1, "b": 2 }
```
