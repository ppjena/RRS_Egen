var app = angular.module('RRS', []);
app.controller('loginController', function($scope,$http,$window) {

    $scope.login = function () {
        var data = "username="+$scope.username+"&password="+$scope.pwd;
        if ($scope.username && $scope.pwd) {
        $http.post("http://localhost:8080/RRS_App/api/owner/login?"+data)
            .then(function(response)
                {
                    $scope.res = response.data;
                    alert(response.data);
                    if(response.data != null){
                        alert("in if");
                        $window.location.href = '../html/owner_dashboard.html';
                    }
                    else{
                        alert('Wrong credentials')
                    }
                }
            );
    }
        else{
            alert("All fields are necessary");
        }
    }
});