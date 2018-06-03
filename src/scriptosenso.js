
var acceptedTags = {
  filespec:[
    "# scripto ",
    "#scripto ",
    "# SCRIPTO ",
    "#SCRIPTO "
  ],
  meta: [
    "# meta :",
    "#meta :",
    "#meta:",
    "# META :",
    "#META :",
    "#META:",
  ],
  global: [
    "# global :",
    "#global :",
    "#global:",
    "# GLOBAL :",
    "#GLOBAL :",
    "#GLOBAL:",
  ],
  script: [
    "# script :",
    "#script :",
    "#script:",
    "# SCRIPT :",
    "#SCRIPT :",
    "#SCRIPT:",
  ]
}

function stringToData(stringData) {

  /* DATA OBJECT */
  var ScriptoData = {
    file: {
      version:"0.0.1", //very first version,
      url:"https://google.com"
    },
    meta: {},
    global: {},
    script:""
  }

  /* Split Data */
  var filespeclist = []
  for (var i = 0; i < acceptedTags.filespec.length; i++) {
    if (stringData.indexOf(acceptedTags.filespec[i])>=0){
      filespeclist.push(acceptedTags.filespec[i])
    }
  }
  if (filespeclist.length!=1) {
    console.warn('Warning : more than one filespec');
  } else {
    console.warn('filespec: OK');
  }
  var filespec = filespeclist[0]

  var fileReg = RegExp(filespec+"(.*)\n").exec(stringData);
  ScriptoData.file.version = fileReg[1].split(' ')[0];
  ScriptoData.file.url = fileReg[1].split(' ')[1];

  /* Metadata */

  var metalist = []
  for (var i = 0; i < acceptedTags.meta.length; i++) {
    if (stringData.indexOf(acceptedTags.meta[i])>=0){
      metalist.push(acceptedTags.meta[i])
    }
  }
  if (metalist.length!=1) {
    console.warn('Warning : more than one meta');
  } else {
    console.warn('meta: OK');
  }
  var meta = metalist[0];
  var metaReg = RegExp(meta+"(.*)\n").exec(stringData);

  var globallist = []
  for (var i = 0; i < acceptedTags.global.length; i++) {
    if (stringData.indexOf(acceptedTags.global[i])>=0){
      globallist.push(acceptedTags.global[i])
    }
  }
  if (globallist.length!=1) {
    console.warn('Warning : more than one global');
  } else {
    console.warn('global: OK');
  }
  var global_ = globallist[0];
  var globalReg = RegExp(global_+"(.*)\n").exec(stringData);

  var scriptlist = []
  for (var i = 0; i < acceptedTags.script.length; i++) {
    if (stringData.indexOf(acceptedTags.script[i])>=0){
      scriptlist.push(acceptedTags.script[i])
    }
  }
  if (scriptlist.length!=1) {
    console.warn('Warning : more than one meta');
  } else {
    console.warn('script: OK');
  }
  var script = scriptlist[0];
  var scriptReg = RegExp(script+"(.*)\n").exec(stringData);

  var metaData = stringData.toString().split(metaReg[0])[1].split(globalReg[0])[0];
  var globalData= stringData.toString().split(metaReg[0])[1].split(globalReg[0])[1].split(scriptReg[0])[0];
  var scriptData = stringData.toString().split(metaReg[0])[1].split(globalReg[0])[1].split(scriptReg[0])[1].trim();

  ScriptoData.meta =  JSON.parse(metaData);
  ScriptoData.global =  JSON.parse(globalData);
  ScriptoData.script = scriptData;
  return ScriptoData;
}

function dataToString(data) {
  var ScriptoString = "";
  /* File data */
  ScriptoString = acceptedTags.filespec[0]+" "+data.file.version+" "+data.file.url+"\n\n";

  /* Meta data */
  ScriptoString += acceptedTags.meta[0]+"\n \n" + JSON.stringify(data.meta, null, 2)+"\n\n";
  /* Global data */
  ScriptoString += acceptedTags.global[0]+"\n \n" + JSON.stringify(data.global, null, 2)+"\n\n";
  /* Script data */
  ScriptoString += acceptedTags.script[0]+"\n \n" + data.script+"\n\n";
  return ScriptoString;
}


function Scripto(stringData) {
  this.data = stringToData(stringData);
  this.generateDataString = function () {return dataToString(this.data)};
  this.getMetaData = function () {return this.data.meta};
  this.getGlobalData = function () {return this.data.global};
  this.getScriptRaw = function () {return this.data.script};
}
/*Scripto.prototype.getString = function () {
  return dataToString(this.data);
}*/

module.exports = {
  Scripto: Scripto
}
