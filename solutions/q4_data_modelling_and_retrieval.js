// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
const fruitArray = [
    
    { name: "orange", color: 'orange',pricePerKg:40 },
    { name: "apple", color: 'red',pricePerKg:80 },
    { name: "mango", color: 'green',pricePerKg:50 },
    { name: "grapes", color: 'black',pricePerKg:30 }
    
  ];

const fetchObject = (fruitArray1, keyField) => 
	
    fruitArray1.reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
      }, {});

const fruitObj = fetchObject(fruitArray, 'name');
console.log(fruitObj); 
console.log(fruitObj.mango);
