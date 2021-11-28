// console.log("winning")

const timer= document.querySelector("#timer")

const startCard= document.querySelector('#startCard')
const startBtn= document.querySelector("#startBtn")
const restartBtn= document.querySelector("#restartBtn")
const score= document.querySelector("#score")

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
    liveQuestion= questionsArr[qArrIterator]; 
    qTitle.textContent=""
    qAnswers.textContent=""
    
    qTitle.textContent = liveQuestion.question

    liveQuestion.choice.forEach((element, i)=>  {
        let dynaChoiceBtn= document.createElement('button');
        //  dynamic choice button

        // dynaChoiceBtn.setAttribute ("class", "" )//for later with styling
        dynaChoiceBtn.setAttribute("value", element);
        dynaChoiceBtn.textContent= i+1+ " : " +element;
        qAnswers.appendChild(dynaChoiceBtn);
        dynaChoiceBtn.onclick = questionlogic;
        
    });

}

function questionlogic(){
    qArrIterator++;
    // console.log(qArrIterator)
    // console.log(questionsArr.length)
    if (qArrIterator === questionsArr.length){endQuiz()} 
    else {presentQuestion()}

     
    // WHEN I answer a question
    // THEN I am presented with another question
    // starts the quiz
    // start the timer
    //  click on the answer-------------------------
    
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    // something to handle the time-----------------
    
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    // end of the quiz??----------------------------
    
}

// create an array of questions-----------------
// -------------some questions from my earlier attempt 04BootCampHomeworkMR 
const questionsArr =[
    {   
        
        question:" With what do you initiate an ambush?",
        choice: ["The most casualty producing system", "what!?!", "An open bolt system", "A mean word!" ],
        answer: "The most casualty producing system",
    },
    {   
        
        question:"Apes Together...?",
        choice: ["STRONG", "what!?!", "No!", "Who?!" ],
        answer: "STRONG",
    },
    {   
        
        question:"What is the 29th Law of Power",
        choice: ["Use absence to increase respect", "what!?!", "Plan All the Way to the end", "Never Appear too perfect" ],
        answer: "Plan All the Way to the end",
    },
    {   
        
        question:"The Tower is what Card #",
        choice: ["7", "what!?!", "12", "16" ],
        answer: "16",
    },
    {   
        
        question:"4",
        choice: ["STRONG", "what!?!", "No!", "Who?!" ],
        answer: "STRONG",
    },
    {   
        
        question:"5",
        choice: ["STRONG", "what!?!", "No!", "Who?!" ],
        answer: "STRONG",
    },
    {   
        
        question:"6",
        choice: ["STRONG", "what!?!", "No!", "Who?!" ],
        answer: "STRONG",
    },
    {   
        
        question:"7",
        choice: ["STRONG", "what!?!", "No!", "Who?!" ],
        answer: "STRONG",
    },
    {   
        
        question:"8",
        choice: ["STRONG", "what!?!", "No!", "Who?!" ],
        answer: "STRONG",
    },
    {   
        
        question:"9",
        choice: ["STRONG", "what!?!", "No!", "Who?!" ],
        answer: "STRONG",
    },
]


function endQuiz() {
    questCard.setAttribute("class", "hide"); //hide questions
    startBtn.setAttribute("class", "hide") //hide cheeky start button
    
    startCard.removeAttribute ("class", "hide")
    restartBtn.removeAttribute ("class", "hide"); //show restart and score
    score.removeAttribute("class", "hide");
    // WHEN the game is over
    // hide start and go again...
    // restart unhide...
    // or see scores------------
    // unhide score------------------

}

// THEN I can save my initials and my score
// score stuff, how to enter via local----------



startBtn.addEventListener('click', quizstart)
restartBtn.addEventListener('click', quizstart)