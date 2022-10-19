const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector('#login-form input');
// const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
// function handleLinkClick(event){
//     event.preventDefault();
//     console.dir(event);k
// }
function paintGreetings(username){
    greeting.innerHTML =`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(saveUsername);
}





