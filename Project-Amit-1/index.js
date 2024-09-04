const quizData = [
    {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: 2
},
    
{
    question: "Which keyword is used to define a function?",
    choices: ["object", "fun", "call", "function"],
    correct: 3
},


{
    question: "What is function in JavaScript?",
    choices: ["A New Data type", "A block of code", "A new Operator", "An array of characters"],
    correct: 1
},

{
    question: "How many ways to declare Variables in JavaScript?",
    choices: ["3","2", "4","1"],
    correct: 0
}

] 

let currentQuestion = 0;
let score = 0;



function loadQuestion (){
    let currentQuestionData = quizData[currentQuestion] // quizData[0]
    // add question title
    document.getElementById("question").textContent = currentQuestion + 1 + ") " + currentQuestionData.question

    let choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = currentQuestionData.choices[index];
        choice.style.background = "#007bff"
        choice.disable = false;
        
    })

    document.getElementById("nextButton").style.display = "none"
}


function selectAnswer(index) {
    let currentQuestionData = quizData[currentQuestion]
    let choices = document.querySelectorAll(".choice");

    if (index === currentQuestionData.correct) {
        score++
        choices[index].style.backgroundColor = "#28a745";
    } else{
        choices[index].style.backgroundColor = "#dc3545";
        choices[currentQuestionData.correct].style.backgroundColor = "#28a745"
    }

    choices.forEach(choice=> {
        choice.disable = true

    })

    document.getElementById("nextButton").style.display = "block"
    
}

function nextQuestion() {
    currentQuestion++
    if (currentQuestion < quizData.length) {
        loadQuestion()
    } else {
        showScore()
    }
}

function showScore(){
    document.getElementById('quiz').innerHTML = `
    <h2>Your score: ${score} out of ${quizData.length} </h2>
    <button id="restartButton">Restart Quiz</button>
    `
    document.getElementById(restartButton).addEventListener("click",restartQuiz)
}

function restartQuiz() {
    window.location.reload();
}


window.onload = loadQuestion()