//-? Import parse-json and other modules as neccessary here
const parseJson = require('parse-json');
const fs       = require('fs');

class DataParser {
  constructor(data) {
    //++ Add your implementations here if necessary
    this.data = data;
    //+ Feel free to ignore the below lines for now and ask questions later
    this.php = this.php.bind(this);
    this.java = this.java.bind(this);
    this.python = this.python.bind(this);
    this.golang = this.golang.bind(this); 
  }

  php() {
    //++ Add your implementations here if necessary
    const jsonFile = fs.readFileSync('./src/data.json', 'utf8');
    return parseJson(jsonFile)['php'];
  }

  java() {
    //++ Add your implementations here if necessary
    const jsonFile = fs.readFileSync('./src/data.json', 'utf8');
    return parseJson(jsonFile)['java'];
  }

  python() {
    //++ Add your implementations here if necessary
    const jsonFile = fs.readFileSync('./src/data.json', 'utf8');
    return parseJson(jsonFile)['python'];
  }

  golang() {
    //++ Add your implementations here if necessary
    const jsonFile = fs.readFileSync('./src/data.json', 'utf8');
    return parseJson(jsonFile)['python'];
  }
}

//-? Ensure to export the DataParser class for use in the index.js script
module.exports = DataParser;
