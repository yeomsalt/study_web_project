const quotes = [
    { 
        quote: "Insanity is doing the same thing over and over again and expecting different results.",
        author: "Albert Einstein"  
    },
    {
        quote:"Fake it till you make it.",
        author:"Mary Kay Ash"
    },
    {
        quote:"Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein"
    },
    {
        quote:"Imagination is more important than knowledge.",
        author: "Albert Einstein"  
    },
    {
        quote:"The way to get started is to quit talking and begin doing.",
        author:"Walt Disney"
    },
    {
        quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author:"Mahatma Gandhi"
    },
    {
        quote:"Life is like riding a bicycle. To keep  your balance, you must keep moving.",
        author:"Albert Einstein"
    },
    {
        quote:"The key to success is failure.",
        author:"Michael Jordan"
    },
    {
        quote:"patience is a key element of success.",
        author:"Bill Gates"
    },
    {
        quote:"With great power comes great responsibility.",
        author:"Spiderman"
    },
    {
        quote:"Higher, Further, Faster Baby.",
        author:"Captian Marvel"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// console.log(todaysQuote);
console.log(todaysQuote.quote);
console.log(todaysQuote.author);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
