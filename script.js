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

// correct answer and src for each image

const questions = {
        question: "https://8000-elfalch-seabirdsurveysi-gpj5xixjgi7.ws.codeinstitute-ide.net/assets/images/puffin.webp",
        answer: "3"
    };


// store submitted value, assess and log if it is correct or not 

const form = document.querySelector('#form');

const nextButton = document.getElementById("next")

form.addEventListener("submit", processAnswer);

function processAnswer(e) {

        e.preventDefault();
        submit.classList.add("hidden");
        let formData = e.target;
        let sppCode = formData.sppCode.value; 
        if (sppCode === questions.answer) {
            correct.classList.remove("hidden");
            nextButton.classList.remove("hidden");    
        } else {
            incorrect.classList.remove("hidden"); 
            reset.classList.remove("hidden"); 
        }
    }
});

nextButton.addEventListener("click", nextSurvey)

// hide start button, show first bird image and save its src when start button is clicked

function nextSurvey() {
    console.log("next survey started");
}

form.addEventListener("reset", tryAgain);

function tryAgain(e) {
    incorrect.classList.add("hidden"); 
    submit.classList.remove("hidden");
    reset.classList.add("hidden");
}
