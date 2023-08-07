#Objective: beat the dealer
win: drawing a hand closer to 21 than the dealer
    the dealer drawing a hand over 21
lose: hand value exceeds 21
    the dealer draws a hand closer to 21

#Rules
1. 2-10 count at face value
2. face cards count as 10
3. Ace can count as 1 or 11 depending on which value helps the hand

#theGame
1. Deck is shuffled, game starts
2. Player places a wager
    -wager starts at $5
3. Dealer deals cards to player
    -one card face up to player(s) one card face down for herself
    -one more card face up to player(s) and one face up for herself
4. Player decides how to play hand
    -add card values together which sums to 4-21
  *if you're dealt a 10 and an ace, you win! paid 1.5x the wager. If the dealer also has blackjack, you don't win but don't lose money = 'push'*
    -play options:
        -> stand: keep the init cards
        -> hit: add more cards one at a time, until you bust or choose to stand
        *optional: split and double down*
        -> surrender/fold
5. Dealer plays hand
    -face-down card is turned up, card values are added
    -if total is 17+ it must stand, if the total is <=16 they must take a card
    -if dealer has an 'ace' and counting it as 11 would bring the total to 17+ but <21 it must stand
6. Payout
    -lose: if you bust/dealer has a higher hand | you lose the wager
    -win: if the dealer busts/you have a higher hand | you win 1x the wager (the same amount as your wager)
    -tie: 'push' you keep your money but are not paid

*split double-downs*
*adding more player*

*usually 6 or 8 decks of cards are used*
*decks are shuffled at about 50*
*game can have just one player vs comp(dealer)*

#Pseudocode
-states: player, dealer, deck, "board"(actions of hit, stand, etc.)
1. build deck function, shuffle deck function
2. Initial state of game: no cards, bets cleared, winnings cleared, bank balance remains
3. Prompt that tells the player what action is required("time to bet!" etc.)
4. Store a wager amount in an input field that will be used to calculate winnings for the round later
    -wager amount is subtracted from bank
5. deal cards function
    -deal cards to player 
    -deal cards to dealer (one face down)
6. player interacts with the action buttons (eventListener)
    -hit will deal another card ----> this starts a loop that will add the value of the hand, look breaks on bust or stand 
    -if hit and >21 message: "bust!" ----> return to init
    -stand will end the turn
7. Dealer plays hand function
    -face down card is flipped, hand is calculated 
        -if ===21 and player !==21: message "Dealer Blackjack, you lose." ---> return to init
        -if ===21 and player ===21: message "Push, bet returned." ---> return to init
        -else continue
        -if hand value <=16 they automatically hit
        -if hand value is >17 they automatically stand
        --if dealer has an 'ace' and counting it as 11 would bring the total to >17 but <21 it must stand
8. Check win function
    -compares player hand to dealer hand
        -if player is closer to 21 without busting, winnings returned = bet * 2 and this amount is added to bank
        -if dealer is closer to 21, bet lost
        -if tie, bet returned, winnings = 0
9. Return to init



#Brainstorm
-card rank array (card and value of card)
-store A with two key-value pairs -> Ace high/Ace low ->
-for betting system -> input values + conditional. ex: if win - return input * 2 etc.
-odds for pulling a card stay the same (6 or 8 deck game, odds of pulling a certain card stay basically the same)
-creating an order for how the cards are dealt -> asynch function to create delay 
-how to flip the dealer card, not have both cards visible
-how to overlap cards (styling), so that cards are not side by side



