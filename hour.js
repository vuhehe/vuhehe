function start(){
// Thiết lập thời gian đích
var countDownDate = new Date();
countDownDate.setMinutes(countDownDate.getMinutes() + 30);

// Cập nhật thời gian đếm ngược sau mỗi 1 giây
var x = setInterval(function() {

  // Lấy thời gian hiện tại
  var now = new Date().getTime();

  // Tính thời gian còn lại giữa thời gian đích và thời gian hiện tại
  var distance = countDownDate - now;

  // Tính toán số phút và giây còn lại
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị kết quả trong một thẻ HTML
  document.getElementById("countdown").innerHTML = minutes + " : " + seconds ;

  // Kiểm tra xem thời gian đã hết hay chưa
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Đã hết thời gian!";
  }
}, 1000);
}