function signup (e){
    event.preventDefault()
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var textpass = document.getElementById("textpass").value
    var member = {
        username : username,
        password : password,
        textpass : textpass
    }
    var json = JSON.stringify(member)
    localStorage.setItem(username, json)
    alert("Chào mừng:" + " " + username)
}

function login (e){
    event.preventDefault()
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var textpass = document.getElementById("textpass").value
    var member = localStorage.getItem(username)
    var data = JSON.parse(member)
    if(username == username.data && password == password.data && textpass == textpass.data){
        alert("Đăng nhập thành công")
    }else{
        alert("Đăng nhập không thành công")
    }
}