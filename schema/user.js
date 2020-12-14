var mongoose =  require('mongoose');

var urlSchema = new mongoose.Schema({// sẽ tự tạo ra OBJECTID -> nhét vào idnv của NKLV
  username : {
    type: String,// định dạng.
    // required: true// bắt buộc có name
  },
  password : {
    type: String,
    // required: true
  },
  role : {
    type: String
  },
 
},{colletion:"user"});

let url = module.exports = mongoose.model("user", urlSchema)//cái này nhận cái model ở trên truyền vào và sử dụng cho collection tên là users. nó tự chuyển từ e đặt ở đó thành số nhiều nên user sẽ thành users.