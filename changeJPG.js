let fs = require('fs');
var Jimp = require("jimp");
const pngToJpeg = require('png-to-jpeg');
var async = require('async');

var filename = "";


fs.readdir('.', function(err, files){
  if (err) throw err;
  console.log(files);
  for(var i = 0; i < files.length; i++){
  	if(files[i].indexOf(".jpg") != -1 || files[i].indexOf(".js") != -1 || files[i].indexOf("jpeg")){
  		console.log("No Change");
	}else{
		console.log("change" + files[i]);
		filename = files[i].replace(".png","")
	  	var buffer = fs.readFileSync(files[i]);
		pngToJpeg({quality: 90})(buffer)
		.then(output => fs.writeFileSync(filename + ".jpeg", output));
	}
  	/*
  	Jimp.read(files[i], function (err, lenna) {
		console.log(files[i])
		console.log(i)
		if (err) throw err;
		files[i] = files[i].replace(".jpg","")
		files[i] = files[i].replace(".png","")
		files[i] = files[i].replace(".jpeg","")
		lenna.resize(256, 256).write(files[i] + ".jpg"); // save
  	});
  	*/
  }
});