var arrayOfCards = [{
    name: 'Adidas',
    img: '/images/adidas.png'
}, {
    name: 'Balenciaga',
    img: '/images/balenciaga.png'
}, {
    name: 'Fear Of God',
    img: '/images/foG.png'
}, {
    name: 'Gallery Debt',
    img: '/images/galleryDebt.jpeg'
}, {
    name: 'Nike',
    img: '/images/nike.png'
}, {
    name: 'Off White',
    img: '/images/offWhite.png'
}, {
    name: 'Adidas',
    img: '/images/adidas.png'
}, {
    name: 'Balenciaga',
    img: '/images/balenciaga.png'
}, {
    name: 'Fear Of God',
    img: '/images/foG.png'
}, {
    name: 'Gallery Debt',
    img: '/images/galleryDebt.jpeg'
}, {
    name: 'Nike',
    img: '/images/nike.png'
}, {
    name: 'Off White',
    img: '/images/offWhite.png'
}]

shuffle(arrayOfCards)
var reset = false
var counter = 0
var hasStarted = true

var score = 0
var matched = 0
var tries = 0
var isP = false
var chosenCards = []

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

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
        } else if (e.target.className == 'cards') {
            flipCard(e.target)
            chosenCards.push(e.target)
            if (chosenCards.length < 3) {
                updateStatus()
                setTimeout(unFlipCards, 1500)
                setTimeout(() => {
                    chosenCards = []
                }, 1500)
            }
        }
    })
}

function updateStatus() {
    if (chosenCards.length == 2) {
        tries++
        document.getElementById('spanForTries').textContent = tries
    }
    if (chosenCards[0].currentSrc == chosenCards[1].currentSrc) {
        score++
        document.getElementById('spanForScore').textContent = score
        matched++
        document.getElementById('spanForMatched').textContent = matched
        isP = true

        if (isP) {
            document.getElementById('spanForP').textContent = 'You P'
        } else {
            document.getElementById('spanForP').textContent = 'Not P'
        }
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function unFlipCards() {
    if (chosenCards[0].currentSrc == chosenCards[1].currentSrc) {
        chosenCards[0].style.position = 'relative'
        chosenCards[1].style.position = 'relative'
        chosenCards[0].style.visibility = 'hidden'
        chosenCards[1].style.visibility = 'hidden'
    } else {
        chosenCards[0].setAttribute('src', '/images/orange.png')
        chosenCards[1].setAttribute('src', '/images/orange.png')
    }
}

function flipCard(target) {
    let images = document.querySelectorAll('img')
    images[target.id].src = arrayOfCards[target.id].img;
}


function start() {
    if (counter < 1 && hasStarted == true) {
        counter++
        for (let i = 0; i < arrayOfCards.length; i++) {
            let currentCard = document.createElement('img')
            currentCard.setAttribute('id', i)
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
        let cardDivs = document.querySelectorAll('.cards')
        cardDivs.forEach(card => {
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

            //TODOS: WORK ON RESET BUTTON
            unFlipCards()

        })
    } else {
        console.error("this is in the else statement in resetBoard() function");
    }
}

createBoard()