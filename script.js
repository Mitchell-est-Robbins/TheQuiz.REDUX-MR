// console.log("winning")

const timer= document.querySelector("#timer")

const startCard= document.querySelector('#startCard')
const startBtn= document.querySelector("#startBtn")
const restartBtn= document.querySelector("#restartBtn")

const questCard= document.querySelector('#questCard')
const qTitle= document.querySelector('#qTitle')
const qAnswers= document.querySelector('#qAnswers')

qArrIterator= 0 //

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
function quizstart() {
    startCard.setAttribute("class", "hide"); //hide start
    questCard.removeAttribute ("class", "hide"); //show the questions
    presentQuestion()
}

function presentQuestion(){
    qTitle.textContent=""
    qAnswers.textContent=""
    
    liveQuestion= questionsArr[qArrIterator]; 
    qTitle.textContent = liveQuestion.question

    liveQuestion.choice.forEach((element, i)=>  {
        let dynaChoiceBtn= document.createElement('button');
        //  dynamic choice button

        // dynaChoiceBtn.setAttribute ("class", "" )//for later with styling
        dynaChoiceBtn.textContent= i+1+ " : " +element;
        qAnswers.appendChild(dynaChoiceBtn)
        
    });

  
 

}
    // WHEN I answer a question
    // THEN I am presented with another question
    // starts the quiz
    // start the timer

// create an array of questions-----------------
// -------------some questions from my earlier attempt 04BootCampHomeworkMR 
const questionsArr =[
    {   
        
        question:"Apes Together...?",
        choice: ["STRONG", "what!?!", "No!", "Who?!" ],
        answer: "STRONG",
    },
    {   
        
        question:" With what do you initiate an ambush?",
        choice: ["The most casualty producing system", "A bomb", "An open bolt system", "A mean word!" ],
        answer: "The most casualty producing system",
    }
]


//  click on the answer-------------------------

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// something to handle the time-----------------

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// end of the quiz??----------------------------

// WHEN the game is over
// hide start and go again...
// restart unhide...
// or see scores------------
// unhide score------------------

// THEN I can save my initials and my score
// score stuff, how to enter via local----------



startBtn.addEventListener('click', quizstart)
restartBtn.addEventListener('click', quizstart)