var scripto = require('./scriptosenso');
var fs = require('fs');


var content;
// First I want to read the file
fs.readFile('./examples/sample-v2.scripto', function read(err, data) {
    if (err) {
        throw err;
    }
    var scobj = new scripto.Scripto();
    scobj.loadData(data);

    /* Test */

    var l = scobj.getScript()
    console.warn(l);


    var dat = scobj.getStringData();
    fs.writeFile("./examples/createdFile.scripto", dat, function(err) {
      if(err) {
        return console.log(err);
      }


      console.log("The file was saved!");
});
});



console.warn('hi');
