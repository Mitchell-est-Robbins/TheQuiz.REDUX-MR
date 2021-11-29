// console.log("winning")


const startCard= document.querySelector('#startCard');
const startBtn= document.querySelector("#startBtn");
const restartBtn= document.querySelector("#restartBtn");
const leaderboard= document.querySelector("#leaderboard")

const score= document.querySelector("#scores");
let scoreNum= 0;

const questCard= document.querySelector('#questCard');
const qTitle= document.querySelector('#qTitle');
const qAnswers= document.querySelector('#qAnswers');

let qArrIterator= 0 // start at index position 0

const timer= document.querySelector("#timer");
let clock;
let theTime= 100


// ============= start =========================================
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
function quizstart() {
    startCard.setAttribute("class", "hide"); //hide start
    questCard.removeAttribute ("class", "hide"); //show the questions
    
    let theTime= 100 
    clock= setInterval(countDown, 1000) //thanks unit 4 inclass 10 for time stuff
    timer.textContent = theTime
    
    presentQuestion()
}
// ============= time stuff =========================================

function countDown() {
    theTime --;
    timer.textContent=theTime;
    if (theTime < 0 ){endQuiz()}
}
// ============= making questions show =========================================

function presentQuestion(){
    liveQuestion= questionsArr[qArrIterator]; 
    qTitle.textContent=""
    qAnswers.textContent=""
    
    qTitle.textContent = liveQuestion.question

    liveQuestion.choice.forEach((element, i)=>  {
        let dynaChoiceBtn= document.createElement('button');
    // ----- dynamic choice button-------
        dynaChoiceBtn.setAttribute ("class", "btn btnC col" )
        dynaChoiceBtn.setAttribute("value", element);
        dynaChoiceBtn.textContent= i+1+ " : " +element;
        qAnswers.appendChild(dynaChoiceBtn);
        dynaChoiceBtn.onclick = questionlogic;
        
    });

}
// ============= making the questions work =========================================

function questionlogic(){
    
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    if (this.value !== questionsArr[qArrIterator].answer) {
        console.log(this)
        theTime -= 10;
        }else{ scoreNum ++}
    if (theTime < 0) {theTime = 0}
    
    console.log(scoreNum)
    score.textContent=scoreNum;

    
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    qArrIterator++;
    if (qArrIterator === questionsArr.length){endQuiz()} 
    else {presentQuestion()}
    
}

// ============= the questions =========================================
// -------------some questions from my earlier attempt 04BootCampHomeworkMR 

const questionsArr =[
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
        
        question:"The Tower is what Tarot Card #",
        choice: ["7", "what!?!", "12", "16" ],
        answer: "16",
    },
    {   
        
        question:" With what do you initiate an ambush?",
        choice: ["The most casualty producing system", "what!?!", "With an open bolt weapon", "By yelling a very mean word!" ],
        answer: "The most casualty producing system",
    },
    {   
        
        question:"People of Byzantium called themselves",
        choice: ["Turkish", "Macadonian", "Roman", "Who?!" ],
        answer: "Roman",
    },
    {   
        
        question:"Stocks go...",
        choice: ["UP", "Sir, you're drunk", "This is a Walgreens", "Please leave" ],
        answer: "UP",
    },
    {   
        
        question:"When deploying Lethal Autonomous Weapon systems, you should be... ",
        choice: ["Partying", "Outside of their effective range", "I have no opinion because I am uninformed", "In the loop" ],
        answer: "Outside of their effective range",
    },
    {   
        
        question:"When should you buy crypto?",
        choice: ["Today", "Tomorrow", "Yesterday", "Never" ],
        answer: "Yesterday",
    },
    {   
        
        question:"A man weighting 8 stone, and 4ish cubit tall is?",
        choice: ["healthy", "underweight", "overweight", "stone?!?!" ],
        answer: "underweight",
    },
    {   
        
        question:"Maccas = ",
        choice: ["Apple products", "what!?!", "McDonalds", "Who?!" ],
        answer: "McDonalds",
    },
]

// ============= how it ends =========================================

function endQuiz() {
    // WHEN the game is over
    clearInterval(clock)
    questCard.setAttribute("class", "hide"); //hide questions
    startBtn.setAttribute("class", "hide") //hide cheeky start button
    

    startCard.removeAttribute ("class", "hide")
    restartBtn.removeAttribute ("class", "hide"); //show restart and score
    leaderboard.removeAttribute("class", "hide");
    restartBtn.setAttribute ("class", "btn btnC" )
    qArrIterator= 0
    
    
}

// THEN I can save my initials and my score
// score stuff, how to enter via local----------


// ============= how it starts  =========================================

startBtn.addEventListener('click', quizstart)
restartBtn.addEventListener('click', restartquiz)
function restartquiz(){
    window.location.reload()
}