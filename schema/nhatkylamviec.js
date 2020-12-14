var mongoose =  require('mongoose');

var urlSchema = new mongoose.Schema({
  
  songayphep : { //có hoặc ko phếp
    type: Number,// định dạng.
    required: true,// bắt buộc có 
  },
  songaykhongphep : { //có hoặc ko phếp
    type: Number,// định dạng.
    required: true,// bắt buộc có 
  },

  songaycong : { 
    type: Number,// định dạng.
    required: true,// bắt buộc có 
  },
  idnhanvien : { // = ObjectId user
    type: String,// định dạng.
    required: true,// bắt buộc có 
  }
},{colletion:"nhatkylamviec"});
let url = module.exports = mongoose.model("nhatkylamviec", urlSchema)//cái này nhận cái model ở trên truyền vào và sử dụng cho collection tên là users. nó tự chuyển từ chỗ đặt ở đó thành số nhiều nên user sẽ thành users.