document.addEventListener("DOMContentLoaded", function () {

const startButton = document.getElementById("start")
let portBird = document.getElementById("port-bird")
let starBird = document.getElementById("star-bird")
const recordMessagePort = document.getElementById("record-message-port")
const recordMessageStar = document.getElementById("record-message-star")

startButton.addEventListener("click", startSurvey)


// sides

const side = ["Port", "Star"]

// correct answer and src for each image

const questions = {
    question: ["assets/images/puffin.webp","assets/images/guillemot.webp","assets/images/razorbill.webp"],
    sppAnswer: ["PU", "GU","RA"],
    numAnswer: ["1", "1","2"],
    alt: ["An Atlantic Puffin sat on the water", "A Common Guillemot in Winter plumage sat on the water","Two razorbills sat on the water"]
};


// hide start button and show first bird image when start button is clicked

function startSurvey() {
    console.log("Seabird survey started");
    startButton.classList.add("hidden");
    footer.classList.remove("hidden");
    randomBirdIndex = Math.floor(Math.random() * questions.question.length);
    randomSide = Math.floor(Math.random() * side.length);
    if (side[randomSide] === "Port") {
      firstBird = portBird;
      recordMessagePort.classList.remove("hidden");
      recordMessageStar.classList.add("hidden");
    } else {
      firstBird = starBird;
      recordMessageStar.classList.remove("hidden");
      recordMessagePort.classList.add("hidden");
    }
    firstBird.src = questions.question[randomBirdIndex];
    firstBird.alt = questions.alt[randomBirdIndex];
    firstBird.classList.remove("hidden");
}

// store submitted value, assess and log if it is correct or not, then give option for next step.

const form = document.querySelector('#form');

form.addEventListener("submit", processAnswer);

const right = document.getElementById("right")
const wrong = document.getElementById("wrong")
const next = document.getElementById("next")
const reset = document.getElementById("reset")


function processAnswer(e) {

        e.preventDefault();
        submit.classList.add("hidden");
        let formData = e.target;
        let sppCode = formData.sppCode.value; 
        let number = formData.number.value; 
        let sidePS = formData.side.value; 
        if (sppCode === questions.sppAnswer[randomBirdIndex] & number === questions.numAnswer[randomBirdIndex] & sidePS === side[randomSide]) {
            right.classList.remove("hidden");
            next.classList.remove("hidden");
        } else {
            wrong.classList.remove("hidden"); 
            reset.classList.remove("hidden"); 
        }
    }

// reset form and replace bird image/ side when next button is clicked     

const nextButton = document.getElementById("next")

nextButton.addEventListener("click", nextSurvey)

function nextSurvey() {
    clearSea()    
    right.classList.add("hidden");
    next.classList.add("hidden");
    console.log("next survey started");
    randomBirdIndex = Math.floor(Math.random() * questions.question.length);
    randomSide = Math.floor(Math.random() * side.length);
    if (side[randomSide] === "Port") {
        nextBird = portBird;
        recordMessagePort.classList.remove("hidden");
        recordMessageStar.classList.add("hidden");
    } else {
        nextBird = starBird;
        recordMessageStar.classList.remove("hidden");
        recordMessagePort.classList.add("hidden");
    }
    nextBird.src = questions.question[randomBirdIndex];
    nextBird.alt = questions.alt[randomBirdIndex];
    nextBird.classList.remove("hidden");
    submit.classList.remove("hidden");
    form.sppCode.value = "0";
    form.number.value = "0";
    form.side.value = "0";
}

function clearSea() {
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
    wrong.classList.add("hidden");
    reset.classList.add("hidden"); 
    submit.classList.remove("hidden");
}

});
