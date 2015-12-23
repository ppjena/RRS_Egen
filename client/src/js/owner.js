$(document).ready(function(){

   // generateList();
   // generateSeatingList();
   // generateContactList();
    //generateReservationList();


    $('[data-toggle="tooltip"]').tooltip();

    $('.collapse').on('shown.bs.collapse', function (e) {
        $('.collapse').not(this).removeClass('in');
    });



    $('[data-toggle=collapse]').click(function (e) {
        $('[data-toggle=collapse]').parent('li').removeClass('active');
        $(this).parent('li').toggleClass('active');
    });


    $("#editOwnerSubmit").click(function(){
        var date = $("#dateEditOwner").val();
        var time = $("#timeEditOwner").val();
        var size = $("#sizeEditOwner").val();

        if(date !=  "" && time != "" && size != "" ) {
            $('#form').validator().on('submit', function (e) {
                if (e.isDefaultPrevented()) {
                } else {
                }
            });
            $("#editScreenDiv").hide('slide', {direction: 'left'}, 300);
            $("#confirmEditOwnerDiv").show('slide', {direction: 'right'}, 900);
            $("#statusIDOwnerEdit").css("color", "green");
        }
    });



    $("#editExistReserv").click(function(){
        var confirm = $("#confirmCode").val();
        if(confirm != ""){
            $('#form').validator().on('submit', function (e) {
                if (e.isDefaultPrevented()) {
                } else {
                }
            });

            $("#createOwnerDiv").css("display","none");
            $("#edit_cancelScreenDiv").css("display","block");
        }
    });


    $("#editOwnerReservBtn").click(function(){
        var confirm = $("#confirmCode").val();
        if(confirm != ""){
            $('#form').validator().on('submit', function (e) {
                if (e.isDefaultPrevented()) {
                } else {
                }
            });

            $("#edit_cancelScreenDiv").hide('slide', {direction: 'left'}, 300);
            $("#editScreenDiv").show('slide', {direction: 'right'}, 900);
        }
    });


    $("#viewListBtn").click(function(){
        $("#reservList").css("display","block");
    });


    $("#viewReservListBtn").click(function(){
        $("#assignreservDiv").css("display","block");
    });


    $("#backOwnerBtn").click(function () {
        $("#confirmScreenDiv").hide('slide', {direction: 'right'}, 900);
        $("#createOwnerDiv").show('slide', {direction: 'left'}, 300);



    });


    $("#backBtnReserve").click(function(){
        $("#reservationDetails").css("display","none");
        $("#viewReservation").css("display","block");

    });




    $("#backBtnSeating").click(function(){
        $("#seatingReservationDetails").css("display","none");
        $("#seatingListDiv").css("display","block");

    });

    $("#backBtnContact").click(function(){
        $("#ReservationListofContact").css("display","none");
        $("#viewContactListDiv").css("display","block");

    });

    $("#backBtnAssignReserve").click(function(){

        $("#assignReservationTable").css("display","block");
        $("#asignreservationDetails").css("display","none");

    });

    $("#assignBtn").click(function(){
        $("#asignreservationDetails").css("display","none");
       // generateAssignTableList();
        $("#assigntablesDiv").css("display","block");
    });

    $("#changeTableBtn").click(function(){
        $("#reservationDetails").css("display","none");
      //  generateChangeTableList();
        $("#changeTableDiv").css("display","block");
    });



});
function editProfile(){
    $("#profileSettingDiv").hide('slide', {direction: 'left'}, 300);
    $("#editProfileDetailsDiv").show('slide', {direction: 'right'}, 900);

}

function hideView(){
        $("#assigntablesDiv").css("display","none");
        $("#assignReservationTable").css("display","block");
}

function hideChangeView(){
    $("#changeTableDiv").css("display","none");
    $("#viewReservation").css("display","block");
}

//function generateList(){
//    var markup = "";
//    var timeArr = ["7:00AM - 9:00AM","9:00AM - 12:00PM","11:30AM - 1:30PM","12:00PM - 2:00PM","2:00PM - 4:00PM","2:30PM - 4:30PM","6:00PM - 9:00PM"];
//    for (var i = 0; i < 7; i++){
//        markup += "<a id ='reservation"+i+"' onclick='viewDetailsofReservation()' href='#' class='list-group-item'>" +
//            "<h4 class='list-group-item-heading'>"+timeArr[i]+"</h4></a>";
//    }
//
//    $("#reservationList").html(markup);
//}

function viewDetailsofReservation(){
    $("#viewReservation").css("display","none");
    $("#reservationDetails").css("display","block");


}


//function generateReservationList(){
//    var markup = "";
//    var timeArr = ["7:00AM - 9:00AM","9:00AM - 12:00PM","11:30AM - 1:30PM","12:00PM - 2:00PM","2:00PM - 4:00PM","2:30PM - 4:30PM","6:00PM - 9:00PM"];
//    for (var i = 0; i < 7; i++){
//        markup += "<a id ='assignReservation"+i+"' onclick='viewDetailsofAssignReservation("+i+")' href='#' class='list-group-item'><h4 class='list-group-item-heading'>"+timeArr[i]+"</h4></a>";
//    }
//
//    $("#assignreservationList").html(markup);
//}

function viewDetailsofAssignReservation(){
    // alert("hello"+i);

    $("#assignReservationTable").css("display","none");
    $("#asignreservationDetails").css("display","block");


}


//function generateContactList(){
//    var markup = "";
//    var timeArr = ["9194357274","8334657227","9195276584","9893572351","9893572351","9195276545","945722856","8334657227","8334656754","9193458743"];
//    for (var i = 0; i < 10; i++){
//        markup += "<a id ='contactId"+i+"' onclick='viewReservationList("+i+")' href='#' class='list-group-item'><h4 class='list-group-item-heading'>"+timeArr[i]+"</h4></a>";
//    }
//
//    $("#viewContactList").html(markup);
//}

