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
    document.getElementById("question").textContent = currentQuestion + 1 + ") " +
    currentQuestionData.question

    let choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index)=>{
        
    })
}




window.onload = loadQuestion()