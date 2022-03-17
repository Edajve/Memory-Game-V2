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
var hasStarted = false

var createBoard = () => {
    var parentDiv = document.querySelector('#gameContainer')
    parentDiv.addEventListener('click', e => {
        if (e.target.id == 'start') {
            start()
        } else if (e.target.id == 'pressStart') {
            start()
        } else if (e.target.id == 'reset') {
            reset = true
            resetBoard()

        }
    })
}


//create a start method
function start() {
    hasStarted = true
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
}


function clearBoard() {
    var welcomeText = document.querySelector('.WelcomeHeader')
    welcomeText.style.display = 'none'
    var pressToStart = document.querySelector('#pressStart')
    pressToStart.style.display = 'none'
}

function resetBoard() {
    if (reset == true && counter < 1) {
        //then reset board
        counter = 0
        counter++
        let cards = document.querySelectorAll('.cards')
        cards.forEach(card => {
            console.log("WE ARE IN HERE");


        })
    } else {
        //default
    }
}

function resetAnimation() {
    let cards = document.querySelectorAll('.cards')
    cards.forEach(card => {
        //when user clicks reset all these properties need to be replaced
        // animation-name: comeInTrans;
        // animation-duration: 3s;
        // animation-timing-function: cubic-bezier(.01, 1.39, .06, .91);
        // animation-fill-mode: forwards;
        card.style.animationName = "resetTransition"
        card.style.animationDuration = "1.5s"
        card.style.animationTimingFunction = "cubic-bezier(.61,.17,.14,1.91)";
        // cubic-bezier(.49,.02,.59,.97)
        card.style.animationFillMode = "forwards"

    })


}

createBoard()