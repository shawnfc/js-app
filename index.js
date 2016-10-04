var fs = require('fs'),
    path = require('path');

//create a ref to documents folder
var directory = "./documents";

console.log("Start");

fs.readdir(directory, function (err, files) {
    if(err) {
        console.err(err);
        return;
    }

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        console.log(file);

        var fileContentsBuffer = fs.readFileSync(path.join(directory, file));

        console.log(fileContentsBuffer.toString())

    }
});

console.log("End");
