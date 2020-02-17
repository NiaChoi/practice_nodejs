var testFolder = './web1_html/data';
var fs = require('fs');

fs.readdir(testFolder, function(error,filelist){
    console.log(filelist);
})