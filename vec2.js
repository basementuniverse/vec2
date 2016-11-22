"use strict";
var vec2 = function(x, y) {
	if (arguments.length == 1) {
		if (x instanceof Array && x.length > 1) {	// vec2 from array
			return { x: x[0], y: x[1] };
		} else if (x.x !== undefined && x.y !== undefined) {
			return { x: x.x, y: x.y };				// vec2 from vec2 (copy)
		}
		return { x: 0, y: 0 };						// Arguments incorrect, return [0, 0]
	}
	return { x: x || 0, y: y || 0 };
};

// Return a new vector from v by mapping components to f
//	v:		The vector to transform
//	f:		The map function
//	args:	Additional arguments will be passed to f
vec2.map = function(v, f) {
	var args = arguments.length == 1 ? [arguments[0]] : Array.apply(null, arguments);
	args = Array.prototype.slice.call(args, 2);
	return vec2(f.apply(this, [v.x].concat(args)), f.apply(this, [v.y].concat(args)));
};

// Return the length of a vector
vec2.len = function(v) {
	return Math.sqrt(v.x * v.x + v.y * v.y);
};

// Returns the angle of the vector in radians
vec2.rad = function(v) {
	return Math.atan2(v.y, v.x);
};

// Return the dot product of two vectors
vec2.dot = function(v1, v2) {
	return v1.x * v2.x + v1.y * v2.y;
};

// Return a normalised vector
vec2.norm = function(v) {
	var length = vec2.len(v);
	if (length) {
		return vec2.div(v, length);
	}
	return vec2();
};

// Reflect a vector across a plane with normal n
vec2.reflect = function(v, n) {
	return vec2.add(v, vec2.mul(vec2.mul(n, vec2.dot(v, n)), -2));
};

// Return the cross product (3d, but the z-coord is 0)
vec2.cross = function(v1, v2) {
	return v1.x * v2.y - v1.y * v2.x;
};

// Return vector v rotated by r radians
vec2.rot = function(v, r) {
	var sinAngle = Math.sin(r),
		cosAngle = Math.cos(r),
		x = cosAngle * v.x - sinAngle * v.y,
		y = sinAngle * v.x + cosAngle * v.y;
	return vec2(x, y);
};

// Adds two vectors and returns the result
vec2.add = function(v1, v2) {
	if (v2.x !== undefined && v2.y !== undefined) {
		return vec2(v1.x + v2.x, v1.y + v2.y);
	} else {
		return vec2(v1.x + v2, v1.y + v2);
	}
};

// Subtracts two vectors and returns the result
vec2.sub = function(v1, v2) {
	if (v2.x !== undefined && v2.y !== undefined) {
		return vec2(v1.x - v2.x, v1.y - v2.y);
	} else {
		return vec2(v1.x - v2, v1.y - v2);
	}
};

// Multiplies two vectors and returns the result
vec2.mul = function(v1, v2) {
	if (v2.x !== undefined && v2.y !== undefined) {
		return vec2(v1.x * v2.x, v1.y * v2.y);
	} else {
		return vec2(v1.x * v2, v1.y * v2);
	}
};

// Divides two vectors and returns the result
vec2.div = function(v1, v2) {
	if (v2.x !== undefined && v2.y !== undefined) {
		return vec2(v1.x / v2.x, v1.y / v2.y);
	} else {
		return vec2(v1.x / v2, v1.y / v2);
	}
};

// Returns true if the two specified vectors are the same
vec2.eq = function(v1, v2) {
	return (v1.x == v2.x && v1.y == v2.y);
};

// Returns a vector from a string like "0,0" or "0, 0"
vec2.fromString = function(s) {
	var values = s.split(",", 2);
	if (values.length == 2) {
		var x = parseFloat(values[0]),
			y = parseFloat(values[1]);
		if (!isNaN(x) && !isNaN(y)) {
			return vec2(x, y);
		}
	}
	return vec2(0, 0);
};

// Returns a string representation of a vector
//	v:	The vector to return as a string
//	s:	An optional separator string (default is ",")
vec2.toString = function(v, s) {
	return v.x + (s !== undefined ? s : ",") + v.y;
};
