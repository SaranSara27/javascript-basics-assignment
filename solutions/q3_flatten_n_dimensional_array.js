/* Write a Program to Flatten a given n-dimensional array */

const flatten = (array) => {
	// Write your code here
	if(Array.isArray(array)){
		var output=array.flat(Infinity);
		return output;
	}
	else{
		return null;
	}
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
