const quotesSrc = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const colors = ['#16a085', 
                '#27ae60', 
                '#2c3e50', 
                '#f39c12', 
                '#e74c3c', 
                '#9b59b6', 
                '#FB6964', 
                '#342224', 
                "#472E32", 
                "#BDBB99", 
                "#77B1A9", 
                "#73A857"];

const body = document.body
const quoteBlock = document.getElementById("text")
const authorBlock = document.getElementById("author")
const twitterBtn = document.getElementById("tweet-quote")
const newQuoteBtn = document.getElementById("new-quote")

const generateQuote = () => {
    let randomNum = Math.floor( Math.random() * 102)

    fetch(quotesSrc)
    .then( data => data.json() )
    .then( result => {
        quoteBlock.innerHTML = result.quotes[randomNum].quote
        authorBlock.innerHTML = `-${result.quotes[randomNum].author}`
        document.getElementById("tweet-quote").href = `https://twitter.com/intent/tweet?hashtags=quotes&text=${result.quotes[randomNum].quote}`

    })
     
    console.log(twitterBtn)

    randomColor();
}

const randomColor = () => {
    let randomNum = Math.floor( Math.random() * (colors.length - 1) )
    body.style.backgroundColor = colors[randomNum]
    quoteBlock.style.color = colors[randomNum]
    authorBlock.style.color = colors[randomNum]
    twitterBtn.style.color = colors[randomNum]
    newQuoteBtn.style.backgroundColor = colors[randomNum]
}

randomColor();
generateQuote();

