$("#sendMail").on("click", function(){
    var name=$("#form_name").val().trim();
    var email=$("#eform_mail").val().trim();
    var message=$("#form_message").val().trim();

    if(name=="") {
        $("#errorMessage").text("Enter your name.");
        return false;
    }
    else if(email=="") {
        $("#errorMessage").text("Enter your email.");
        return false;
    }
    else if(message=="") {
        $("#errorMessage").text("Enter your massage of at least 5 characters.");
        return false;
    };

    $("#errorMessage").text("");


    $ajax({
        url: 'assets/php/mail.php',
        type: 'POST',
        cache: false,
        data: { 'form_name':name, 'form_email':email, 'form_message':message },
        dataType: 'html',
        beforeSend: function(){
            $("#sendMail").prop("disabled", true);
        },
        success: function(data){
            alert(data);
            $("#sendMail").prop("disabled", false);
        }
    });

});