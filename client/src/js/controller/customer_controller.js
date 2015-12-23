var app = angular.module('RRS', []);
app.controller('customerController', function($scope,$http) {

    $scope.getReservation = function(){
        var confirmationCode = $scope.confirmCode;
        $http.get("http://localhost:8080/RRS_App/api/reservation/reservation/"+confirmationCode)
            .then(function(response)
                {
                    $scope.res = response.data;
                }
            );
    }


    $scope.editReservation = function(){

        var data = "confirmationcode="+$scope.res.reservationStatus.confirmationCode+"&date="+$scope.res.date+"&time="+$scope.res.time+
            "&partySize="+$scope.res.partySize+"&contactNumber="+$scope.res.contactNumber;
        $http.put("http://localhost:8080/RRS_App/api/reservation/edit?"+data)
            .then(function(response)
                {
                    $scope.res = response.data;
                }
            );
    }

    $scope.createReservation = function(){

        var data = "date="+$scope.res.date+"&time="+$scope.res.time+
            "&partySize="+$scope.res.partySize+"&contactNumber="+$scope.res.contactNumber;
        alert(data)
        $http.post("http://localhost:8080/RRS_App/api/reservation/create?"+data)
            .then(function(response)
                {
                    $scope.res = response.data;
                }
            );
    }

});

