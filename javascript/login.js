
var app = angular.module('docsSimpleDirective', [])
app.controller('myCtrl', function ($scope) {
    $scope.info = {};
    $scope.list_acc = [];
    $scope.displayResetPass = false;
    $scope.displayFormLog = true;
    $scope.display = false;     // mở form đăng nhập
    $scope.log = function () {
        $scope.display = true;
        $scope.displayReg = true;

        $scope.displayFormLog = true;
        $scope.displayResetPass = false
    }
    // đăng nhập
    $scope.login = function () {
        var check = checkLogin($scope.info.email, $scope.info.uname, $scope.info.psw);
        if (check != null) {
            window.scrollTo(0, 0);
            $scope.myUser = true;
            // window.location = "Home.html";
            sessionStorage.setItem("users", angular.toJson(check));
        } else {
            alert("Tài Khoản Không Có");
        }
    }
    function checkLogin(email, us, pass) {
        for (var i = 0; i < $scope.list_acc.length; i++) {
            if ($scope.list_acc[i].email == email && $scope.list_acc[i].uname == us && $scope.list_acc[i].psw == pass) {
                return $scope.list_acc[i];
            }
        }
    }
    // đăng ký
    $scope.displayReg = true;
    $scope.infoReg = {};
    $scope.EnterPass;
    // khí ấn bạn chưa có tk
    $scope.register = function () {
        //displayReg ẩn hiển form đăng nhập đk
        $scope.displayReg = false;
    }
    $scope.dangky = function () {
        if ($scope.infoReg.psw != $scope.EnterPass) {
            alert("Mật Khẩu Không Khớp");
            return
        } else {
            if ($scope.list_acc.push(angular.copy($scope.infoReg)))
                // chuyển thành chuổi để lưu vào loco 
                localStorage.setItem("list_acc", angular.toJson($scope.list_acc));
            $scope.displayReg = true;
        }
    }
    if (localStorage.getItem("list_acc")) {
        // chuyển ngược lại từ chuổi thành đối tượng
        $scope.list_acc = angular.fromJson(localStorage.getItem("list_acc"));
    }
    // gọi hello
    let us = sessionStorage.getItem("users")
    $scope.myUser = JSON.parse(us);

    //đăng xuất 
    $scope.Out = function () {
        sessionStorage.removeItem("users");
        $scope.myUser = "";
    }
    // kiểm tra đã đn hay chưa đẻ lam quiz
    $scope.testQuiz = function () {
        alert("--");
    }
    console.log($scope.list_acc);

    // quên mật khẩu
    $scope.inforesetPass = {}
    $scope.resetPassword = function () {
        $scope.displayFormLog = false; // ẩn from đăng nhập đk
        $scope.displayResetPass = true; // hiện form update
        $scope.displayEmail = true; // hiện form check email
    }
    $scope.checkOK = function () {
        checkEmail($scope.inforesetPass.email);
    }
    function checkEmail(email) {
        let loco = localStorage.getItem('list_acc');
        if (loco != null) {
            let accounts = JSON.parse(loco);
            let emailExists = false;
            for (let i = 0; i < accounts.length; i++) {
                if (accounts[i].email === email) {
                    emailExists = true;
                    break;
                }
            }
            if (emailExists) {
                $scope.displayEmail = false;
            } else {
                alert('Email không đúng');
            }
        } else {
            alert('Danh sách tài khoản không tồn tại');
        }
    }

    $scope.update = function () {
        $scope.list = [];
        // check lại mật kk update
        if ($scope.inforesetPass.confimPass == $scope.inforesetPass.newPass) {
            // check otp vs random otp
            if ($scope.inforesetPass.confimOTP == $scope.otp) {
                $scope.list = JSON.parse(localStorage.getItem('list_acc'))
                for (let index = 0; index < $scope.list.length; index++) {
                    if ($scope.inforesetPass.email == $scope.list[index].email) {
                        $scope.list[index].psw = $scope.inforesetPass.newPass;
                        localStorage.removeItem('list_acc');
                        localStorage.setItem('list_acc', JSON.stringify($scope.list));
                        document.getElementById('erorConfimPass').innerHTML = ''
                        alert("Đổi Mật Khẩu Thành Công");
                        $scope.displayFormLog = true;
                        $scope.displayResetPass = false;
                        // $scope.inforesetPass = {}

                    }
                }
            } else {
                alert('Mã Xác Nhận Không Đúng')
            }
        }
        else {
            document.getElementById('erorConfimPass').innerHTML = 'Mật Khẩu Không Trùng Khớp'
        }
    }

    function OTP() {
        var code = '';
        var chars = '0123456789';
        for (var i = 0; i < 6; i++) {
            var randomIndex = Math.floor(Math.random() * chars.length);
            code += chars[randomIndex];
        }
        $scope.otp = code;
    }
    var code = '';
    var chars = '0123456789';
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        code += chars[randomIndex];
    }
    $scope.otp = code;

    $scope.resetOtp = function () {
        // alert("-++-");
        OTP();
    }

});