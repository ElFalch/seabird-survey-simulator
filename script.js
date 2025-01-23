const startButton = document.getElementById("start")
let portBird = document.getElementById("port-bird")

startButton.addEventListener("click", startSurvey)

// hide start button and show first bird image when start button is clicked

function startSurvey() {
    console.log("Seabird survey started")
    startButton.classList.add("hidden")
    portBird.classList.remove("hidden")
}

