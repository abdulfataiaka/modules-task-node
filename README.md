# Working with Node modules

In this project, you will encounter and/or use the following
- Importing and exporting modules in Node
- Using a third-party module in a project
- JSON Data format and parsing to Javascript objects

## Convections / Coding Styles

- Ensure you appropriately name your functions, classes and modules using the expected naming convections
- Ensure to be consistent with usage of string quotes. Lets stick with using single quotes except in situations where double quotes are required

## Project Description

In this project, your will be building a tool for extracting data from strings in JSON format. Since huge string processing is expensive, you will be relying on the NPM module [parse-json](https://www.npmjs.com/package/parse-json) for converting JSON strings into JavaScript objects for you to easily work with the data.

You are expected to complete the `DataParser` class in `src/dataParser.js` which will accept a JSON string containing the data we are interested in during instantiation and provide us with methods to use in extracting specific data.

As an illustration, assume that we have the JSON string of phones data below

```json

{
    "iphone": {
        "model": "IPhone X",
        "price": 53000
    },
    "infinix": {
        "model": "Infinix HOT4",
        "price": 133000
    }
}

```

It will make sense for us to say we want to get details of `iphone` or details of `infinix`. This is where the `DataParser` class comes in.

```javascript

const data = '<json-string-data-descirbed-above>';

// Initialize DataParser with data to be parsed
const parser = DataParser(data);

//============ Testing IPhone

// We should be able to get the details of iphone by calling method named `iphone` in the parser
const result = parser.iphone();

// The above method call should return a javascript object representing the details of iphone
console.log(result); // { model: 'IPhone X', price: 53000 }

//============ Testing Infinix

// We should be able to get the details of infinix by calling method named `infinix` in the parser
const result = parser.infinix();

// The above method call should return a javascript object representing the details of infinix
console.log(result); // { model: 'Infinix HOT4', price: 133000 }

//============ NOTICE

// Note that the methods called on the parser object are synonymous to the keys of the
// mappings in the JSON data above

```

The data you will be working on in this project has been predefined in the `src/data.json` file. Take a look at the file to see the data in there - It contains a JSON object holding details of programming languages (Note, they are fake data)

Note that the `index.js` script at the root of the project is there to only provide additional illustration of how someone will make use of the `DataParser` class you must have defined, so feel free to update it to experiment on your implementations

## Delivery Requirements

- Create a PR template of your choice into the `.github` folder to be used for PRs you will raise later
- Initialize the project as a Node package using Yarn to allow for third-party modules installation and management
- Install the `parse-json` module using Yarn into the project for later use
- Complete the implementation of the project description in the above section
- Do not use the built-in javascript JSON object, instead rely on using the third-party module `parse-json`
- Do not push the following folders to Github by simply ignoring them in the `.gitignore` file (`node_modules` and `.vscode`)
- When done, Raise a PR with a good title and body structured based on the content of the PR template you created at the beginning