function viewReservationList(){
    $("#viewContactListDiv").css("display","none");
    $("#ReservationListofContact").css("display","block");

}


//function generateSeatingList(){
//    var markup = "";
//    var tableArr = ["Table 1","Table 2","Table 3","Table 4","Table 5", "Table 6","Table 7","Table 8","Table 9","Table 10"];
//    var confirmCodeArr = ["1234","4523","7684","2341","9857","7845","3425","8796","6758","4567"];
//    var sizeArr = ["4","9","5","13","11","8","7","5","6","8"];
//    var statusArr = ["confirmed","not available","confirmed","waiting","confirmed","confirmed","not available","waiting","not available","waiting"];
//    for (var i = 0; i < 10; i++){
//        markup += "<div class='list-group-item'><h4 class='list-group-item-heading'>"+tableArr[i]+"</h4><div class='row'><p class='col-sm-3 col-xs-3 col-md-3 col-lg-3'><label>Confirmation code: </label><a onclick='viewReserveDetail("+i+")' id='confirmCode"+i+"'>"+confirmCodeArr[i]+"</a></p><p class='col-sm-2  col-xs-2 col-md-2 col-lg-2'><label>Size:</label><label id='sizeId"+i+"'>"+sizeArr[i]+"</label></p><p class='col-sm-2  col-xs-2 col-md-2 col-lg-2'><label>Status:</label><label id='sizeId"+i+"'>"+statusArr[i]+"</label></p><p class='col-sm-2  col-xs-2 col-md-2 col-lg-2'><label>Since:</label><label id='sizeId"+i+"'>10:00AM</label></p></div></div>";
//    }
//
//    $("#seatingList").html(markup);
//
//}

function viewReserveDetail(){
    $("#seatingListDiv").css("display","none");
    $("#seatingReservationDetails").css("display","block");
}

function generateOwnerConfirmation(){
    //sessionStorage.setItem("createDivStats","set");
    var date = $("#dateOwner").val();
    var time = $("#timeOwner").val();
    var size = $("#sizeOwner").val();
    var contact = $("#contactOwner").val();
    if(date !=  "" && time != "" && size != "" && contact != "") {
        $('#form').validator().on('submit', function (e) {
            if (e.isDefaultPrevented()) {
            } else {
            }
        });
        $("#createOwnerDiv").hide('slide', {direction: 'left'}, 300);
        $("#confirmScreenDiv").show('slide', {direction: 'right'}, 900);
        $("#statusIDOwner").css("color", "orange");
    }
}

//function generateAssignTableList(){
//    var markup = "";
//    var tableArr = ["Table 1","Table 2","Table 3","Table 4","Table 5", "Table 6","Table 7","Table 8","Table 9","Table 10"];
//    var confirmCodeArr = ["1234","4523","7684","2341","9857","7845","3425","8796","6758","4567"];
//    var sizeArr = ["4","9","5","13","11","8","7","5","6","8"];
//    var statusArr = ["confirmed","not available","confirmed","waiting","confirmed","confirmed","not available","waiting","not available","waiting"];
//    for (var i = 0; i < 10; i++){
//        markup += "<div class='list-group-item'><h4 class='list-group-item-heading'>"+tableArr[i]+"</h4><div class='row'><p class='col-sm-4  col-xs-4 col-md-4 col-lg-4'><label>Duration:</label><label id='tableTimeId"+i+"'>10:00AM - 2:00PM</label></p><p class='col-sm-2  col-xs-2 col-md-2 col-lg-2'><label>Size:</label><label id='tableSizeId"+i+"'>"+sizeArr[i]+"</label></p><p class='col-sm-2  col-xs-2 col-md-2 col-lg-2'><label>Status:</label><label id='tableStatusId"+i+"'>"+statusArr[i]+"</label></p><p class='col-sm-3 col-xs-3 col-md-3 col-lg-3'><button class='btn btn-info' type='button' onclick='selectTable("+i+")' id='selectBtn"+i+"'>Select</button></p></div></div>";
//    }
//
//    $("#assignTablesList").html(markup);
//
//}

//function generateChangeTableList(){
//    var markup = "";
//    var tableArr = ["Table 1","Table 2","Table 3","Table 4","Table 5", "Table 6","Table 7","Table 8","Table 9","Table 10"];
//    var confirmCodeArr = ["1234","4523","7684","2341","9857","7845","3425","8796","6758","4567"];
//    var sizeArr = ["4","9","5","13","11","8","7","5","6","8"];
//    var statusArr = ["confirmed","not available","confirmed","waiting","confirmed","confirmed","not available","waiting","not available","waiting"];
//    for (var i = 0; i < 10; i++){
//        markup += "<div class='list-group-item'><h4 class='list-group-item-heading'>"+tableArr[i]+"</h4><div class='row'><p class='col-sm-4  col-xs-4 col-md-4 col-lg-4'><label>Duration:</label><label id='tableTimeId"+i+"'>10:00AM - 2:00PM</label></p><p class='col-sm-2  col-xs-2 col-md-2 col-lg-2'><label>Size:</label><label id='tableSizeId"+i+"'>"+sizeArr[i]+"</label></p><p class='col-sm-2  col-xs-2 col-md-2 col-lg-2'><label>Status:</label><label id='tableStatusId"+i+"'>"+statusArr[i]+"</label></p><p class='col-sm-3 col-xs-3 col-md-3 col-lg-3'><button class='btn btn-info' type='button' onclick='changeTable("+i+")' id='selectBtn"+i+"'>Select</button></p></div></div>";
//    }
//
//    $("#changeTableList").html(markup);
//
//}