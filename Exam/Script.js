function register(){
    var na =document.getElementById("na").value;
    var reg =document.getElementById("re").value;
    var ad =document.getElementById("ad").value;
    var email =document.getElementById("em").value;
    var phone =document.getElementById("ph").value;
    // alert("ool")
    var atindex = email.indexOf('@');
    var atdot = email.indexOf('.');

    if(na.length < 3)
    {
        alert("Name should contain minimum 3 words");
        return false;
    }
    else if(phone.trim() == "" || isNaN(phone) || phone.length != 10){
        alert("Enter correct phone number");
        return false;
    }
    else if(ad.length <5)
    {
        alert("Admission number sould have above 5 charactor");
        return false;
    }

    else if(reg.length < 9)
    {
        alert("Register number sould have above 9 charactor");
        return false;
    }
    else if(email.indexOf("@") == -1 || email.indexOf(".") <= 0 ||email.length < 6) {
        alert("Enter correct email");
        return false;
    }
    else
    {
        alert("Succesfully register for exam")

        return true;
    }
}


function validate_login(){

    var username = document.getElementById("em");
    var password = document.getElementById("pa");
    // alert("ahsd")
    if(password.value.trim().length<6)
    {
        alert("Password should contain minimum 6 characters");
        password.focus();
        return false;
    }
    else
    {
        alert("Successfully Logged in...")
        return true;
    }
}


function exam(){

    var amt = document.getElementById("am");
    // alert(amt.value)
    if(amt.value != 4500)
    {
        alert("Payable amount is 4500");
        return false;
    }
    else
    {
        alert("Payment Succesfully and Redirecting to Home page...")
        return true;
    }
}

