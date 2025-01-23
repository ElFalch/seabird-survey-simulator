const startButton = document.getElementById("start")

startButton.addEventListener("click", startSurvey)

function startSurvey() {
    console.log("Seabird survey started")
    startButton.classList.add("hidden")
    startButton.classList.remove("btn-primary")
}