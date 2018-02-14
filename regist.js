$(document).ready(function () {
    var checkemail1=false;


    $("input[type=button]").click(function () {
       rez();

    });
   //alert("test");
    function rez() {
        var name=$("#name").val();
        var login=$("#login").val();
        var pass1=$("#password1").val();
        var pass2=$("#password2").val();
        var email=$("#email").val();
        var phone=$("#tel").val();
     //   var avatar1=$("#photo1").val();
        // var avatar2=$("#photo2").val();

       $.ajax({
            type:"POST",
            url:"regist.php",
            data:{name:name,login:login,pass1:pass1,pass2:pass2,email:email,phone:phone},
success:function (rezult) {
    alert(rezult);
}
        });
    }
function cheklogin() {
        var login=$("#login").val();
    //    alert(login);
        $.ajax({
            method:"POST",
            url:"checklogin.php",
            data:{login:login},
            success:function (rezult1) {
              //  alert(rezult1);
if(rezult1==2){
    $("#login").removeClass("input1");
    $("#login").addClass("input2");
    $("#sp1").removeClass("splogr");
    $("#sp1").addClass("splogg").text("free login");
}
else{
    $("#login").removeClass("input2");
    $("#login").addClass("input1");
    $("#sp1").removeClass("splogg");
    $("#sp1").addClass("splogr").text("blocking login");
}
            }
        })

}
//////////////////////////////////////////

    ///////////////
function checkemail() {
        //alert("test");

    var email=$("#email").val();
   // alert(email);


    $.ajax({
        method:"POST",
        url:"checkemail.php",
        data:{email:email},
        success:function (rezult2) {
            //alert(rezult2);
            if (rezult2 == 2) {
                $("#email").removeClass("input1");
                $("#email").addClass("input2");
                $("#sp2").removeClass("spemailr");
                $("#sp2").addClass("spemailg").text("free email");
            }
            else {
                $("#email").removeClass("input2");
                $("#email").addClass("input1");
                $("#sp2").removeClass("spemailg");
                $("#sp2").addClass("spemailr").text("blocking email");
            }
        }
    })
}
////////////////////


    function checkem(checkemail1) {

        var email=$("#email").val();
        alert(email);
        var regExpEmail = /^([A-Za-z0-9-_]{1,100}\w(\.)?\w+)@+[a-zA-Z_]+?\.[A-Za-z]{1,8}$/i;
        if (email.match(regExpEmail) != null) {
$("#sp2").removeClass("spemailr");
            $("#sp2").addClass("spemailg");
            return true;
        }
        else {
            $("#sp2").removeClass("spemailg");
            $("#sp2").addClass("spemailr");
            return false;
        }
    }
    /////////////
    $("#email").blur(function () {
       alert("test");
        checkem();
    });

$("#email").keyup(function () {
    //alert("test1");
   checkemail();

});
    ////////////////////////////
$("#login").keyup(function () {
   //alert("ПЛОХОЙ ПРОГРАММИСТ!!");
cheklogin();
});
});