var app = angular.module('RRS', []);
app.controller('ownerController', function($scope,$http) {

    $scope.getReservationForOwner = function(){
        var confirmationCode = $scope.confirmOwnerCode;
        $http.get("http://localhost:8080/RRS_App/api/reservation/reservation/"+confirmationCode)
            .then(function(response)
                {
                    $scope.res = response.data;
                }
            );
    }


    $scope.editReservationForOwner = function(){

        var data = "confirmationcode="+$scope.res.reservationStatus.confirmationCode+"&date="+$scope.res.date+"&time="+$scope.res.time+
            "&partySize="+$scope.res.partySize+"&contactNumber="+$scope.res.contactNumber;
        $http.put("http://localhost:8080/RRS_App/api/reservation/edit?"+data)
            .then(function(response)
                {
                    $scope.res = response.data;
                }
            );
    }

    $scope.createReservationForOwner = function(){

        var data = "date="+$scope.res.date+"&time="+$scope.res.time+
            "&partySize="+$scope.res.partySize+"&contactNumber="+$scope.res.contactNumber;
        $http.post("http://localhost:8080/RRS_App/api/reservation/create?"+data)
            .then(function(response)
                {
                    $scope.res = response.data;
                }
            );
    }

    $scope.getReservationList = function(){
        $http.get("http://localhost:8080/RRS_App/api/owner/listReservations/"+$scope.date)
            .then(function(response)
                {
                    $scope.reservations = response.data;
                    //alert(response.data[0].date);
                }
            );
    }


    $scope.setRes = function(clicked){
        $scope.res=clicked;
        if($scope.res.tableName == null){
            $scope.res.tableName = "Not"
        }
    }

    $scope.getContactList = function(){
        $http.get("http://localhost:8080/RRS_App/api/owner/contactList")
            .then(function(response)
                {
                    $scope.contacts = response.data;
                  //  alert(response.data[0]);
                }
            );
    }

    $scope.getResForContact = function(contactNumber){
        $http.get("http://localhost:8080/RRS_App/api/owner/reservationsForContact/"+contactNumber)
            .then(function(response){
                    $scope.reservations = response.data;
                  //  alert(response.data[0].date);
            });

    }


    $scope.getReservationListForTables = function(){
        $http.get("http://localhost:8080/RRS_App/api/owner/listReservations/"+$scope.date)
            .then(function(response)
                {
                    $scope.reservations = response.data;
                    //alert(response.data[0].date);
                }
            );
    }


    $scope.setResforTables = function(clicked){
        $scope.res=clicked;
        if($scope.res.tableName == null){
            $scope.res.tableName = "Not"
        }
    }


    $scope.getProfile = function(){
        $http.get("http://localhost:8080/RRS_App/api/owner/getProfile")
            .then(function(response)
                {
                    $scope.profileDetail = response.data;
                }
            );
    }

    $scope.editProfile = function(){

        var autoAssign = 0;
        if($scope.profileDetail.autoAssignNew){
            autoAssign = 1;
        }
        var data = "name="+$scope.profileDetail.name+"&contact="+$scope.profileDetail.contact+"&email="+$scope.profileDetail.email+
            "&address="+$scope.profileDetail.address+"&autoAssign="+autoAssign+"&opening="+$scope.profileDetail.opening+
            "&closing="+$scope.profileDetail.closing+"&openDays="+$scope.profileDetail.openingDays;

        $http.put("http://localhost:8080/RRS_App/api/owner/editProfile?"+data)
            .then(function(response)
                {
                    $scope.setProfile = response.data;
                }
            );
    }

    $scope.getTableList = function(res){
        $http.get("http://localhost:8080/RRS_App/api/owner/tableList/"+res.date)
            .then(function(response)
                {
                    $scope.tableDetails = response.data;
                    $scope.tableDetails.confirmationCodeSelected = res.reservationStatus.confirmationCode;
                   // alert(response.data[0].time);
                }
            );
    }

    $scope.getTableListForToday = function(){
        var today = new Date();
        today = today.format("dd-mm-yyyy");

        $http.get("http://localhost:8080/RRS_App/api/owner/tableList/"+today)
            .then(function(response)
                {
                    $scope.tableDetails = response.data;
                }
            );
    }
    $scope.selectTable = function(confirmationCode,tableName){
        var data = "confirmationCode="+confirmationCode+"&tableName="+tableName;
        $http.put("http://localhost:8080/RRS_App/api/owner/assignTable?"+data)
            .then(function(response)
                {
                    // nothing to do here.
                }
            );
    }

});

