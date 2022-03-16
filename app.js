const cards = [{
    name: 'Adidas',
    img: 'images.png'
}, {
    name: 'Balenciaga',
    img: 'balenciaga.png'
}, {
    name: 'Fear Of God',
    img: 'foG.png'
}, {
    name: 'Gallery Debt',
    img: 'galleryDebt.jpeg'
}, {
    name: 'Nike',
    img: 'nike.png'
}, {
    name: 'Off White',
    img: 'offWhite.png'
}, {
    name: 'Adidas',
    img: 'images.png'
}, {
    name: 'Balenciaga',
    img: 'balenciaga.png'
}, {
    name: 'Fear Of God',
    img: 'foG.png'
}, {
    name: 'Gallery Debt',
    img: 'galleryDebt.jpeg'
}, {
    name: 'Nike',
    img: 'nike.png'
}, {
    name: 'Off White',
    img: 'offWhite.png'
}]

cards.sort(() => 0.5 - Math.random())
var reset = false

var createBoard = () => {
    var startButton = document.querySelector('button[id="start"]')
    startButton.addEventListener('click', start)
}


//create a start method
function start() {
    for (let i = 0; i < cards.length; i++) {
        let currentCard = document.createElement('div')
        currentCard.setAttribute('id', 'card' + i)
        currentCard.setAttribute('class', 'cards')
        let cardDiv = document.querySelector('#cardContainer')
        cardDiv.append(currentCard)
    }
    this.removeEventListener('click', start)
    clearGame()


}

function clearGame() {
    var welcomeText = document.querySelector('.WelcomeHeader')
    welcomeText.style.display = 'none'
    var pressToStart = document.querySelector('#pressStart')
    pressToStart.style.display = 'none'

    // var cards = document.querySelectorAll('.cards')
    // console.log(cards)
    // cards.setAttribute('animation', 'comeInTrans 3s')
    // cards.setAttribute('animation-timing-function', 'cubic-bezier(.01, 1.39, .06, .91)')
    // cards.setAttribute('animation-fill-mode', 'forwards)')

    /*
    animation-name: comeInTrans
         animation-timing-function: cubic-bezier(.01, 1.39, .06, .91); */
    /* animation-fill-mode: forwards; */

}

createBoard()

// TODOS. Make it to where it does a animation when clicking start