let flashcards = [];
let currentCardIndex = 0;
let correctAnswers = 0;

const flashcardContainer = document.getElementById('flashcard-container');
const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');
const addFlashcardBtn = document.getElementById('add-flashcard-btn');
const startQuizBtn = document.getElementById('start-quiz-btn');

addFlashcardBtn.addEventListener('click', () => {
    const question = prompt("Enter the question:");
    const answer = prompt("Enter the answer:");

    if (question && answer) {
        flashcards.push({ question, answer });
        displayFlashcards();
    }
});

function displayFlashcards() {
    flashcardContainer.innerHTML = '';
    flashcards.forEach((flashcard, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('flashcard');
        cardElement.textContent = `${index + 1}. ${flashcard.question}`;
        flashcardContainer.appendChild(cardElement);
    });
}

startQuizBtn.addEventListener('click', () => {
    currentCardIndex = 0;
    correctAnswers = 0;
    displayNextCard();
    quizContainer.style.display = 'block';
    scoreContainer.textContent = '';
});

function displayNextCard() {
    if (currentCardIndex < flashcards.length) {
        const currentFlashcard = flashcards[currentCardIndex];
        const userAnswer = prompt(currentFlashcard.question);
        if (userAnswer && userAnswer.toLowerCase() === currentFlashcard.answer.toLowerCase()) {
            correctAnswers++;
        }
        currentCardIndex++;
        displayNextCard();
    } else {
        const scoreText = `You got ${correctAnswers} out of ${flashcards.length} correct.`;
        scoreContainer.textContent = scoreText;
        quizContainer.style.display = 'none';
    }
}
