const quotesSrc = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const generateQuote = () => {
    let randomNum = Math.floor( Math.random() * 102)

    fetch(quotesSrc)
    .then( data => data.json() )
    .then( result => console.log( result.quotes[randomNum].quote, result.quotes[randomNum].author))

}



