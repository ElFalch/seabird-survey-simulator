document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start");
  let portBird = document.getElementById("port-bird");
  let starBird = document.getElementById("star-bird");
  const recordMessagePort = document.getElementById("record-message-port");
  const recordMessageStar = document.getElementById("record-message-star");

  startButton.addEventListener("click", startSurvey);

  // sides

  const side = ["Port", "Star"];

  // correct answer and src for each image

  const questions = {
    question: [
      "assets/images/puffin.webp",
      "assets/images/guillemot.webp",
      "assets/images/razorbill.webp",
      "assets/images/razorbill2.webp",
      "assets/images/cormorant.webp",
      "assets/images/european-shag.webp",
      "assets/images/cormorant2.webp",
    ],
    sppAnswer: ["PU", "GU", "RA","RA","CA","SA","CA"],
    numAnswer: ["1", "1", "2","1","1","1","1"],
    alt: [
      "An Atlantic Puffin sat on the water",
      "A Common Guillemot in Winter plumage sat on the water",
      "Two Razorbills sat on the water",
      "A Razorbill in Winter plumage sat on the water",
      "A Great Cormorant sat on the water",
      "A European Shag sat on the water",
      "A Great Cormorant sat on the water",
    ],
  };

  const flying = {
    question: [
      "assets/images/flying-birds/gannet.webp",
      "assets/images/flying-birds/guillemot2.webp",
      "assets/images/flying-birds/herring-gull.webp",
      "assets/images/flying-birds/kittiwake.webp",
      "assets/images/flying-birds/european-shag2.webp",
      "assets/images/flying-birds/cormorant3.webp",
    ],
    sppAnswer: ["GX", "GU", "HG","KI","SA","CA"],
    numAnswer: ["1", "1", "1","1","1","1"],
    alt: [
      "A Northern Gannet flying",
      "A Common Guillemot flying",
      "A Herring Gull flying",
      "A Kittiwake flying",
      "A European Shag flying",
      "A Great Cormorant flying",
    ],
  };

  // hide start button and show first bird image when start button is clicked

  function startSurvey() {
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

  const form = document.querySelector("#form");

  form.addEventListener("submit", processAnswer);

  const right = document.getElementById("right");
  const wrong = document.getElementById("wrong");
  const next = document.getElementById("next");
  const reset = document.getElementById("reset");

  const answers = {
    sppCode: [],
    number: [],
    sidePS: [],
    score: [],
  };

  function processAnswer(e) {
    e.preventDefault();
    submit.classList.add("hidden");
    let formData = e.target;
    let sppCode = formData.sppCode.value;
    let number = formData.number.value;
    let sidePS = formData.side.value;
    if (
      (sppCode === questions.sppAnswer[randomBirdIndex]) &
      (number === questions.numAnswer[randomBirdIndex]) &
      (sidePS === side[randomSide])
    ) {
      right.classList.remove("hidden");
      next.classList.remove("hidden");
      answers.score.push("correct")
    } else {
      wrong.classList.remove("hidden");
      reset.classList.remove("hidden");
      answers.score.push("incorrect")
    }
      answers.sppCode.push(sppCode)
      answers.number.push(number)
      answers.sidePS.push(sidePS)
  }


  // reset form and replace bird image/ side when next button is clicked

  const nextButton = document.getElementById("next");

    nextButton.addEventListener("click", whatNext);

  function whatNext() {
    clearSea();
    form.sppCode.value = "0";
    form.number.value = "0";
    form.side.value = "0";
    if (answers.sidePS.length <= 5){
      nextSurvey();
    } else {
      showAnswers();
    }
  }

  function nextSurvey() {
    right.classList.add("hidden");
    next.classList.add("hidden");
    randomBirdIndex = Math.floor(Math.random() * questions.question.length);
    randomSide = Math.floor(Math.random() * side.length);
    if (side[randomSide] === "Port") {
      nextBird = portBird;
      recordMessagePort.classList.remove("hidden");
    } else {
      nextBird = starBird;
      recordMessageStar.classList.remove("hidden");
    }
    nextBird.src = questions.question[randomBirdIndex];
    nextBird.alt = questions.alt[randomBirdIndex];
    nextBird.classList.remove("hidden");
    submit.classList.remove("hidden");
  }

  let correctResults = document.getElementById("correct-results");
  let incorrectResults = document.getElementById("incorrect-results");

  nextRound = document.getElementById("next-round");

  let correctScore = 0; 
  let incorrectScore = 0;

  function showAnswers(){
      for (let score of answers.score) {
        if (score === "correct") {
          correctScore = correctScore + 1;
        }
        if (score === "incorrect") {
          incorrectScore = incorrectScore + 1;
        }
      }
      correctResults.innerText = `Correct entries: ${correctScore}`;
      incorrectResults.innerText = `Incorrect entries: ${incorrectScore}`;
      correctResults.classList.remove("hidden");
      incorrectResults.classList.remove("hidden");
      nextRound.classList.remove("hidden");
    }

  function clearSea() {
    if (portBird.alt) {
      portBird.src = "";
      portBird.alt = "";
      recordMessagePort.classList.add("hidden");
    }

    if (starBird.alt) {
      starBird.src = "";
      starBird.alt = "";
      recordMessageStar.classList.add("hidden");
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
