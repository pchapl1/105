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

function registerUser(){
    let email = $('#txtEmail').val();
    let password = $('#txtPassword').val();
    let first = $('#txtFirst').val();
    let last = $('#txtLast').val();
    let age = $('#txtAge').val();
    let phone = $('#txtPhone').val();
    let payment = $('#selPayment').val();
    let color = $('#txtColor').val();

    let user = new User(email, password, first, last, age, phone, payment, color);
    console.log(user)
}

function init(){
    console.log('init register')
    //hook events
    $('#btnRegister').click(registerUser)
}

window.onload = init;