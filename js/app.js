/*
 * Create a list that holds all of your cards
 */

let cardSymbol = [
  "fa fa-diamond",
  "fa fa-paper-plane-o",
  "fa fa-anchor",
  "fa fa-bolt",
  "fa fa-cube",
  "fa fa-anchor",
  "fa fa-leaf",
  "fa fa-bicycle",
  "fa fa-diamond",
  "fa fa-bomb",
  "fa fa-leaf",
  "fa fa-bomb",
  "fa fa-bolt",
  "fa fa-bicycle",
  "fa fa-paper-plane-o",
  "fa fa-cube"
],
matched = [];
openCards = [];

let moves = 0;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//add event listner all cards (click)
 $('.deck').find('.card').on('click', function(){
     if ($(this).hasClass('open show') || $(this).hasClass('match')) { 
       console.log('Just return!');
       return; 
     }   
    
    //push openCards array
     $(this).toggleClass('open show');
      openCards.push($(this));
      
      console.log('openCards='+openCards.length);
      
      //check if cards match
       if(openCards.length === 2) { 
         console.log('This is the second cards! (openCards.length === 2)');
        
          //matched
           if($(openCards[0]).find('i').attr('class') === $(openCards[1]).find('i').attr('class')){
             console.log('Both are matched!'+$(openCards[0]).find('i').attr('class'));
             openCards[0].addClass('match');
             openCards[1].addClass('match');
             removeOpenCards();
             counter++;
           }
           //hide the cards symbol
           else if($(openCards[0]).find('i').attr('class') !== $(openCards[1]).find('i').attr('class')){
             setTimeout(function(){
             console.log('Both are not matched!');
             openCards[0].toggleClass('open show');
             openCards[1].toggleClass('open show');
             removeOpenCards();
           }, 1000);
            incrementMove();
           }
           
         }
       }  
 );


 //resetGame
 $('#resetButton').click(resetGame);

 
 function resetGame(){
   console.log('started');
   
 }
 
 function removeOpenCards() {
     openCards = [];
 }

//increment move count
function incrementMove(){
  moves += 1;
  $('.moves').html(moves);
}
