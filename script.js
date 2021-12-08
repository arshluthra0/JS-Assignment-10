$(document).ready(function(){
    console.log("test");   


   $('form').submit(function(e){ 
    //to disble form refresh on submit
        e.preventDefault();
    });

    // disable submit button
    $('input[type="submit"]').attr("disabled", true);

    // set max length of password 10 characters
    $("#passwordOne").attr('maxlength','10');

    // set max length of repassword 10 characters
    $("#passwordTwo").attr('maxlength','10');   

    let termsAndCondition = false;
    let name;
    let passwordOne;
    let passwordTwo;
    let passwordmatch;
    let selectOption;

    function displaySubmitButton(){
    (name && passwordmatch && selectOption && termsAndCondition) ? $("#submitButton").attr("disabled", false) : "";
        
    }

    function passwordMatchErrorClear(){
        $("#passwordTwoerror").text("");
        passwordmatch = true;
    }

    function passwordMatchError(){
        $("#passwordTwoerror").text("password did not match");
    }

    function nameErrorClear(){
        $("#nameerror").text("");
    }

    function nameError(){
        $("#nameerror").text("Enter text");
    }

    function checkPassword(){        
        (passwordOne === passwordTwo) ? passwordMatchErrorClear() :  passwordMatchError();
        
    }
    

    $("#name").change(function () {
        var userText = $(this).val();
        name = userText;
        userText ? nameErrorClear() : nameError();           
        displaySubmitButton();
    });

    $("#name").val("Enter your username").change();

    function passwordOneErrorClear(){
        $("#passwordOneerror").text("");            
    }

    function passwordOneError(){
        $("#passwordOneerror").text("Password should be 10 characters");
    }

    $("#passwordOne").change(function () {        
         passwordOne = $(this).val();        
        (passwordOne.length === 10 ) ? passwordOneErrorClear(): passwordOneError();
        displaySubmitButton();
    });

    $("#passwordOne").val("passwordle").change();

    function repasswordErrorClear(){
        $("#passwordTwoerror").text("");
        checkPassword();
    }

    function repasswordError(){
        $("#passwordTwoerror").text("Password should be 10 characters");
    }

    $("#passwordTwo").change(function () {
        passwordTwo = $(this).val();        
        (passwordTwo.length === 10) ?  repasswordErrorClear() :  repasswordError();          
        displaySubmitButton();
    });

    $("#passwordTwo").val("passwordle").change();

    function selectCountryErrorClear(){
        $("#selectcountryerror").text("");
        
    }

    function selectCountryError(){
        $("#selectcountryerror").text("Select option");
    }

    $("select").on('change', function () {        
        selectOption = $(this).val();
        (selectOption === "Select Countries") ? selectCountryError() : selectCountryErrorClear(); 
        displaySubmitButton();
    });
    
    function termsAndConditionErrorClear(){
        $("#termsAndConditionerror").text("");
    }

    function termsAndConditionError(){
        $("#termsAndConditionerror").text("Accept Terms and Condition");
    }

    $("#termsAndCondition").on('input', function () {        
        termsAndCondition = !termsAndCondition;      
        (termsAndCondition) ? termsAndConditionErrorClear() :  termsAndConditionError();        
        displaySubmitButton();
    });

    $("#submitButton").on("click", function(){
        $("#welcomeMessage").html(`Welcome <span id='enteredname'> ${name} </span>. Your selectd country code is <span id='enteredname'> ${selectOption} </span>` )
    })
  });