var scripto = require('./scriptosenso');
var fs = require('fs');


var content;
// First I want to read the file
fs.readFile('./examples/sample.scripto', function read(err, data) {
    if (err) {
        throw err;
    }
    var scobj = new scripto.Scripto(data);

    var dat = scobj.generateDataString();
    fs.writeFile("./examples/createdFile.scripto", dat, function(err) {
      if(err) {
        return console.log(err);
      }


      console.log("The file was saved!");
});
});



console.warn('hi');