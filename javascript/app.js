var app = angular.module('myApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: "home.html",
            // controller : 'trangchuCtrl'
        })
        .when('/sub', {
            templateUrl: 'sub.html',
            controller: 'subjectCtrl'
        })
        .when('/quiz/:id/:name', {
            templateUrl: 'quizApp.html',
            controller: 'quizsCtrl'
        })
        .when('/PageUs', {
            templateUrl: 'personalPage.html',
        })
        .when('/hisMark', {
            templateUrl: '../pageMark/HistoryMark.html',
            controller: 'markCtrl'
        })
});

app.controller('quizsCtrl', function ($scope, $http, $routeParams, quizFactory) {
    $http.get('../tainguyen/' + $routeParams + '.js').then(function (res) {
        quizFactory.questions = res.data;
    });
});

// đẩy sub
app.controller('subjectCtrl', function ($scope, $http) {
    $scope.list_subject = [];
    $http.get('../tainguyen/Subjects.js').then(function (res) {
        $scope.list_subject = res.data;
    });
});

app.directive('quizfpoly', function (quizFactory, $routeParams) {
    return {
        restrict: 'AE',
        scope: {},
        templateUrl: 'template-quiz.html',
        link: function (scope, elem, attrs, $scope, $interval) {
            scope.start = function () {
                quizFactory.getQuestions().then(function () {
                    scope.id = 0;
                    scope.NameQuiz = $routeParams.name;
                    scope.phottoQuiz = $routeParams.Logo;
                    scope.quizOver = false; // chưa hoàn thành
                    scope.inProgess = true;
                    // console.log($scope.idSub);
                    // gọi đồng hô
                    start();
                    scope.getQuestion();
                })
            }

            scope.resert = function () {
                scope.inProgess = false;
                scope.mark = 0;
            };

            scope.getQuestion = function () {
                var quiz = quizFactory.getQuestion(scope.id);
                if (quiz) {
                    scope.question = quiz.Text;
                    scope.options = quiz.Answers;
                    scope.answer = quiz.AnswerId;
                    scope.answerMode = true;
                } else {
                    // két thúc quiz
                    scope.inProgess = false;
                    scope.quizOver = true;
                    if (!scope.list_Mark) {
                        scope.list_Mark = []
                    }

                    // lưu lịch sử xuống loco
                    let user = JSON.parse(sessionStorage.getItem("users"));
                    // lưu ngày làm
                    scope.currentDate = new Date();
                    scope.currentDay = scope.currentDate.getDate();
                    scope.currentMonth = scope.currentDate.getMonth() + 1;
                    scope.currentYear = scope.currentDate.getFullYear();
                    let obj = {
                        subject: scope.NameQuiz,
                        mark: scope.mark,
                        day: scope.currentDay + "/" + scope.currentMonth + "/" + scope.currentYear,

                    };
                    let quizOver = JSON.parse(localStorage.getItem(user.email)) || [];
                    quizOver.push(angular.copy(obj));
                    console.log(quizOver);
                    localStorage.setItem(user.email, angular.toJson(quizOver));
                }
            }

            console.log(scope.list_Mark);
            scope.checkAnswer = function () {
                if (!$('input[name = answer]:checked').length) return;
                var ans = $('input[name = answer]:checked').val();
                if (ans == scope.answer) {
                    scope.mark++;
                    scope.correcAns = true; // thông báo sai đúng
                } else {
                    scope.correcAns = false;
                };
                scope.answerMode = false;
            };
            scope.nextQuestion = function () {
                scope.id++;
                scope.getQuestion();
            }
            scope.resert();
        }
    }
});
app.factory('quizFactory', function ($http, $routeParams) {
    return {
        // chọn quiz làm theo id
        getQuestions: function () {
            return $http.get('../tainguyen/' + $routeParams.id + '.js').then(function (res) {
                questions = res.data; // phản hồi lưu trử 
            });
        },
        // số câu
        getQuestion: function (id) {
            var radomItem = questions[Math.floor(Math.random() * questions.length)]
            var count = questions.length;

            if (count > 10) {
                count = 10;
            }
            if (id < count) {
                return radomItem;
            } else {
                return false;
            }
        }
    }
});

