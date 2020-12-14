var mongoose =  require('mongoose');

var fileSv = new mongoose.Schema({
  	idnhanvien : {
    	type: String,// định dạng.
    	required: true// bắt buộc có 
    },
   	path: {
   		type: String,
   		required:true
   	},
   	time: {
   		type: String,
   		required:true
   	},
  },{colletion:"filebaocao"});
let file = module.exports = mongoose.model("filebaocao", fileSv)