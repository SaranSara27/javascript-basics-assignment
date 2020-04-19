/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (array, key) => {
	// Write your code here
	const initialValue = {};
	if(Array.isArray(array)){
    return array.reduce((obj, item) => {
        return {
          ...obj,
          [item[key]]: item,
        };
      }, initialValue);
    }
  else{
    return null;
    }
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
