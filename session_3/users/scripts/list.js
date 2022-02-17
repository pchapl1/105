function createRow(usersArray) {
    for (let i=0; i < usersArray.length; i++){
        let user = usersArray[i];
        console.log(user.age)
        let tmp = `
            <tr>
                <td>${user.email}</td>
                <td>${user.first}</td>
                <td>${user.last}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
                <td>${user.payment}</td>
                <td>${user.color}</td>
            </tr>
        `

        $('#userList').append(tmp);

    }
}

function init() {
    let users = readUsers();
    createRow(users)

}

window.onload=init;