var mongoose =  require('mongoose');

var urlSchema = new mongoose.Schema({
  thoigian : {
    type: Number,// định dạng. lay gia tri ngay hientai
    required: true,// bắt buộc có 
  },
  
  {colletion:"chamcong"});
let url = module.exports = mongoose.model("chamcong.", urlSchema)//cái này nhận cái model ở trên truyền vào và sử dụng cho collection tên là users. nó tự chuyển từ chỗ đặt ở đó thành số nhiều nên user sẽ thành users.