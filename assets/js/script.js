// Only start game when DOM is loaded - taken from Code Institute's Love Maths - Essentials Project module 

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start");
  let portBird = document.getElementById("port-bird");
  let starBird = document.getElementById("star-bird");
  const recordMessagePort = document.getElementById("record-message-port");
  const recordMessageStar = document.getElementById("record-message-star");

  startButton.addEventListener("click", startSurvey);

  // sides

  const side = ["Port", "Star"];

  // correct answers, src and alt text for each sitting bird image

  const sitting = {
    question: [
      "assets/images/sitting-birds/puffin.webp",
      "assets/images/sitting-birds/guillemot.webp",
      "assets/images/sitting-birds/razorbill.webp",
      "assets/images/sitting-birds/razorbill2.webp",
      "assets/images/sitting-birds/cormorant.webp",
      "assets/images/sitting-birds/european-shag.webp",
      "assets/images/sitting-birds/cormorant2.webp",
      "assets/images/sitting-birds/kittiwake2.webp",
      "assets/images/sitting-birds/fulmar.webp",
      "assets/images/sitting-birds/guillemot3.webp",
    ],
    sppAnswer: ["PU", "GU", "RA", "RA", "CA", "SA", "CA", "KI", "F", "GU"],
    numAnswer: ["1", "1", "2", "1", "1", "1", "1", "2", "3", "2"],
    alt: [
      "An Atlantic Puffin sat on the water",
      "A Common Guillemot in Winter plumage sat on the water",
      "Two Razorbills sat on the water",
      "A Razorbill in Winter plumage sat on the water",
      "A Great Cormorant sat on the water",
      "A European Shag sat on the water",
      "A Great Cormorant sat on the water",
      "Two Kittiwakes sat on the water",
      "Three Northern Fulmars sat on the water",
      "Two Common Guillemots sat on the water",
    ],
  };
  
  // correct answers, src and alt text for each flying bird image

  const flying = {
    question: [
      "assets/images/flying-birds/gannet.webp",
      "assets/images/flying-birds/guillemot2.webp",
      "assets/images/flying-birds/herring-gull.webp",
      "assets/images/flying-birds/kittiwake.webp",
      "assets/images/flying-birds/european-shag2.webp",
      "assets/images/flying-birds/cormorant3.webp",
      "assets/images/flying-birds/puffin2.webp",
      "assets/images/flying-birds/european-shag3.webp",
      "assets/images/flying-birds/cormorant4.webp",
    ],
    sppAnswer: ["GX", "GU", "HG", "KI", "SA", "CA", "PU", "SA", "CA"],
    numAnswer: ["1", "1", "1", "1", "1", "1", "2", "2", "3"],
    alt: [
      "A Northern Gannet flying",
      "A Common Guillemot flying",
      "A Herring Gull flying",
      "A Kittiwake flying",
      "A European Shag flying",
      "A Great Cormorant flying",
      "Two Atlantic Puffins flying",
      "Two European Shags flying",
      "Three Great Cormorants flying",
    ],
  };

  let questions = {};

  const footer = document.getElementById("footer");

  let randomBirdIndex = 0;

  let randomSide = "";

  // define firstBird (to be filled with either portBird or starBird) 

  let firstBird = portBird;

  /** 
   * hides start button and shows first random bird image on a random side when start button is clicked
   * @generator 
   * @yields {number} randomBirdIndex - is used to determine which bird image is displayed first
   * @yields {number} randomSide - is used to determine which side the first bird image is displayed on
  */
  function startSurvey() {
    try {
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
    catch (err) {
      firstBird.src = "Error: " + err + ".";
      firstBird.alt = "Error: " + err + ".";
    }
  }

 
  // Define form and add event listener for submission that calls processAnswer function

  let form = document.querySelector("#form");

  form.addEventListener("submit", processAnswer);

  // Define form buttons, messages and dropdowns

  const right = document.getElementById("right");
  const wrong = document.getElementById("wrong");
  const next = document.getElementById("next");
  const reset = document.getElementById("reset");
  const numSelect = document.getElementById("number");
  const sppSelect = document.getElementById("sppCode");
  const sideSelect = document.getElementById("side");

  // Create blank array where the score for each attempt will be stored 

  const answers = {
    score: [],
  };

  const submit = document.getElementById("submit");

  /** 
   * store submitted values, assess and log if they are correct or not, then give option for next step.
   * @param {value} e - data entered in the form is compared with the correct answers for image being displayed. 
  */
  function processAnswer(e) {
    e.preventDefault();
    submit.classList.add("hidden");
    let formData = e.target;
    let sppCode = formData.sppCode.value;
    let number = formData.number.value;
    if (questions === sitting) {
      let sidePS = formData.side.value;
      if (
        (sppCode === questions.sppAnswer[randomBirdIndex]), 
        (number === questions.numAnswer[randomBirdIndex]), 
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
        (sppCode === questions.sppAnswer[randomBirdIndex]), 
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

// steps to target and use form data taken from Code Institute's Javascript Essentials module.

// Use of setAttribute taken from: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

// Disabling form dropdowns taken from: https://stackoverflow.com/questions/1227212/how-to-disable-the-entire-dropdown-control-in-html

  next.addEventListener("click", whatNext);

  /** 
   *  reset form, call clearSea function and either call next Survey or showanswers function when next button is clicked
  */
  function whatNext() {
    clearSea();
    form.sppCode.value = "0";
    form.number.value = "0";
    form.side.value = "0";
    if (answers.score.length < 5) {
      nextSurvey();
    } else {
      showAnswers();
    }
  }
 
  // define nextBird (to be filled with random side)

  let nextBird = portBird;

  /** 
   * reset form, call clearSea function and either call next Survey or showanswers function when next button is clicked
   * is fired by whatNext function if number of answers in round is less than 5
   * @generator 
   * @yields {number} randomBirdIndex - is used to determine which bird image is displayed next
   * @yields {number} randomSide - is used to determine which side the next bird image is displayed on
   */
  function nextSurvey() {
    try {
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
  } catch (err) {
    nextBird.src = "Error: " + err + ".";
    nextBird.alt = "Error: " + err + ".";
  }
  }

  // define correct and incorrect results messages 

  let correctResults = document.getElementById("correct-results");
  let incorrectResults = document.getElementById("incorrect-results");

  // define end of round message 

  const end = document.getElementById("end");

  //define next round button

  const nextRoundButton = document.getElementById("next-round");

  // create empty strings for cumulative correct and incorrect scores for each round 

  let correctScore = 0;
  let incorrectScore = 0;

  /** 
   * calculate and show cumulative correct and incorrect scores for each round aswell as end of round message. 
   * is fired by whatNext function if number of answers in round is more than or equal to 5. 
   */
  function showAnswers() {
  try {
    for (let score of answers.score) {
        if (score === "correct") {
          correctScore = correctScore + 1;
        }
        if (score === "incorrect") {
          incorrectScore = incorrectScore + 1;
      } 
    }
    footer.classList.add("hidden");
    correctResults.innerText = `Correct rows: ${correctScore}`;
    incorrectResults.innerText = `Incorrect rows: ${incorrectScore}`;
    correctResults.classList.remove("hidden");
    incorrectResults.classList.remove("hidden");
    nextRoundButton.classList.remove("hidden");
    end.classList.remove("hidden");
  } catch (err) {
    incorrectScore = "Error: " + err + ".";
    correctScore = "Error: " + err + ".";
  }
  }

  // define the column that contains the boat side dropdown menu

    const sideCol = document.getElementById("side-col");

  // Event listener that calls nextRound function when next round button is clicked

  nextRoundButton.addEventListener("click", nextRound);

  /** 
   * start next round, change the BTO code dropdown menu options and reveal/ hide the boat side dropdown depending on which round is being played 
   */
  function nextRound() {
    if (questions === sitting) {
      questions = flying;
      sppSelect.innerHTML = `<option selected value="0">BTO code</option>
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
      sppSelect.innerHTML = `<option selected value="0">BTO code</option>
                <option value="CA">CA</option>
                <option value="F">F</option>
                <option value="GU">GU</option>
                <option value="KI">KI</option>
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

  /** 
   * clear existing bird images and messages from screen
   * is fired by the whatNext function
   */
  function clearSea() {
    try {
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
    } catch (err) {
      starBird.src = "Error: " + err + ".";
      starBird.alt = "Error: " + err + ".";
      portBird.src = "Error: " + err + ".";
      portBird.alt = "Error: " + err + ".";
  }
  }

  form.addEventListener("reset", tryAgain);

  /** 
   * reset form when try again button is clicked
   */
  function tryAgain(e) {
    numSelect.removeAttribute("disabled");
    sideSelect.removeAttribute("disabled");
    sppSelect.removeAttribute("disabled");

    wrong.classList.add("hidden");
    reset.classList.add("hidden");
    submit.classList.remove("hidden");
  }

  // Use of removeAttribute taken from: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute

});