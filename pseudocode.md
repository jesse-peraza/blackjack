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

*usually 6 or 8 decks of cards are used*
*decks are shuffled at about 50*
*game can have just one player vs comp(dealer)*
    
