document.addEventListener("DOMContentLoaded", function () {

const startButton = document.getElementById("start")
let portBird = document.getElementById("port-bird")

startButton.addEventListener("click", startSurvey)

// hide start button, show first bird image and save its src when start button is clicked

function startSurvey() {
    console.log("Seabird survey started");
    startButton.classList.add("hidden");
    portBird.classList.remove("hidden");
    let src = portBird.src ;
    console.log(src);
}

// store submitted value

const form = document.querySelector('#form');

form.addEventListener("submit", processAnswer);

function processAnswer(e) {
        e.preventDefault();
        let formData = e.target;
        let sppCode = formData.sppCode.value; 
        console.log(sppCode);
    }

});

// compare submitted value with correct answer 

