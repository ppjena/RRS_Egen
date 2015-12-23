$(document).ready(function(){



        $('[data-toggle="tooltip"]').tooltip();

    $('.collapse').on('shown.bs.collapse', function (e) {
        $('.collapse').not(this).removeClass('in');
    });



    $('[data-toggle=collapse]').click(function (e) {
        $('[data-toggle=collapse]').parent('li').removeClass('active');
        $(this).parent('li').toggleClass('active');
    });


    $("#editBtn").click(function(){
       var confirm = $("#confirmCode").val();
        if(confirm != ""){
            $('#form').validator().on('submit', function (e) {
                if (e.isDefaultPrevented()) {
                } else {
                }
            });

            $("#edit_cancelDiv").hide('slide', {direction: 'left'}, 300);
            $("#editDiv").show('slide', {direction: 'right'}, 900);
        }
    });




    $("#createMenu").click(function(){

           $("#confirmDiv").hide();
           $("#createDiv").show();

    });

    $("#editMenu").click(function(){

        $("#editDiv").hide();
        $("#confirmEditDiv").hide();
        $("#edit_cancelDiv").show();


    });

    $("#editSubmit").click(function(){
        var date = $("#dateEdit").val();
        var time = $("#timeEdit").val();
        var size = $("#sizeEdit").val();

        if(date !=  "" && time != "" && size != "" ) {
            $('#form').validator().on('submit', function (e) {
                if (e.isDefaultPrevented()) {
                } else {
                }
            });
            $("#editDiv").hide('slide', {direction: 'left'}, 300);
            $("#confirmEditDiv").show('slide', {direction: 'right'}, 900);
            $("#statusIDEdit").css("color", "green");
        }
    });





    $("#backBtn").click(function () {
        $("#confirmDiv").hide('slide', {direction: 'right'}, 100);
        $("#createDiv").show('slide', {direction: 'left'}, 900);

    });


});


function generateConfirmation(){
    //sessionStorage.setItem("createDivStats","set");
    var date = $("#date").val();
    var time = $("#time").val();
    var size = $("#size").val();
    var contact = $("#contact").val();
    if(date !=  "" && time != "" && size != "" && contact != "") {
        $('#form').validator().on('submit', function (e) {
            if (e.isDefaultPrevented()) {
            } else {
            }
        });
        $("#createDiv").hide('slide', {direction: 'left'}, 300);
        $("#confirmDiv").show('slide', {direction: 'right'}, 900);
        $("#statusID").css("color", "orange");
    }
}



