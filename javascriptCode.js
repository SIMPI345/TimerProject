let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let time = document.getElementById("time");

let interval;
let timeLeft = 1500; // 25 minutes -> 25*60
// 25: 00
// 1500 seconds

function updateTimer() {
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft % 60;

    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`

    time.innerHTML = formattedTime
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--; // 1498 seconds
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval)
            alert("Time up")
            updateTimer()
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(interval)
}

function resetTimer() {
    clearInterval(interval)
    timeLeft = 1500;
    updateTimer()
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
