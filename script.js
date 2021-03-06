// Golbal Variables
var startButton = document.getElementById('startButton');
var questionContainerEl = document.getElementById('questionContainer');
var questionNumber = 0;
var btnA = document.getElementById('btnA');
var btnB = document.getElementById('btnB');
var btnC = document.getElementById('btnC');
var btnD = document.getElementById('btnD');
var score = 0;
var quizResultsEl = document.getElementById('quizResults');
var submitButton = document.getElementById('submitButton');
var scoreEl = document.getElementById('finalScore');
var playerName = document.getElementById('playerName');
var highscoreContainer = document.getElementById('highscores');
var viewHighscores = document.getElementById('viewHighscores');
var clearScores = document.getElementById('clearScoresBtn');
var wrong = document.getElementById('wrong');
var correct = document.getElementById('correct');

//-------------------------------------------------------------------
// Figure out "Out of Time" message
var timeOutEl = document.getElementById('outOfTime');

//-------------------------------------------------------------------
// Quiz button event listeners
btnA.addEventListener('click', function(){answerClick("A")});
btnB.addEventListener('click', function(){answerClick("B")});
btnC.addEventListener('click', function(){answerClick("C")});
btnD.addEventListener('click', function(){answerClick("D")});

//-------------------------------------------------------------------
// Start button listener
startButton.addEventListener('click', startQuiz);

// Highscores listener
viewHighscores.addEventListener('click', highscores);

function highscores() {
    console.log('Scores');
    highscoreContainer.classList.remove("hidden");
    questionContainerEl.setAttribute("class", "hidden");
    quizResultsEl.setAttribute("class", "hidden");
    timeEl = 0;
    hideStartButton();
}

//-------------------------------------------------------------------
// Start Quiz function 
function startQuiz() {
    console.log('Started');
    startButton.classList.add('hidden');
    highscoreContainer.setAttribute("class", "hidden");
    questionContainerEl.classList.remove('hidden');
    setTime();
    hideStartButton();
    showQuestion(questionNumber);
}

//-------------------------------------------------------------------
// Hides the start button when clicked
function hideStartButton() {
    var startButtonEl = document.getElementById('startButton');
    startButtonEl.setAttribute("class", "hidden");
}

//-------------------------------------------------------------------
// Function to go through the questions
function showQuestion(questionNumber) {
    var currentQuestion = myQuestions[questionNumber]
    document.getElementById('question').textContent = currentQuestion.question;

    btnA.textContent = currentQuestion.answer.A;
    btnB.textContent = currentQuestion.answer.B;
    btnC.textContent = currentQuestion.answer.C;
    btnD.textContent = currentQuestion.answer.D;
    
    document.getElementById('questionContainer').classList.remove('hidden');
}

//-------------------------------------------------------------------
// Function for clicking the answer buttons
function answerClick(questionLetter) {
    var correctAnswer = myQuestions[questionNumber].correctAnswer
    console.log("correctAnswer", correctAnswer);
    console.log(questionNumber);

    if (correctAnswer == questionLetter) {
        score = score + 1;
        scoreEl.textContent = "Score: " + score;
        correct.classList.remove("hidden");
        wrong.setAttribute("class", "hidden");
    } else {
        // Subtract 10 seconds if wrong answer
        secondsLeft = secondsLeft - 10;
        wrong.classList.remove("hidden");
        correct.setAttribute("class", "hidden");
    }

    // Last question
    if (questionNumber === myQuestions.length - 1) {
        questionContainerEl.setAttribute("class", "hidden");
        quizResultsEl.classList.remove("hidden");
        timeEl.textContent = "Timer: 0";
        secondsLeft = 0;
    } else {
        questionNumber = questionNumber + 1;
        showQuestion(questionNumber);
    }
}


//-------------------------------------------------------------------
// Timer Section
var timeEl = document.getElementById('timer');
var secondsLeft = 100;
// Timer function
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0 || secondsLeft < 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and send the out of time message
        sendMessage();
        document.getElementById('outOfTime').classList.remove("hidden");
        timeEl.textContent = "Timer: 0";
      }
    }, 1000);
  }
//   Hide and unhide functionality
function sendMessage() {
    questionContainerEl.setAttribute("class", "hidden");
    quizResultsEl.classList.remove("hidden");
}


//-------------------------------------------------------------------
// Submit your score. Ref: 04-01-23
// Global scope for storage?
//Submit button listener
// Ref: 04-01-25 for adding stored items to a list
submitButton.addEventListener('click', submitScore);

function submitScore () {
    var scoresArray = JSON.parse(localStorage.getItem("finalStats")) || [];
    if(scoresArray == null) finalStats = [];
    var finalStats = {
        playerName: playerName.value.trim(),
        scoreEl: score
    };

    scoresArray.push(finalStats);
    localStorage.setItem("finalStats", JSON.stringify(scoresArray));

    console.log("Submitted");
    quizResultsEl.setAttribute("class", "hidden");
    document.getElementById("highscores").classList.remove("hidden");
    document.getElementById('outOfTime').classList.add("hidden");
    var playerScore = JSON.parse(localStorage.getItem('finalStats'));
    if (playerScore !== null) {
        

        for (var i = 0; i < playerScore.length; i++) {
            document.querySelector(".finalScoreList").textContent = playerScore[i].playerName + " - " + playerScore[i].scoreEl
        }

    }
};


//-------------------------------------------------------------------
// Clear Local Storage
clearScores.addEventListener('click', clearLocalStorage);

function clearLocalStorage() {
    localStorage.clear();
    document.querySelector(".finalScoreList").classList.add("hidden");
}


//-------------------------------------------------------------------
//   Quiz Questions 
var myQuestions = [
    {
        question: "Which method returns the character at the specified index?",
        answer: {
            A: "characterAt()",
            B: "getCharAt()",
            C: "charAt()",
            D: "None of the above"
        },
        correctAnswer: "C"
    },
    {
        question: "Which method returns the string starting at the specified position?",
        answer: {
            A: "subsrt()",
            B: "getSubstring()",
            C: "slice()",
            D: "None of the above"
        },
        correctAnswer: "A"
    },
    {
        question: "Javascript is a(n) ___ language.",
        answer: {
            A: "Object-Oriented",
            B: "Object-Based",
            C: "Procedural",
            D: "None of the Above"
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following keywords is used to define a variabel in Javascript?",
        answer: {
            A: "var",
            B: "let",
            C: "Both A and B",
            D: "None of the above"
        },
        correctAnswer: "C"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answer: {
            A: "getElementbyId()",
            B: "getElementByClassName()",
            C: "Both A and B",
            D: "None of the Above"
        },
        correctAnswer: "C"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answer: {
            A: "Throws and error",
            B: "Ignores the statements",
            C: "Gives a warning",
            D: "None of the above"
        },
        correctAnswer: "B"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answer: {
            A: "const",
            B: "var",
            C: "let",
            D: "constant"
        },
        correctAnswer: "A"
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        answer: {
            A: "lies",
            B: "is in",
            C: "exists",
            D: "in"
        },
        correctAnswer: "D"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        answer: {
            A: "stringify()",
            B: "parse()",
            C: "convert()",
            D: "None of the above"
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following are closures in Javascript?",
        answer: {
            A: "Variables",
            B: "Functions",
            C: "Objects",
            D: "All of the above"
        },
        correctAnswer: "D"
    }
];