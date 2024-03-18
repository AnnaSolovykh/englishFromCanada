function initializeQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question');
    const answersContainer = document.getElementById('answers');
    const nextButton = document.getElementById('next-question');
    
    questionContainer.style.display = 'none';
    answersContainer.style.display = 'none';
    nextButton.style.display = 'none';
    
    const startMessage = document.createElement('h2');
    startMessage.textContent = 'Хорошо ли ты владеешь фразовыми глаголами?';
    startMessage.id = 'start-message';

    const imageContainer = document.createElement('div');
    imageContainer.id = 'start-image-container';

    const startButton = document.createElement('button');
    startButton.textContent = 'Начать тест';
    startButton.id = 'start-button';
    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';

        questionContainer.style.display = 'block';
        answersContainer.style.display = 'block';
        displayQuestion(); 
    });

    quizContainer.insertBefore(startMessage, questionContainer);
    quizContainer.insertBefore(imageContainer, questionContainer);
    quizContainer.insertBefore(startButton, questionContainer);
}

document.addEventListener('DOMContentLoaded', initializeQuiz);

const questions = [
    {
        text: "They had a falling off yesterday.",
        options: ["У них произошла загвоздка", "Они поссорились", "нет правильного ответа"],
        answer: "Они поссорились"
    },
    {
        text: "Как сказать фразовым глаголом: Она всегда сливается в самый последний момент?",
        options: ["Знаю", "Не знаю"],
        answer: "Знаю"
    },
    {
        text: "Фразовый глагол улаживать проблему: straighten ___?",
        options: ["up", "out", "in"],
        answer: "out"
    },
    {
        text: "Как сказать фразовым глаголом? Она сделала ей вчера выговор при всех ее коллегах.",
        options: ["Знаю", "Не знаю"],
        answer: "Знаю"
    },
    {
        text: "They hit up right away and started dating.",
        options: ["Предложение правильное", "Предложение неправильное"],
        answer: "Предложение неправильное"
    },
    {
        text: "Как сказать: справиться с задачей",
        options: ["Pull up", "Pull off", "нет верного ответа"],
        answer: "Pull off"
    },
    {
        text: "Как сказать фразовым глаголом: Встреча еще в силе?",
        options: ["Знаю", "Не знаю"],
        answer: "Знаю"
    },
    {
        text: "Как сказать фразовым глаголом: отговорить кого-то от чего-то",
        options: ["Talk somebody from something", "Talk somebody out of something", "Нет верного ответа"],
        answer: "Talk somebody out of something"
    },
    {
        text: "Знаешь, как сказать на английском эту фразу? Его машина переехала мой велик вчера.",
        options: ["Да", "Нет"],
        answer: "Да"
    },
    {
        text: "Какой глагол используем в обоих случаях: изматывать и изнашиваться (например, одежда)",
        options: ["wear off", "wear down", "wear out"],
        answer: "wear out"
    }
];

let currentQuestionIndex = 0;
let score = 0;


function displayQuestion() {
    const questionContainer = document.getElementById('question');
    const answersContainer = document.getElementById('answers');
    const nextButton = document.getElementById('next-question');
    

    if (currentQuestionIndex >= questions.length) {
        questionContainer.innerHTML = `<div class='completion-message'>Quiz completed! Your score: ${score}/${questions.length}.</div>`;
        answersContainer.innerHTML = '';
        nextButton.style.display = 'none';
        let additionalMessage = '';

        if (score >= 8) {
            additionalMessage = "<div class='course-invitation'>Класс! Ты много знаешь фразовых глаголов. Приходи на мой курс <i>English on Your Terms</i> по YouTube и подкастам, чтобы получить максимум разговорной практики и расширить словарный запас.</div>";
        } else if (score >= 5) {
            additionalMessage = "<div class='course-invitation'>Хорошо! Ты уже кое-что знаешь о фразовых глаголах. Иногда они не все поддаются, поэтому тебе точно будет полезен курс <i>Phrasal Verbs</i>, чтобы быть с фразовыми на 'ты' и практиковать их с напарником твоего уровня!</div>";
        } else {
            additionalMessage = "<div class='course-invitation'>Ты начал знакомиться с фразовыми глаголами и тебе предстоит узнать много интересного! На курсе по <i>Phrasal Verbs</i> узнаешь 70 глаголов продвинутого уровня и научишься их применять в речи.</div>";
        }
        questionContainer.innerHTML += additionalMessage;
        return;
    }
    

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.text;
    answersContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(option, button));
        answersContainer.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function disableAllButtons() {
    const buttons = document.querySelectorAll('#answers button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function markAnswerCorrect(button) {
    button.classList.add('correct-answer');
}

function markAnswerIncorrect(button) {
    button.classList.add('incorrect-answer');
}

function selectAnswer(selectedOption, button) {
    disableAllButtons();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
        markAnswerCorrect(button);
    } else {
        markAnswerIncorrect(button);
    }
    document.getElementById('next-question').style.display = 'block';
}

document.getElementById('next-question').addEventListener('click', () => {
    currentQuestionIndex++;
    displayQuestion();
});

displayQuestion();
