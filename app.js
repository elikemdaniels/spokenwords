// app.js

const fetchData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    const randomQuote = data.quote;
    const quoteAuthor = data.author;

    // Update HTML elements with the fetched data
    const quote = document.querySelector('.hero-container h1');
    const author = document.querySelector('.quote-author');

    quote.textContent = randomQuote;
    author.textContent = quoteAuthor;
  } catch (error) {
    console.log('Cannot fetch data.', error);
  }
};

// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  fetchData();
});

// Add event listener to the "New Quote" button to fetch new data
const newQuoteButton = document.querySelector('button');
newQuoteButton.addEventListener('click', () => {
  fetchData();
});
