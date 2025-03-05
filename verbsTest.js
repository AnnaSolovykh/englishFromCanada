const quizData = {
    questions: [
        {
            text: "Как переведешь:  They had a FALLING-OUT?",
            options: ["У них произошла загвоздка", "Они поссорились", "Нет правильного ответа"],
            answer: "Они поссорились"
        },
        {
            text: "Как сказать фразовым глаголом СЛИВАТЬСЯ в последний момент?",
            options: ["Знаю", "Не знаю"],
            answer: "Знаю"
        },
        {
            text: "Фразовый глагол улаживать проблему: STRAIGHTEN  ___?",
            options: ["up", "out", "in"],
            answer: "out"
        },
        {
            text: "Как сказать фразовым глаголом СДЕЛАТЬ ВЫГОВОР?",
            options: ["Знаю", "Не знаю"],
            answer: "Знаю"
        },
        {
            text: "They hit up right away and started dating.",
            options: ["Предложение правильное", "Предложение неправильное"],
            answer: "Предложение неправильное"
        },
        {
            text: "Как сказать фразовым глаголом СПРАВИТЬСЯ С ЗАДАЧЕЙ?",
            options: ["Pull up", "Pull off", "Нет верного ответа"],
            answer: "Pull off"
        },
        {
            text: "Как сказать фразовым глаголом БЫТЬ В СИЛЕ?",
            options: ["Знаю", "Не знаю"],
            answer: "Знаю"
        },
        {
            text: "Как сказать фразовым глаголом ОТГОВОРИТЬ кого-то что-то делать?",
            options: ["Talk somebody from something", "Talk somebody out of something", "Нет верного ответа"],
            answer: "Talk somebody out of something"
        },
        {
            text: "Как сказать фразовым глаголом НАБИРАТЬ ОБОРОТЫ?",
            options: ["Знаю", "Не знаю"],
            answer: "Знаю"
        },
        {
            text: "Какой глагол используем в обоих случаях:  ИЗМАТЫВАТЬ и ИЗНАШИВАТЬСЯ (например одежда)?",
            options: ["wear off", "wear down", "wear out"],
            answer: "wear out"
        }
    ],
    feedbackMessages: {
        high: "Класс! Ты много знаешь фразовых глаголов. Приходи на мой курс <i>English on Your Terms</i> по YouTube и подкастам, чтобы получить максимум разговорной практики и расширить словарный запас.",
        medium: "Хорошо! Ты уже кое-что знаешь о фразовых глаголах. Иногда они не все поддаются, поэтому тебе точно будет полезен курс <i>Phrasal Verbs</i>, чтобы быть с фразовыми на 'ты' и практиковать их с напарником твоего уровня!",
        low: "Ты начал знакомиться с фразовыми глаголами и тебе предстоит узнать много интересного! На курсе по <i>Phrasal Verbs</i> узнаешь 70 глаголов продвинутого уровня и научишься их применять в речи."
    }
};

class PhrasalVerbQuiz {
    constructor(data, elementsIds) {
        this.questions = data.questions;
        this.feedbackMessages = data.feedbackMessages;
        
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.isTestStarted = false;
        
        this.elements = {
            quizContainer: document.getElementById(elementsIds.quizContainer),
            questionContainer: document.getElementById(elementsIds.questionContainer),
            answersContainer: document.getElementById(elementsIds.answersContainer),
            nextButton: document.getElementById(elementsIds.nextButton),
            questionCounter: null
        };
        
        this.initializeQuiz();
    }
    
    initializeQuiz() {
        this.elements.questionCounter = document.querySelector('.question-counter');
        if (!this.elements.questionCounter) {
            this.elements.questionCounter = document.createElement('div');
            this.elements.questionCounter.className = 'question-counter';
            this.elements.quizContainer.insertBefore(
                this.elements.questionCounter, 
                this.elements.questionContainer
            );
        }
        
        this.elements.questionCounter.style.display = 'none';
        this.elements.questionContainer.style.display = 'none';
        this.elements.answersContainer.style.display = 'none';
        this.elements.nextButton.style.display = 'none';
        
        this.createStartScreen();
        
        this.elements.nextButton.addEventListener('click', () => this.nextQuestion());
    }
    
