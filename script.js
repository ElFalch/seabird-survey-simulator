document.addEventListener("DOMContentLoaded", function () {

const startButton = document.getElementById("start")
let portBird = document.getElementById("port-bird")
let starBird = document.getElementById("star-bird")
const recordMessage = document.getElementById("record-message")

startButton.addEventListener("click", startSurvey)


// sides

const side = ["Port", "Star"]

// correct answer and src for each image

const questions = {
    question: ["https://8000-elfalch-seabirdsurveysi-gpj5xixjgi7.ws.codeinstitute-ide.net/assets/images/puffin.webp","https://8000-elfalch-seabirdsurveysi-gpj5xixjgi7.ws.codeinstitute-ide.net/assets/images/guillemot.webp","https://8000-elfalch-seabirdsurveysi-gpj5xixjgi7.ws.codeinstitute-ide.net/assets/images/razorbill.webp"],
    sppAnswer: ["PU", "GU","RA"],
    numAnswer: ["1", "1","2"],
    alt: ["An Atlantic Puffin sat on the water", "A Common Guillemot in Winter plumage sat on the water","Two razorbills sat on the water"]
};


// hide start button and show first bird image when start button is clicked

function startSurvey() {
    console.log("Seabird survey started");
    startButton.classList.add("hidden");
    footer.classList.remove("hidden");
    recordMessage.classList.remove("hidden");
    randomBirdIndex = Math.floor(Math.random() * questions.question.length);
    randomSide = Math.floor(Math.random() * side.length);
    if (side[randomSide] === "Port") {
      firstBird = portBird;
    } else {
      firstBird = starBird;
    }
    firstBird.src = questions.question[randomBirdIndex];
    firstBird.alt = questions.alt[randomBirdIndex];
    firstBird.classList.remove("hidden");
}

// store submitted value, assess and log if it is correct or not, then give option for next step.

const form = document.querySelector('#form');

form.addEventListener("submit", processAnswer);

const correct = document.getElementById("correct")
const incorrect = document.getElementById("incorrect")

function processAnswer(e) {

        e.preventDefault();
        submit.classList.add("hidden");
        let formData = e.target;
        let sppCode = formData.sppCode.value; 
        let number = formData.number.value; 
        let sidePS = formData.side.value; 
        if (sppCode === questions.sppAnswer[randomBirdIndex] & number === questions.numAnswer[randomBirdIndex] & sidePS === side[randomSide]) {
            correct.classList.remove("hidden");
            nextButton.classList.remove("hidden");    
        } else {
            incorrect.classList.remove("hidden"); 
            reset.classList.remove("hidden"); 
        }
    }

// reset form and replace bird image/ side when next button is clicked     

const nextButton = document.getElementById("next")

nextButton.addEventListener("click", nextSurvey)

function nextSurvey() {
    resetSea()    
    correct.classList.add("hidden");
    console.log("next survey started");
    randomBirdIndex = Math.floor(Math.random() * questions.question.length);
    randomSide = Math.floor(Math.random() * side.length);
    if (side[randomSide] === "Port") {
        nextBird = portBird;
    } else {
        nextBird = starBird;
    }
    nextBird.src = questions.question[randomBirdIndex];
    nextBird.alt = questions.alt[randomBirdIndex];
    nextBird.classList.remove("hidden");
    submit.classList.remove("hidden");
    form.sppCode.value = "0";
    form.number.value = "0";
    form.side.value = "0";
    console.log(side[randomSide]);
}

function resetSea() {
if (portBird.alt) {
    portBird.src = "";
    portBird.alt = "";
}

if (starBird.alt) {
    starBird.src = "";
    starBird.alt = "";
}
}

// reset form when try again button is clicked 

form.addEventListener("reset", tryAgain);

function tryAgain(e) {
    incorrect.classList.add("hidden"); 
    submit.classList.remove("hidden");
    reset.classList.add("hidden");
}

});
