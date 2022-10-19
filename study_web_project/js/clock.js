const clock = document.querySelector("div#clock");
const Day = document.querySelector("div#Day");

function getDate(){
    const date = new Date();
    Day.innerText = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`;
    console.log(Day.innerText);
}

function getClock(){
    const date = new Date();
    // console.log(date);
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getDate();
getClock();
setInterval(getClock, 1000);
setTimeout(getDate, 1000);
