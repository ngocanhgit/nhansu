var mongoose =  require('mongoose');

var urlSchema = new mongoose.Schema({// sẽ tự tạo ra OBJECTID -> nhét vào idnv của NKLV
  
  tenvitri : {///
    type: String
  },
  trangthai: {
    type:Boolean,
    required: true
  },
  ngaybatdau : {
    type: Number,//
    required: true
  },
  tennhanvien : {
    type: String,
    required: true
  },
  hinhanh : {
    type: String,
  },
  gioitinh: {
    type: Boolean,
    required: true,
  },
  sodienthoai : {
    type: String,
    required: true,// 
  },
  email : {
    type: String,
    required: true,//
  },
  diachi : {
    type: String,
    required: true
  },
  ngaysinh : {
    type: Number,
    required: true
  },
  quequan : {
    type: String,
    required: true
  },
  trinhdo : {
    type: String,
    required: true
  },
  chuyenmon : {
    type: String,
    required: true
  },
  ngayketthuc : {
    type: Number
  },
  loaihopdong : {//Boolean
    type: String
  },
  ngaykyhopdong: {
    type: Number
  },
  ngayketthuchopdong : {
    type: Number
  },
  noidunghopdong : {
    type: String
  },
  mucluong : { 
    type: Number
  },
  mucheso : {
    type: Number
  },
  luongthuong : {
    type: Number
  },
  ghichuthuong:{
  	type: String
  },
  dantoc:{
  	type: String,
  	required: true
  }
},{colletion:"nhanvien"});

let url = module.exports = mongoose.model("nhanvien", urlSchema)//cái này nhận cái model ở trên truyền vào và sử dụng cho collection tên là users. nó tự chuyển từ e đặt ở đó thành số nhiều nên user sẽ thành users.