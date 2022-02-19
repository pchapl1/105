function login(){
    console.log('executing login function...')
    let email = $('#txtEmail').val();
    let password = $('#txtPassword').val();
    let users = readUsers()

    let flag = false

    for (let i=0; i < users.length; i++){
        let user = users[i];
        if (user.email === email && user.password === password){
            console.log(email, password + " its a match")
            location.href = 'home.html'
            flag = true
        }
        
        if (!flag)
        {
            showInvalidCred()
        }

}}

function showInvalidCred(){
    console.log('here')
    $('.invalid-login').show()
    setTimeout(()=>{
        $('.invalid-login').hide()
    }, 2000)
}

function init(){
    console.log('login script')
    $('#btnLogin').click(login)

}   



window.onload = init;