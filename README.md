# vec2
A basic 2d vector library in JS

* [vec2(x, [y])](#vec2) ⇒ <code>Object</code>
    * [.map(v, f, ...arguments)](#vec2.map) ⇒ <code>[vec2](#vec2)</code>
    * [.len(v)](#vec2.len) ⇒ <code>Number</code>
    * [.rad(v)](#vec2.rad) ⇒ <code>Number</code>
    * [.dot(v1, v2)](#vec2.dot) ⇒ <code>Number</code>
    * [.norm(v)](#vec2.norm) ⇒ <code>[vec2](#vec2)</code>
    * [.reflect(v, n)](#vec2.reflect) ⇒ <code>[vec2](#vec2)</code>
    * [.cross(v1, v2)](#vec2.cross) ⇒ <code>Number</code>
    * [.rot(v, r)](#vec2.rot) ⇒ <code>[vec2](#vec2)</code>
    * [.add(v1, v2)](#vec2.add) ⇒ <code>[vec2](#vec2)</code>
    * [.sub(v1, v2)](#vec2.sub) ⇒ <code>[vec2](#vec2)</code>
    * [.mul(v1, v2)](#vec2.mul) ⇒ <code>[vec2](#vec2)</code>
    * [.div(v1, v2)](#vec2.div) ⇒ <code>[vec2](#vec2)</code>
    * [.eq(v1, v2)](#vec2.eq) ⇒ <code>Boolean</code>
    * [.fromString(s)](#vec2.fromString) ⇒ <code>[vec2](#vec2)</code>
    * [.toString(v, [s])](#vec2.toString) ⇒ <code>String</code>

<a name="vec2"></a>

## vec2(x, [y]) ⇒ <code>Object</code>
Return a new vec2 object with the specified x/y coordinates. If the first argument is an array,
the vec2 will be initialised using the first 2 elements of the array. If the first argument is
an object with x and y properties, these will be used instead (this is useful for copying vec2
instances). If no arguments are provided, or the arguments are invalid, a zero-vector will be
returned instead.

**Kind**: global function  
**Returns**: <code>Object</code> - A vec2 instance.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> &#124; <code>Array</code> &#124; <code>Object</code> | The x-coordinate, or an array with at least 2 elements, or an object with x and y properties. |
| [y] | <code>Number</code> | The y-coordinate, if an x-coordinate has also been provided. |

**Example**  
```js
let v1 = vec2(2, 1); // v1 == { x: 2, y: 1 }
let v2 = vec2([2, 1]); // v2 == { x: 2, y: 1 }
let v3 = vec2(v1); // v3 == { x: 2, y: 1 }
```

<a name="vec2.map"></a>

## vec2.map(v, f, ...arguments) ⇒ <code>[vec2](#vec2)</code>
Return a new vector from v by mapping it's components to f.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>[vec2](#vec2)</code> - The transformed vector.  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>[vec2](#vec2)</code> | The vector to transform. |
| f | <code>[mapCallback](#mapCallback)</code> | A callback that will be called for both the x and y components. |
| ...arguments | <code>\*</code> | Additional arguments will be passed to f for each component. |

**Example**  
```js
let v = vec2(1.5, 2.5);
v = vec2.map(v, Math.floor); // v == { x: 1, y: 2 }
```
<a name="mapCallback"></a>

## mapCallback ⇒ <code>Boolean</code>
**Kind**: global typedef  
**Returns**: <code>Boolean</code> - True if the current element is the one being searched for.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | The x or y component of the vector. |
| ...arguments | <code>\*</code> | Any additional arguments passed to vec2.map. |



<a name="vec2.len"></a>

## vec2.len(v) ⇒ <code>Number</code>
Get the length of a vector.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>Number</code> - The vector's length.  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>[vec2](#vec2)</code> | The vector. |

<a name="vec2.rad"></a>

## vec2.rad(v) ⇒ <code>Number</code>
Get the angle of a vector in radians.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>Number</code> - The angle of the vector in radians.  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>[vec2](#vec2)</code> | The vector. |

<a name="vec2.dot"></a>

## vec2.dot(v1, v2) ⇒ <code>Number</code>
Get the dot product of two vectors.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>Number</code> - The dot product of v1 and v2.  

| Param | Type | Description |
| --- | --- | --- |
| v1 | <code>[vec2](#vec2)</code> | The first vector. |
| v2 | <code>[vec2](#vec2)</code> | The second vector. |

<a name="vec2.norm"></a>

## vec2.norm(v) ⇒ <code>[vec2](#vec2)</code>
Normalise a vector

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>[vec2](#vec2)</code> - The normalised vector.  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>[vec2](#vec2)</code> | The vector. |

<a name="vec2.reflect"></a>

## vec2.reflect(v, n) ⇒ <code>[vec2](#vec2)</code>
Reflect a vector across a plane with normal n

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>[vec2](#vec2)</code> - The reflected vector.  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>[vec2](#vec2)</code> | The vector. |
| n | <code>[vec2](#vec2)</code> | The plane normal vector. |

<a name="vec2.cross"></a>

## vec2.cross(v1, v2) ⇒ <code>Number</code>
Get the cross product of two vectors. The z-coord is assumed to be 0, since these are 2d vectors.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>Number</code> - The cross product of v1 and v2.  

| Param | Type | Description |
| --- | --- | --- |
| v1 | <code>[vec2](#vec2)</code> | The first vector. |
| v2 | <code>[vec2](#vec2)</code> | The second vector. |

<a name="vec2.rot"></a>

## vec2.rot(v, r) ⇒ <code>[vec2](#vec2)</code>
Rotate a vector.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>[vec2](#vec2)</code> - The rotated vector.  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>[vec2](#vec2)</code> | The vector. |
| r | <code>Number</code> | The amount to rotate the vector by, in radians. |

<a name="vec2.add"></a>

## vec2.add(v1, v2) ⇒ <code>[vec2](#vec2)</code>
Add two vectors or add a scalar to each component.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>[vec2](#vec2)</code> - The sum of v1 and v2.  

| Param | Type | Description |
| --- | --- | --- |
| v1 | <code>[vec2](#vec2)</code> | The first vector. |
| v2 | <code>[vec2](#vec2)</code> &#124; <code>Number</code> | The second vector, or a scalar value to add to each component of v1. |

<a name="vec2.sub"></a>

## vec2.sub(v1, v2) ⇒ <code>[vec2](#vec2)</code>
Subtract two vectors.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>[vec2](#vec2)</code> - The difference of v1 and v2.  

| Param | Type | Description |
| --- | --- | --- |
| v1 | <code>[vec2](#vec2)</code> | The first vector. |
| v2 | <code>[vec2](#vec2)</code> &#124; <code>Number</code> | The second vector, or a scalar value to subtract from each component of v1. |

<a name="vec2.mul"></a>

## vec2.mul(v1, v2) ⇒ <code>[vec2](#vec2)</code>
Multiply two vectors.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>[vec2](#vec2)</code> - The product of v1 and v2.  

| Param | Type | Description |
| --- | --- | --- |
| v1 | <code>[vec2](#vec2)</code> | The first vector. |
| v2 | <code>[vec2](#vec2)</code> &#124; <code>Number</code> | The second vector, or a scalar value to multiply each component of v1 by. |

<a name="vec2.div"></a>

## vec2.div(v1, v2) ⇒ <code>[vec2](#vec2)</code>
Divide two vectors.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>[vec2](#vec2)</code> - The quotient of v1 and v2.  

| Param | Type | Description |
| --- | --- | --- |
| v1 | <code>[vec2](#vec2)</code> | The first vector. |
| v2 | <code>[vec2](#vec2)</code> &#124; <code>Number</code> | The second vector, or a scalar value to divide each component of v1 by. |

<a name="vec2.eq"></a>

## vec2.eq(v1, v2) ⇒ <code>Boolean</code>
Check if two vectors are equal.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>Boolean</code> - True if the vectors are equal.  

| Param | Type | Description |
| --- | --- | --- |
| v1 | <code>[vec2](#vec2)</code> | The first vector. |
| v2 | <code>[vec2](#vec2)</code> | The second vector. |

<a name="vec2.fromString"></a>

## vec2.fromString(s) ⇒ <code>[vec2](#vec2)</code>
Convert a string representation of a vector (like '0,0' or '0, 0') into a vec2.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>[vec2](#vec2)</code> - The resulting vec2, or a zero-vector if the string couldn't be parsed.  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>String</code> | The string representation of the vector. |

<a name="vec2.toString"></a>

## vec2.toString(v, [s]) ⇒ <code>String</code>
Convert a vec2 into a string.

**Kind**: static method of <code>[vec2](#vec2)</code>  
**Returns**: <code>String</code> - The string representation of v.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| v | <code>[vec2](#vec2)</code> |  | The vector to convert. |
| [s] | <code>String</code> | <code>&#x27;,&#x27;</code> | An optional separator string. |

