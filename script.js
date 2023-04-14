var bodyEl = document.querySelector(".bodyEl")
var container = document.querySelector(".container")
var starter = document.querySelector(".starter")
var startB = document.querySelector(".start-b")
var qSection = document.querySelector('.quiz-sec')
var answerBTN = document.querySelectorAll('.answer-btn')
var timeEl = document.querySelector('.time')
var feedback = document.getElementById('feedback')
var timeLeft = 60
var questions = [
    { 
        question: "What does CSS stand for?",
       option1: "Cholocate Shake Shack",
        option2: "Cascading Style Sheet", 
        option3: "Computer System Styles",
        option4: "None of the above",
    },
    {
        question: "What does HTML stand for?",
        option1: "Hyper Toggle Markdown Language",
        option2: "Hyper Text Markup Language",
        option3: "All of the Above",
        option4: "None ofthe above",
    },
    {
        question: "What does JS mean?",
        option1: "Just Saying",
        option2: "JavaScript",
        option3: "All of the Above",
        option4: "None of the above",
    },
    {
        question: "What does DOM mean in HTML?",
        option1: "Document Object Model",
        option2: "Direct Object Markdown",
        option3: "All of the Above",
        option4: "None of the above",
    },
    {
        question: "Commonly used data types do not include ____________",
        option1: "Strings",
        option2: "Booleans",
        option3: "Alerts",
        option4: "Numbers",
    },
    {
        question: "What is the command used to make a stylesheet?",
        option1: "touch style.css",
        option2: "cd style.css",
        option3: "mkdir css",
        option4: "None of the above",
    },

]
var QI = -1
var questionEl = document.querySelector('#question')
var btn1 = document.querySelector('#option-1')
var btn2 = document.querySelector('#option-2')
var btn3 = document.querySelector('#option-3')
var btn4 = document.querySelector('#option-4')


starter.setAttribute("style", "margin: auto; width:50%; text-align:center; color:black; font-family:san serif; font-size:20px;");
bodyEl.setAttribute("style", "background color:black;");

startB.addEventListener('click', function () {
    console.log('Started')
    qSection.style = "display:block"
    starter.style = "display:none"
    startB.style = "display:none"

    nextQuestion()
    for (let i = 0; i < answerBTN.length; i++) {
        answerBTN[i].addEventListener('click', nextQuestion)

    }
})
function nextQuestion() {
    console.log('option2 === true')
    QI++
    questionEl.textContent = questions[QI].question
    btn1.textContent = questions[QI].option1
    btn2.textContent = questions[QI].option2
    btn3.textContent = questions[QI].option3
    btn4.textContent = questions[QI].option4
}
startB.addEventListener('click', function () {

    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft + " Seconds left to finish this quiz";
    
        if(timeLeft === 0) {
            clearInterval(timerInterval);
            qSection.style = "display:none"
            alert('You are out of time.')
            
        }
    }, 1000);
    
    

})



   
   