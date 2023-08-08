	/*----- constants -----*/


	/*----- state variables -----*/
	const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
	const suits = ['s', 'c', 'd', 'h'];
	// const originalDeck = buildOriginalDeck();


	/*----- cached elements  -----*/


	/*----- event listeners -----*/


	/*----- functions -----*/
	init()
	
	function init() {
		buildOriginalDeck()
		shuffleDeck()
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

	function shuffleDeck() {
		const tempDeck = [...originalDeck]
		const shuffledDeck = []
		while (tempDeck.length) {
			const rndIdx = Math.floor(Math.random() * tempDeck.length);
			shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0])
		}
		return shuffledDeck;
	}


	/* Render deck in a whatever DOM container you want 
	renderDeckinContainer(originalDeck, document.getElementById)
	*/