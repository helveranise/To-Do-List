let username = document.getElementById("username");

function start(){
    localStorage.setItem('username', username.value);
}