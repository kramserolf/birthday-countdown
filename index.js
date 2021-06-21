const showCountdown = document.querySelector(".display-countdown")
const comingYear = document.querySelector(".coming-year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#day");
const today = new Date();
var nextYear;

// countdown function
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

    document.querySelector("#days").textContent = days;
    document.querySelector("#hours").textContent = formatTime(hours);
    document.querySelector("#minutes").textContent = formatTime(minutes);
    document.querySelector("#seconds").textContent = formatTime(seconds);
    // set the interval to 1 second
    setInterval(countDown, 1000);
    // display countdown
    document.querySelector(".display-countdown").style.display = "flex";

};

// format time
const formatTime = time => {
    return time < 10 ? `0${time}` : time;
};


document.getElementById("btnCalculate").addEventListener("click", e => {
    e.preventDefault();
    if (birthDate.value.length === 0) {
        document.getElementById("msg").innerHTML = "<h4 class='error'>Please fill up birthdate field</h4>";
        setTimeout(() => document.querySelector(".error").remove(), 3000);
    } else {
        countDown();
    }
});