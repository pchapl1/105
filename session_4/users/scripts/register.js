//create constructor es2015/class
class User{
    constructor(email, password, first, last, age, address, phone, payment, color){
        this.email = email;
        this.password = password;
        this.first = first;
        this.last = last;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.payment = payment;
        this.color = color;
    }
}


function isValid(user) {
    // return false when user not valid
    let valid = true;
    $('.errors').html('')

    $("input").removeClass("alert-error")
    console.log(`email length ${user.email.length}`)
    //validations
    if (user.email.length === 0){
        valid = false
        console.log('missing email')
        $("#txtEmail").addClass("alert-error")
        $(".email-error").html('you must enter an email boiiii')
    }
    if (user.password.length === 0){
        valid = false
        console.log('missing password')
        $("#txtPassword").addClass("alert-error")
        $(".password-error").html('you must enter an password boiiii')
    }
    if (user.first.length === 0){
        valid = false
        console.log('missing fist name')
        $("#txtFirst").addClass("alert-error")
        $(".fname-error").html('you must enter an first name boiiii')
        
    }
    if (user.last.length === 0){
        valid = false
        console.log('missing last name')
        $("#txtLast").addClass("alert-error")
        $(".lname-error").html('you must enter an last name boiiii')

    }
    if (user.address.length === 0){
        valid = false
        console.log('missing address')
        $("#txtAddress").addClass("alert-error")
        $(".address-error").html('you must enter an address boiiii')

    }
    if (user.age.length === 0){
        valid = false
        console.log('missing age')
        $("#txtAge").addClass("alert-error")
        $(".age-error").html('you must enter an age boiiii')

    }
    if (user.phone.length === 0){
        valid = false
        console.log('missing phone number')
        $("#txtPhone").addClass("alert-error")
        $(".phone-error").html('you must enter an phone number boiiii')

    }
    if (user.payment.length === 0){
        valid = false
        console.log('missing payment method')
        $("#selPayment").addClass("alert-error")
        $(".payment-error").html('you must enter an payment boiiii')

    } 

    if (user.color.length === 0){
        valid = false
        console.log('missing color ')
        $("#txtColor").addClass("alert-error")
        $(".color-error").html('you must enter an color boiiii')

    }
    console.log(valid)
    return valid
}


function registerUser(){
    let email = $('#txtEmail').val();
    let password = $('#txtPassword').val();
    let first = $('#txtFirst').val();
    let last = $('#txtLast').val();
    let age = $('#txtAge').val();
    let address = $('#txtAddress').val();
    let phone = $('#txtPhone').val();
    let payment = $('#selPayment').val();
    let color = $('#txtColor').val();

    let user = new User(email, password, first, last, address, age, phone, payment, color);
    if (isValid(user)){
        saveUser(user);
        // $('input').val('')
    }
}

function init(){
    console.log('init register')
    //hook events
    $('#btnRegister').click(registerUser)
}

window.onload = init;


