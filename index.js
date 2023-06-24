const data = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

data.innerText = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerText = weekDays[today.getDay()];
month.innerText = allMonths[today.getMonth()];
year.innerText = today.getFullYear();

(function clock() {
    const today = new Date();;
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    hours.innerText = today.getHours();
    minutes.innerText = today.getMinutes();
    seconds.innerText = today.getSeconds();

    const t = setTimeout(clock, 500);
})();

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

