document.addEventListener("DOMContentLoaded", function () {

const startButton = document.getElementById("start")
let portBird = document.getElementById("port-bird")
let starBird = document.getElementById("star-bird")

startButton.addEventListener("click", startSurvey)

// correct answer and src for each image

let questions = {
    question: ["https://8000-elfalch-seabirdsurveysi-gpj5xixjgi7.ws.codeinstitute-ide.net/assets/images/puffin.webp","https://8000-elfalch-seabirdsurveysi-gpj5xixjgi7.ws.codeinstitute-ide.net/assets/images/guillemot.webp"],
    answer: ["3", "2"]
};

// hide start button, show first bird image and save its src when start button is clicked

function startSurvey() {
    console.log("Seabird survey started");
    startButton.classList.add("hidden");
    portBird.classList.remove("hidden");
    console.log(questions.question[0]);
    console.log(questions.answer[0]);
    console.log(questions.question[1]);
    console.log(questions.answer[1]);
}

// store submitted value, assess and log if it is correct or not 

const form = document.querySelector('#form');

form.addEventListener("submit", processAnswer);

const nextButton = document.getElementById("next")

nextButton.addEventListener("click", nextSurvey)

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

function nextSurvey() {
    console.log("next survey started");
    nextButton.classList.add("hidden");
    correct.classList.add("hidden");
    portBird.classList.add("hidden");
    starBird.classList.remove("hidden");
    submit.classList.remove("hidden");
    form.sppCode.value = "0";
    let src = starBird.src ;
    console.log(src);
}

form.addEventListener("reset", tryAgain);

function tryAgain(e) {
    incorrect.classList.add("hidden"); 
    submit.classList.remove("hidden");
    reset.classList.add("hidden");
}

});
