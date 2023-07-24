
app.controller('markCtrl', function ($scope) {
    let session = JSON.parse(sessionStorage.getItem("users"));
    $scope.listMark = []
    $scope.listMark = JSON.parse(localStorage.getItem(session.email));
    console.log($scope.listMark)

    $scope.delete = function (index) {
        // alert(index);
        let user = JSON.parse(sessionStorage.getItem("users"));
        let quizOver = JSON.parse(localStorage.getItem(user.email));
        quizOver.splice(index, 1);
        // Lưu lại mảng mới vào LocalStorage
        localStorage.setItem(user.email, JSON.stringify(quizOver));

        let quizList = document.getElementById("myElement");
        quizList.innerHTML = "";
        for (let i = 0; i < quizOver.length; i++) {
            quizList.insertAdjacentHTML("beforeend", "<li>" + quizOver[i] + "</li>");
        }
        
        // // Duyệt qua từng phần tử trong mảng quizOver
        // for (let i = 0; i < quizOver.length; i++) {
        //     // Tạo một thẻ div để chứa dữ liệu của phần tử
        //     let div = document.createElement("div");

        //     // Hiển thị thông tin của phần tử trong thẻ div
        //      div.innerHTML = quizOver;

        //     // Thêm thẻ div vào phần tử có id là "myElement"
        //     document.getElementById("myElement").appendChild(div);
        // }

    }
});