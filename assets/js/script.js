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

  const sitting = {
    question: [
      "assets/images/sitting-birds/puffin.webp",
      "assets/images/sitting-birds/guillemot.webp",
      "assets/images/sitting-birds/razorbill.webp",
      "assets/images/sitting-birds/razorbill2.webp",
      "assets/images/sitting-birds/cormorant.webp",
      "assets/images/sitting-birds/european-shag.webp",
      "assets/images/sitting-birds/cormorant2.webp",
    ],
    sppAnswer: ["PU", "GU", "RA", "RA", "CA", "SA", "CA"],
    numAnswer: ["1", "1", "2", "1", "1", "1", "1"],
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
      "assets/images/flying-birds/puffin2.webp",
    ],
    sppAnswer: ["GX", "GU", "HG", "KI", "SA", "CA", "PU"],
    numAnswer: ["1", "1", "1", "1", "1", "1", "2"],
    alt: [
      "A Northern Gannet flying",
      "A Common Guillemot flying",
      "A Herring Gull flying",
      "A Kittiwake flying",
      "A European Shag flying",
      "A Great Cormorant flying",
      "Two Atlantic Puffins flying",
    ],
  };

  // hide start button and show first bird image when start button is clicked

  function startSurvey() {
    questions = sitting;
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

  let form = document.querySelector("#form");

  form.addEventListener("submit", processAnswer);

  const right = document.getElementById("right");
  const wrong = document.getElementById("wrong");
  const next = document.getElementById("next");
  const reset = document.getElementById("reset");
  const numSelect = document.getElementById("number");
  const sppSelect = document.getElementById("spp-code");
  const sideSelect = document.getElementById("side");

  const answers = {
    score: [],
  };

  function processAnswer(e) {
    e.preventDefault();
    submit.classList.add("hidden");
    let formData = e.target;
    let sppCode = formData.sppCode.value;
    let number = formData.number.value;
    if (questions === sitting) {
      let sidePS = formData.side.value;
      if (
        (sppCode === questions.sppAnswer[randomBirdIndex]) &
        (number === questions.numAnswer[randomBirdIndex]) &
        (sidePS === side[randomSide])
      ) {
        right.classList.remove("hidden");
        next.classList.remove("hidden");
        answers.score.push("correct");
      } else {
        wrong.classList.remove("hidden");
        reset.classList.remove("hidden");

        numSelect.setAttribute("disabled", "");
        sideSelect.setAttribute("disabled", "");
        sppSelect.setAttribute("disabled", "");

        answers.score.push("incorrect");
      }
    } else {
      if (
        (sppCode === questions.sppAnswer[randomBirdIndex]) &
        (number === questions.numAnswer[randomBirdIndex])
      ) {
        right.classList.remove("hidden");
        next.classList.remove("hidden");
        answers.score.push("correct");
      } else {

        wrong.classList.remove("hidden");
        reset.classList.remove("hidden");

        numSelect.setAttribute("disabled", "");
        sideSelect.setAttribute("disabled", "");
        sppSelect.setAttribute("disabled", "");

        answers.score.push("incorrect");
      }
    }
  }

  // reset form and replace bird image/ side when next button is clicked

  const nextButton = document.getElementById("next");

  nextButton.addEventListener("click", whatNext);

  function whatNext() {
    clearSea();
    form.sppCode.value = "0";
    form.number.value = "0";
    form.side.value = "0";
    if (answers.score.length <= 4) {
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

  const end = document.getElementById("end");
  const nextRoundButton = document.getElementById("next-round");

  let correctScore = 0;
  let incorrectScore = 0;

  function showAnswers() {
    for (let score of answers.score) {
      if (score === "correct") {
        correctScore = correctScore + 1;
      }
      if (score === "incorrect") {
        incorrectScore = incorrectScore + 1;
      }
    }
    footer.classList.add("hidden");
    correctResults.innerText = `Correct entries: ${correctScore}`;
    incorrectResults.innerText = `Incorrect entries: ${incorrectScore}`;
    correctResults.classList.remove("hidden");
    incorrectResults.classList.remove("hidden");
    nextRoundButton.classList.remove("hidden");
    end.classList.remove("hidden");
  }

  // Next round when next round button clicked

  nextRoundButton.addEventListener("click", nextRound);

  let sppOptions = document.getElementById("spp-code");
  const sideCol = document.getElementById("side-col");

  function nextRound() {
    if (questions === sitting) {
      questions = flying;
      sppOptions.innerHTML = `<option selected value="0">Open this select menu</option>
      <option value="CA">CA</option>
      <option value="GU">GU</option>
      <option value="GX">GX</option>
      <option value="HG">HG</option>
      <option value="KI">KI</option>
      <option value="PU">PU</option>
      <option value="SA">SA</option>`;
      sideCol.classList.add("hidden");
    } else {
      questions = sitting;
      sppOptions.innerHTML = `<option selected value="0">Open this select menu</option>
                  <option value="CA">CA</option>
                  <option value="GU">GU</option>
                  <option value="PU">PU</option>
                  <option value="RA">RA</option>
                  <option value="SA">SA</option>`;
      sideCol.classList.remove("hidden");
    }
    footer.classList.remove("hidden");
    correctResults.classList.add("hidden");
    incorrectResults.classList.add("hidden");
    nextRoundButton.classList.add("hidden");
    end.classList.add("hidden");
    answers.score = [];
    correctScore = 0;
    incorrectScore = 0;
    nextSurvey();
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
