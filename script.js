document.addEventListener("DOMContentLoaded", function () {

const startButton = document.getElementById("start")
let portBird = document.getElementById("port-bird")
let starBird = document.getElementById("star-bird")

startButton.addEventListener("click", startSurvey)

// correct answer and src for each image

const questions = {
    question: ["https://8000-elfalch-seabirdsurveysi-gpj5xixjgi7.ws.codeinstitute-ide.net/assets/images/puffin.webp","https://8000-elfalch-seabirdsurveysi-gpj5xixjgi7.ws.codeinstitute-ide.net/assets/images/guillemot.webp"],
    answer: ["3", "2"],
    alt: ["An Atlantic Puffin sat on the water", "A Common Guillemot in Winter plumage sat on the water"]
};


// hide start button and show first bird image when start button is clicked

function startSurvey() {
    console.log("Seabird survey started");
    startButton.classList.add("hidden");
    randomBirdIndex = Math.floor(Math.random() * questions.question.length);
    portBird.src = questions.question[randomBirdIndex];
    portBird.alt = questions.alt[randomBirdIndex];
    portBird.classList.remove("hidden");
}

// store submitted value, assess and log if it is correct or not, then give option for next step.

const form = document.querySelector('#form');

form.addEventListener("submit", processAnswer);

const nextButton = document.getElementById("next")

nextButton.addEventListener("click", nextSurvey)

function processAnswer(e) {

        e.preventDefault();
        submit.classList.add("hidden");
        let formData = e.target;
        let sppCode = formData.sppCode.value; 
        if (sppCode === questions.answer[randomBirdIndex]) {
            correct.classList.remove("hidden");
            nextButton.classList.remove("hidden");    
        } else {
            incorrect.classList.remove("hidden"); 
            reset.classList.remove("hidden"); 
        }
    }

// reset form and change image when next button is clicked     

function nextSurvey() {
    console.log("next survey started");
    nextButton.classList.add("hidden");
    correct.classList.add("hidden");
    portBird.classList.add("hidden");
    starBird.src = questions.question[randomBirdIndex];
    starBird.alt = questions.alt[randomBirdIndex];
    starBird.classList.remove("hidden");
    submit.classList.remove("hidden");
    form.sppCode.value = "0";
    let src = starBird.src ;
    console.log(src);
}

// reset form when try again button is clicked 

form.addEventListener("reset", tryAgain);

function tryAgain(e) {
    incorrect.classList.add("hidden"); 
    submit.classList.remove("hidden");
    reset.classList.add("hidden");
}

});
