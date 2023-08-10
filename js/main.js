/*----- constants -----*/
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const suits = ['s', 'c', 'd', 'h'];
const originalDeck = buildOriginalDeck();


/*----- state variables -----*/
let shuffledDeck, playerHand, dealerHand
//dealerValue, playerValue

/*----- cached elements  -----*/
const dealerHandEl = document.getElementById('dealer-hand')
const playerHandEl = document.getElementById('player-hand')
const actionEls = document.querySelector('.player-action')
/*----- event listeners -----*/
actionEls.addEventListener('click', evt => {
	if(evt.target.tagName !== 'BUTTON') {
		return;
	} else {
		if(evt.target.innerText === 'HIT') {
			console.log('hit')
		} else if (evt.target.innerText === 'STAND') {
			console.log('stand')
		} else if (evt.target.innerText === 'DEAL') {
			renderHands()
		}
	}
})

/*----- functions -----*/
init()

function init() {
	shuffledDeck = getNewShuffleDeck()
	playerHand = []
	dealerHand = []
	dealHands()
}

// function render() {
// 	renderHands()
// }

function buildOriginalDeck() {
	const deck = []
	suits.forEach(function(suit){
		ranks.forEach(function(rank){
			deck.push({
				face: `${suit}${rank}`,
				value: Number(rank) || (rank === 'A' ? 11 : 10)
			})
		})
	})
	return deck;
}

function getNewShuffleDeck() {
	const tempDeck = [...originalDeck]
	const newShuffledDeck = []
	while (tempDeck.length) {
		const rndIdx = Math.floor(Math.random() * tempDeck.length);
		newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0])
	}
	return newShuffledDeck;
}

function dealHands() {
	for(let i=0; i < 2; i++) {
		let card = shuffledDeck.pop()
		playerHand.push(card)
	}
	for(let i=0; i < 2; i++) {
		let card = shuffledDeck.pop()
		dealerHand.push(card)
	}
}

function renderHands(card) {
	playerHand.forEach((card) => {
		let pcardEl = document.createElement('span')
		pcardEl.innerHTML = `<span class="card ${card.face}"></span>`
		playerHandEl.appendChild(pcardEl)
	})
	dealerHand.forEach((card) => {
		let dcardEl = document.createElement('span')
		dcardEl.innerHTML = `<span class="card ${card.face}"></span>`
		dealerHandEl.appendChild(dcardEl)
	})
}

