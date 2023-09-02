
const quiz = [
    {
        question: "Arrange the words given below in a meaningful sequence. 1. Key	2. Door	3. Lock4. Room	5. Switch on	",
        ans1text: "5, 1, 2, 4, 3",
        ans2text: "4, 2, 1, 5, 3",
        ans3text: "1, 3, 2, 4, 5",
        ans4text: "1, 2, 3, 5, 4",
        answer: "1, 3, 2, 4, 5",
    },
    {
        question: " Statements: Some actors are singers. All the singers are dancers Conclusions:Some actors are dancers.No singer is actor.",
        ans1text: "Only (1) conclusion follows",
        ans2text: "Only (2) conclusion follows",
        ans3text: " Either (1) or (2) follows",
        ans4text: "none",
        answer: "Only (1) conclusion follows",
    },{
        question: "CUP : LIP :: BIRD : ?",
        ans1text: "lid",
        ans2text: "hello",
        ans3text: " FORESt",
        ans4text: "BEAK",
        answer: "BEAK",
    },
    {
        question: "He loves to solve programming problems _____ most efficient ways.",
        ans1text: "in",
        ans2text: "on",
        ans3text: "above",
        ans4text: "is",
        answer: "in",

    },
    {
        question: "Which of the following is most similar in meaning to sad",
        ans1text: "happy",
        ans2text: "tears",
        ans3text: "unhappy",
        ans4text: "cry",
        answer: "unhappy",

    },
    {
        question: "Choose the word from the options that can best express the opposite of the given word  :Tiny",
        ans1text: "Soft",
        ans2text: "Average",
        ans3text: "Enormous",
        ans4text: "Weak",
        answer: "Enormous",

    }

]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});

