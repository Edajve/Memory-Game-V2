var arrayOfCards = [{
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

shuffle(arrayOfCards)
console.log(arrayOfCards);


var reset = false
var counter = 0
var hasStarted = true

//game stats
var score = 0
var matched = 0
var tries = 0
var isP = false
var chosenCards = []


//randomize array
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
            //flip the card of which ever image is under that specific card
            //then add that card to an empty array called chosenCards
            //then add a increment to tries variable
        }
    })
}

function start() {
    if (counter < 1 && hasStarted == true) {
        counter++
        for (let i = 0; i < arrayOfCards.length; i++) {
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

//to clear the welcome text
function clearBoard() {
    var welcomeText = document.querySelector('.WelcomeHeader')
    welcomeText.style.display = 'none'
    var pressToStart = document.querySelector('#pressStart')
    pressToStart.style.display = 'none'
}
//add either event listeners or put an event listener on the parent div
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
        })

        //YOU WHERE WORKING ON THIS RIGHT HERE, THE COMPUTER DOESNT RECOGNIZE THE sort() , INSIDE OUT generateRandom()
        //have to find out why
        shuffle(arrayOfCards)
            // console.log(cardDivs);
        console.log(arrayOfCards);
    } else {
        console.error("this is in the else statement in resetBoard() function");
    }
}

createBoard()