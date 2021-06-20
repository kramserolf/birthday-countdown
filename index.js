// // declare variables
// const calculate = document.querySelector("#btnCalculate");
// const daysEl = document.querySelector("#days");
// const hoursEl = document.querySelector("#hours");
// const minsEl = document.querySelector("#minutes");
// const secsEl = document.querySelector("#seconds");
// const showCountdown = document.querySelector(".display-countdown")
// const options = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
// ];

// const sel = document.querySelector("#month");
// for (var i = 0; i < options.length; i++) {
//     var opt = document.createElement("option");
//     opt.innerHTML = options[i];
//     opt.value = options[i];
//     sel.appendChild(opt);
// }
// console.log(options);
// // const monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

// // create function
// function countDown() {
//     const month = document.querySelector("#month").value;
//     const day = document.querySelector("#day").value;
//     let bday;
//     if (month == "August") {
//         bday = `${month} ${day} 2021`;
//     } else {
//         bday = `${month} ${day} 2022`;
//     }
//     const bdate = new Date(bday);
//     const today = new Date();
//     const getBday = bdate.getTime();
//     const getDate = today.getTime();
//     const totalSeconds = Math.floor((getBday - getDate) / 1000);
//     const days = Math.floor(totalSeconds / 3600 / 24);
//     const hours = Math.floor(totalSeconds / 3600 % 24);
//     // convert to minutes
//     const minutes = Math.floor(totalSeconds / 60) % 60;
//     // convert to seconds
//     const seconds = Math.floor(totalSeconds % 60);
//     console.log(days);
//     daysEl.innerHTML = days;
//     hoursEl.innerHTML = formatTime(hours);
//     minsEl.innerHTML = formatTime(minutes);
//     secsEl.innerHTML = formatTime(seconds);
//     showCountdown.style.visibility = "visible";
//     setInterval(countDown, 1000);

// };
// // format time
// const formatTime = time => {
//     return time < 10 ? `0${time}` : time;
// };

// // call countdown function 
// calculate.addEventListener("click", function() {
//     countDown();
// });
const showCountdown = document.querySelector(".display-countdown")
const comingYear = document.querySelector(".coming-year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#day");
const today = new Date();

var nextYear;
const countDown = () => {
    if (today.getMonth() + 1 > birthMonth.value || (today.getMonth() + 1 == birthMonth.value && today.getDate() + 1 > birthDate.value)) {
        nextYear = new Date().getFullYear() + 1;
    } else {
        nextYear = new Date().getFullYear();
    }
    comingYear.innerHTML = nextYear;
    const remaining = new Date(`${nextYear}-${birthMonth.value}-${birthDate.value} 00:00:00`) - new Date();
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(remaining / (1000 * 60)) % 60;
    const seconds = Math.floor(remaining / 1000) % 60;

    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = formatTime(hours);
    document.querySelector("#minutes").innerHTML = formatTime(minutes);
    document.querySelector("#seconds").innerHTML = formatTime(seconds);
    showCountdown.style.visibility = "visible";
    setInterval(countDown, 1000);

};

// format time
const formatTime = time => {
    return time < 10 ? `0${time}` : time;
};
document.querySelector("#btnCalculate").addEventListener("click", countDown);