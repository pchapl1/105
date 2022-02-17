const LS_KEY ='users'
function saveUser(user) {
    let oldData = readUsers()
    oldData.push(user)

    let val = JSON.stringify(oldData);
    localStorage.setItem("users", val )

}

function readUsers() {
    let users = localStorage.getItem(LS_KEY)
    
    //create the array the first registration
    if (!users){
        return []; //creating the array
    }else{
        console.log('hello there')
        let list = JSON.parse(users);    //parse string back into obj
        list = list.filter(function(e) {return e != null})

        console.log(list)
        return list;
    }
}