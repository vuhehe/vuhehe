// var app = angular.module('docsSimpleDirective', [])
app.controller('AdminCtrl', function ($scope) {
    $scope.display = false;
    let acc = sessionStorage.getItem("users");
    $scope.acount = acc;
    $scope.list_acc = localStorage.getItem('list_acc');
    $scope.info = {};
    
    $scope.index = -1;
    $scope.confim = function () {
        var obj = JSON.parse(acc);
        $scope.acc = obj;

        // $scope.index = index;        
        if ($scope.info.Password == obj.psw) {
            $scope.display = true;
        } else {
            document.getElementById("checkPass").innerHTML = 'Mật khẩu không đúng';

        }
    }
    $scope.update = function () {
        // check xem mã xác nhận
        if ($scope.info.myConfim == $scope.otp) {
            // check xem mật khẩu mới có giống nhau k 
            if ($scope.info.confimPass == $scope.info.newPass) {
                document.getElementById("checkMXN").innerHTML = '';
                document.getElementById("checkMk").innerHTML = '';
                $scope.list = []
                // chuyển về đối tượng
                $scope.list = JSON.parse(localStorage.getItem('list_acc'))
                $scope.Usesion = JSON.parse(sessionStorage.getItem("users"));
                for (let i = 0; i < $scope.list.length; i++) {
                    if ($scope.info.Password == $scope.list[i].psw && $scope.Usesion.uname == $scope.list[i].uname) {
                        $scope.list[i].psw = $scope.info.newPass
                        if ($scope.info.us == null) {
                            $scope.list[i].uname = $scope.Usesion.uname;
                        } else {
                            $scope.list[i].uname = $scope.info.us
                        }

                        localStorage.removeItem('list_acc')
                        localStorage.setItem('list_acc', JSON.stringify($scope.list))

                        sessionStorage.removeItem('users')
                        sessionStorage.setItem('users', JSON.stringify($scope.list[i]))
                        alert('Thay đổi thành công');
                        $scope.info = {}
                        return;
                    }
                }
            } else {
                document.getElementById("checkMk").innerHTML = 'mật khẩu không trùng khớp';
            }

        } else {
            document.getElementById("checkMXN").innerHTML = 'Mã xác nhận không trùng khớp';

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