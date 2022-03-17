var startButton = document.getElementById('startButton');
var questionContainerEl = document.getElementById('questionContainer');
var questionNumber = 0;
var btnA = document.getElementById('btnA');
var btnB = document.getElementById('btnB');
var btnC = document.getElementById('btnC');
var btnD = document.getElementById('btnD');
var score = 0;
var quizResultsEl = document.getElementById('quizResults');

btnA.addEventListener('click', function(){answerClick("A")});
btnB.addEventListener('click', function(){answerClick("B")});
btnC.addEventListener('click', function(){answerClick("C")});
btnD.addEventListener('click', function(){answerClick("D")});



startButton.addEventListener('click', startQuiz);


function startQuiz() {
    console.log('Started');
    startButton.classList.add('hidden');
    questionContainerEl.classList.remove('hidden');
    setTime();
    hideStartButton();
    showQuestion(questionNumber);
}

function hideStartButton() {
    var startButtonEl = document.getElementById('startButton');
    startButtonEl.setAttribute("class", "hidden");
}



function showQuestion(questionNumber) {
    var currentQuestion = myQuestions[questionNumber]
    document.getElementById('question').textContent = currentQuestion.question;

    btnA.textContent = currentQuestion.answer.A;
    btnB.textContent = currentQuestion.answer.B;
    btnC.textContent = currentQuestion.answer.C;
    btnD.textContent = currentQuestion.answer.D;
    
    document.getElementById('questionContainer').classList.remove('hidden');

}

function answerClick(questionLetter) {
    var correctAnswer = myQuestions[questionNumber].correctAnswer
    console.log("correctAnswer", correctAnswer);
    console.log(questionNumber);

    if (correctAnswer == questionLetter) {
        score = score + 1;
    } else {
        secondsLeft = secondsLeft - 10;
    }

    if (questionNumber === myQuestions.length - 1) {
        questionContainerEl.setAttribute("class", "hidden");
        quizResultsEl.classList.remove("hidden");
    } else {
        questionNumber = questionNumber + 1;
        showQuestion(questionNumber);
    }
}






// Timer Section

var timeEl = document.getElementById('timer');
var secondsLeft = 100;
// Timer function
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and send the out of time message
        sendMessage();
      }
  
    }, 1000);
  }

function sendMessage() {
    questionContainerEl.setAttribute("class", "hidden");
    quizResultsEl.classList.remove("hidden");
}





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