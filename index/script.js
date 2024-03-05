const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Don't let the noise of others' opinions drown out your own inner voice. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats"
];

const quoteContainer = document.getElementById('quote-container');
const newQuoteBtn = document.getElementById('new-quote-btn');
const shareQuoteBtn = document.getElementById('share-quote-btn');

newQuoteBtn.addEventListener('click', displayRandomQuote);
shareQuoteBtn.addEventListener('click', shareQuote);

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteContainer.textContent = randomQuote;
}

function shareQuote() {
    const quote = quoteContainer.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(twitterUrl, '_blank');
}

// Display initial random quote
displayRandomQuote();
