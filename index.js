let questions = [
    {question:"How many 2+2 ?",answer:4},
    {question:"How many 2*2 ?",answer:4},
    {question:"How many 2-2 ?",answer:0},
    {question:"How many 2/2 ?",answer:1},
    {question:"How many 2%2 ?",answer:0},
]


let quizQuestions = document.querySelector('.question');
let quizStatus = document.querySelector('.quiz-status')
let input = document.getElementById('quiz-input');
let submit = document.getElementById('quiz-submit');

let right = document.querySelector('.right');
let wrong = document.querySelector('.wrong');
let quizResult = document.querySelector('.quiz-result');


let questionNo=0;
let rightQuestion = 0;
let wrongQuestion = 0;

quizQuestions.innerText = `Q${questionNo+1}. ${questions[questionNo].question}?`;
submit.addEventListener('click',()=>{
    
    console.log(questionNo)
    if(questionNo<questions.length)
    {
        
        submit.innerText="submit"
        console.log(input.value ,"  ", questions[questionNo].answer)
        if(questions[questionNo].answer==input.value)
        {
            rightQuestion++;
            quizStatus.innerText="right answer"
            quizStatus.style.backgroundColor = 'green';
            quizStatus.style.padding = '7px';
            
        }
        else{
            wrongQuestion++;
            quizStatus.innerText="wrong answer"
            quizStatus.style.backgroundColor = 'red';
            quizStatus.style.padding = '7px';
        }
        
        questionNo++;
        
        if(questionNo==questions.length)
        {
            right.innerText = `Total Right question: ${rightQuestion}`
            wrong.innerText = `Total wrong question: ${wrongQuestion}`
            let result = (rightQuestion/questionNo)*100;
            console.log("---",result)
            if(result>33)
            {
                quizResult.innerText = `Final Result : Pass`;
            }
            else{
                quizResult.innerText = `Final Result : Fail`;
            }
            submit.innerText="restart"
            questionNo=0;
            wrongQuestion=0;
            rightQuestion=0;
        }

        quizQuestions.innerText = `Q${questionNo+1}. ${questions[questionNo].question}?`;
        input.value = "";
    }
    
    
    else{
        

        
    }
    
})