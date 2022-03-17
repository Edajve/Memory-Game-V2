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
var counter = 0
var hasStarted = true

var createBoard = () => {
    var parentDiv = document.querySelector('#gameContainer')
    parentDiv.addEventListener('click', e => {
        if (e.target.id == 'start' && hasStarted == true) {
            start()
        } else if (e.target.id == 'pressStart') {
            start()
        } else if (e.target.id == 'reset') {
            reset = true
            resetBoard()
        }
    })
}

function start() {
    if (counter < 1 && hasStarted == true) {
        counter++
        for (let i = 0; i < cards.length; i++) {
            let currentCard = document.createElement('div')
            currentCard.setAttribute('id', 'card' + i)
            currentCard.setAttribute('class', 'cards')
            let cardDiv = document.querySelector('#cardContainer')
            cardDiv.append(currentCard)
        }
        this.removeEventListener('click', start)
        clearBoard()
    }
    hasStarted = false
}

function clearBoard() {
    var welcomeText = document.querySelector('.WelcomeHeader')
    welcomeText.style.display = 'none'
    var pressToStart = document.querySelector('#pressStart')
    pressToStart.style.display = 'none'
}

function resetBoard() {
    reset = true
    if (reset == true && counter <= 1) {
        counter = 0
        reset = false
        let cards = document.querySelectorAll('.cards')
        cards.forEach(card => {
            if (card.style.animationName != "resetTransition" && card.style.animationName != "resetTransition2") {
                card.style.animationName = "resetTransition"
                card.style.animationDuration = "1.5s"
                card.style.animationTimingFunction = "cubic-bezier(.61,.17,.14,1.91)";
            } else if (card.style.animationName == "resetTransition") {
                card.style.animationName = "resetTransition2"
            } else if (card.style.animationName == "resetTransition2") {
                card.style.animationName = "resetTransition"
            } else {
                card.style.animationName = "resetTransition"
            }
        })
    } else {
        console.log("this is in the else statement in resetBoard() function");
    }
}

createBoard()