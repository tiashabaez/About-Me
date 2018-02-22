var quotes= ["Another one- DJ Khaled", "Just Do It- Nike", "Nike-Tiasha", "Be the Change you wish to see in the wolrd- MahatmaGhandi", "okay-Tiasha", "It been magical, but I'm done.-Khloe Kardashian"] 

function newQuote() {
var randNum = Math.floor(Math.random() * (quotes.length))
document.getElementById('quoteDisplay').innerHTML= quotes[randNum]
}