    createStartScreen() {
        const startMessage = document.createElement('h2');
        startMessage.textContent = 'Хорошо ли ты владеешь фразовыми глаголами?';
        startMessage.id = 'start-message';
        
        const imageContainer = document.createElement('div');
        imageContainer.id = 'start-image-container';
        
        const startButton = document.createElement('button');
        startButton.textContent = 'Начать тест';
        startButton.id = 'start-button';
        startButton.addEventListener('click', () => this.startQuiz(startButton, startMessage, imageContainer));
        
        this.elements.quizContainer.insertBefore(startMessage, this.elements.questionContainer);
        this.elements.quizContainer.insertBefore(imageContainer, this.elements.questionContainer);
        this.elements.quizContainer.insertBefore(startButton, this.elements.questionContainer);
    }
    
    startQuiz(startButton, startMessage, imageContainer) {
        startButton.style.display = 'none';
        startMessage.style.display = 'none';
        imageContainer.style.display = 'none';
        
        this.elements.questionContainer.style.display = 'block';
        this.elements.answersContainer.style.display = 'block';
        this.elements.nextButton.style.display = 'block';
        this.elements.nextButton.disabled = true;
        
        this.isTestStarted = true;
        
        this.displayQuestion();
    }
    
    displayQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
            return;
        }
        
        this.updateQuestionCounter();
        
        this.elements.nextButton.disabled = true;
        this.elements.nextButton.style.display = 'block';
        
        const currentQuestion = this.questions[this.currentQuestionIndex];
        
        const formattedText = currentQuestion.text.replace(
            /(\b[A-ZА-ЯЁ0-9-]+[A-ZА-ЯЁ0-9-]+\b)/g, 
            '<strong>$1</strong>'
        );
        
        this.elements.questionContainer.innerHTML = formattedText;
        this.elements.answersContainer.innerHTML = '';
        
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener("click", () => this.selectAnswer(option, button));
            this.elements.answersContainer.appendChild(button);
        });
    }
    
    updateQuestionCounter() {
        const currentQuestionNumber = this.currentQuestionIndex + 1;
        this.elements.questionCounter.innerHTML = 
            `Вопрос ${currentQuestionNumber}/${this.questions.length}`;
        this.elements.questionCounter.style.display = 'block';
    }
    
    selectAnswer(selectedOption, button) {
        this.disableAllAnswerButtons();
        
        this.elements.nextButton.disabled = false;
        
        const correctAnswer = this.questions[this.currentQuestionIndex].answer;
        
        if (selectedOption === correctAnswer) {
            this.score++;
            button.classList.add('correct-answer');
        } else {
            button.classList.add('incorrect-answer');
        }
    }
    
    disableAllAnswerButtons() {
        const buttons = this.elements.answersContainer.querySelectorAll('button');
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }
    
    showResults() {
        this.elements.questionCounter.style.display = 'none';
        this.elements.nextButton.style.display = 'none';
        this.elements.answersContainer.innerHTML = '';
        
        this.elements.questionContainer.innerHTML = 
            `<div class='completion-message'>Тест окончен! Твой результат: ${this.score}/${this.questions.length}.</div>`;
        
        let feedbackMessage;
        
        switch (true) {
            case this.score >= 8:
                feedbackMessage = this.feedbackMessages.high;
                break;
            case this.score >= 5:
                feedbackMessage = this.feedbackMessages.medium;
                break;
            default:
                feedbackMessage = this.feedbackMessages.low;
                break;
        }
        
        const resultMessage = document.createElement('div');
        resultMessage.className = 'result-message';
        resultMessage.innerHTML = feedbackMessage;
        this.elements.questionContainer.appendChild(resultMessage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const elementsIds = {
        quizContainer: 'quiz-container',
        questionContainer: 'question',
        answersContainer: 'answers',
        nextButton: 'next-question'
    };
    
    const quiz = new PhrasalVerbQuiz(quizData, elementsIds);
});