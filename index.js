const fs = require('fs');
const DataParser = require('./src/dataParser'); //-? Also import the DataParser class

//+ This line loads in the content of data.json as a json string
//+ You can console.log data to see the content and datatype
//+ Feel free to ignore this line for now and ask questions later
const data = fs.readFileSync('src/data.json');

//+ Here, we are initializing the parser class with the data
//+ This is to enable us access methods defined in the class to perform necessary operations
const parser = new DataParser(data);

let result;

//+ I want to get details about python
//+ The result should be a JavaScript object containing details of python
result = parser.python();
console.log(result);

//+ I want to get details about golang
//+ The result should be a JavaScript object containing details of golang
result = parser.golang();
console.log(result);
