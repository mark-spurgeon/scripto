

var fs = require('fs');
var Mustache = require('mustache');

var expressionsInfo = require('../src/expressions.js');
var packInfo = require('../package.json');

// Generate expressions.md

fs.readFile('./docs-scripts/_expressions.md', function read(err, dat) {
  if (err) {
    console.log("error");
    return console.log(err);
  };
  var list = []
  var keys = Object.keys(expressionsInfo.ScriptoExpressionDictionary);
  for (var i = 0; i < keys.length; i++) {
    keys[i]
    list.push({
      type: keys[i],
      description:expressionsInfo.ScriptoExpressionDictionary[keys[i]]
    })
  }
  var rendered = Mustache.render(dat.toString(), {expressions:list, version:packInfo.version});

  /* Create dir */
  try {
    fs.mkdir('./docs/'+packInfo.version+'/', function(err){if(err){console.log('docs : directory already exists');};})
  } catch (e) {
  }

  fs.writeFile('./docs/'+packInfo.version+'/expressions.md',rendered, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("alright");
    }
  })
})

fs.readFile('./docs-scripts/_ideas.md', function read(err, dat) {
  if (err) {
    console.log("error");
    return console.log(err);
  };

  var rendered = Mustache.render(dat.toString(), {version:packInfo.version});

  fs.writeFile('./docs/'+packInfo.version+'/ideas.md',rendered, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("alright");
    }
  })
})
fs.readFile('./docs-scripts/_file.md', function read(err, dat) {
  if (err) {
    console.log("error");
    return console.log(err);
  };
  fs.readFile('./examples/sample-latest.scripto', function read(err, script) {
    if (err) {
      console.log("error");
      return console.log(err);
    };
    var rendered = Mustache.render(dat.toString(), {fileExample:script.toString(),version:packInfo.version});
    fs.writeFile('./docs/'+packInfo.version+'/file.md',rendered, function(err){
      if (err) {
        console.log(err);
      } else {
        console.log("alright");
      }
    })
  })
})

fs.readFile('./docs-scripts/_readme.md', function read(err, dat) {
  if (err) {
    console.log("error");
    return console.log(err);
  };
  var rendered = Mustache.render(dat.toString(), {version:packInfo.version});


  fs.writeFile('./README.md',rendered, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("alright");
    }
  })
})
