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

// array with correct answer for each src

const questions = {
        question: "https://8000-elfalch-seabirdsurveysi-gpj5xixjgi7.ws.codeinstitute-ide.net/assets/images/puffin.webp",
        answer: "3"
    };


// store submitted value

const form = document.querySelector('#form');

form.addEventListener("submit", processAnswer);

function processAnswer(e) {
        e.preventDefault();
        let formData = e.target;
        let sppCode = formData.sppCode.value; 
    }
});



