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
			hitFxn()
		} else if (evt.target.innerText === 'STAND') {
			standFxn()
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
		playerHand = shuffledDeck.slice(0,2);
		dealerHand = shuffledDeck.slice(2,4);
	} pHandValue()
}

function renderHands(card) {
	while(playerHandEl.firstChild) {
		playerHandEl.removeChild(playerHandEl.lastChild)
	}
	while(dealerHandEl.firstChild) {
		dealerHandEl.removeChild(dealerHandEl.lastChild)
	}

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

function hitFxn() {
	const randomCardIdx = Math.floor(Math.random() * shuffledDeck.length)
	const newCard = shuffledDeck.slice(randomCardIdx, (randomCardIdx + 1))[0]
	playerHand.push(newCard)
	renderHands()
	pHandValue()
}

function standFxn() {
	dealerTurn()
}

function dealerTurn() {

	//while(dealerValue < 17)
}

function checkWin() {
	
}

function pHandValue() {
 	let playerValue = 0
 	let pAceCount = 0
 	for (let i=0; i< playerHand.length; i++) {
 		playerValue += playerHand[i].value
 		if(playerHand[i].face ===  ('sA' || 'cA' || 'dA' || 'hA')) {
			pAceCount++ }
		for (let j=pAceCount; j>0; j--) {
			if(playerValue > 21) {
				playerValue -= 10}
		}	
	} console.log(playerValue)
} 

function dHandValue() {
	let dealerValue = 0
	let dAceCount = 0
	for (let i=0; i< dealerHand.length; i++) {
		dealerValue += dealerHand[i].value
		if(dealerHand[i].face ===  ('sA' || 'cA' || 'dA' || 'hA')) {
		   dAceCount++ }
	   for (let j=dAceCount; j>0; j--) {
		   if(dealerValue > 21) {
			   dealerValue -= 10}
	   }	
	}
}


//Ace = 11, if value is >21 --- forEach Ace subtract 10 from plaeryValue until <= 21
//so have an AceCount and a total for the hand 

/* 
how to Render new card on hit? if i call renderHands() it renders not just the new card 
but the original 2 as well.
how do I render the first dealer card face down?
*/
