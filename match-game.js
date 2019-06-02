var MatchGame = {};


/*
  Generates and returns an array of matching card values,
  using the Fisher-yates shuffle algorithm.
 */

MatchGame.generateCardValues = function() {

  var cardValues = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  var i;

  for(i = cardValues.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = cardValues[i];
          cardValues[i] = cardValues[j];
          cardValues[j] = temp;
      };

  return cardValues;
};


//Class for card objects

class Card {

constructor(cardValue) {
this._value = cardValue;
this._color = '';
this._isFlipped = false;
}

get value() {
  return this._value;
}

get color() {
  return this._color;
}

get status() {
  return this._isFlipped;
}

// set status() {
//   this._isFlipped = true;
// }

selectColor() {

  switch(this.value) {
    case 1:
      this._color = 'hsl(25,85%,65%)';
      break;
    case 2:
      this._color = 'hsl(55, 85%, 65%)';
      break;
    case 3:
      this._color = 'hsl(90, 85%, 65%)';
      break;
    case 4:
      this._color = 'hsl(220, 85%, 65%)';
      break;
    case 5:
      this._color = 'hsl(160, 85%, 65%)';
      break;
    case 6:
      this._color = 'hsl(265, 85%, 65%)';
      break;
    case 7:
      this._color = 'hsl(310, 85%, 65%)';
      break;
    case 8:
      this._color = 'hsl(360, 85%, 65%)';
      break;
  }

  return this._color;

}

}

// Intantiating 16 card objects

var x = MatchGame.generateCardValues();
var cardOne = new Card(x[0]);
cardOne.selectColor();
var cardTwo = new Card(x[1]);
cardTwo.selectColor();
var cardThree = new Card(x[2]);
cardThree.selectColor();
var cardFour = new Card(x[3]);
cardFour.selectColor();
var cardFive = new Card(x[4]);
cardFive.selectColor();
var cardSix = new Card(x[5]);
cardSix.selectColor();
var cardSeven = new Card(x[6]);
cardSeven.selectColor();
var cardEight = new Card(x[7]);
cardEight.selectColor();
var cardNine = new Card(x[8]);
cardNine.selectColor();
var cardTen = new Card(x[9]);
cardTen.selectColor();
var cardEleven = new Card(x[10]);
cardEleven.selectColor();
var cardTwelve = new Card(x[11]);
cardTwelve.selectColor();
var cardThirteen = new Card(x[12]);
cardThirteen.selectColor();
var cardFourteen = new Card(x[13]);
cardFourteen.selectColor();
var cardFifteen = new Card(x[14]);
cardFifteen.selectColor();
var cardSixteen = new Card(x[15]);
cardSixteen.selectColor();

//testing

//the original background color of unflipped tile


/*
*This function flips the tile when clicked on and reveals its value
* @param takes in the click event as an object
 */
let flip = function(event){

  const target = event.target;
  const tileValue = target.getAttribute('id');

  let card;
  switch(tileValue){
    case 'tileOne':
      card = cardOne;
      break;
    case 'tileTwo':
      card = cardTwo;
      break;
    case 'tileThree':
      card = cardThree;
      break;
    case 'tileFour':
      card = cardFour;
      break;
    case 'tileFive':
      card = cardFive;
      break;
    case 'tileSix':
      card = cardSix;
      break;
    case 'tileSeven':
      card = cardSeven;
      break;
    case 'tileEight':
      card = cardEight;
      break;
    case 'tileNine':
      card = cardNine;
      break;
    case 'tileTen':
      card = cardTen;
      break;
    case 'tileEleven':
      card = cardEleven;
      break;
    case 'tileTwelve':
      card = cardTwelve;
      break;
    case 'tileThirteen':
      card = cardThirteen;
      break;
    case 'tileFourteen':
      card = cardFourteen;
      break;
    case 'tileFifteen':
      card = cardFifteen;
      break;
    case 'tileSixteen':
      card = cardSixteen;
      break;
  }
  if(card._isFlipped !== true){

    target.innerHTML = card.value;
    target.style.backgroundColor =  card.color;
    card._isFlipped = true;
    turn(tileValue,card);

  }

}

//counter and check function

let turns = 0;
let cardOneValue;
let cardTwoValue;
let firstTileTurned;
let secondTileTurned;
const notFlippedBgColor = 'rgb(32,64,86)'
let previousCard;

function turn(target, card){
  if(turns === 0 && turns < 1){
    previousCard = card;
    cardOneValue = card.value;
    firstTileTurned = target;
    console.log("first " + turn);
    turns = 1;

  } else if(turns === 1 && turns !== 0) {
    cardTwoValue = card.value;
    secondTileTurned = target;
    turns = 0;

    if(cardOneValue !== cardTwoValue){




      setTimeout(()=>{

        document.getElementById(firstTileTurned).style.backgroundColor = notFlippedBgColor;
        document.getElementById(firstTileTurned).innerHTML="";

        document.getElementById(secondTileTurned).style.backgroundColor = notFlippedBgColor;
        document.getElementById(secondTileTurned).innerHTML="";

      },1000);

      console.log("second " + turns);

      previousCard._isFlipped = false;
      card._isFlipped = false;
      cardOneValue = '';
      cardTwoValue = '';


    }
  }

}










/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/



//jquery stuff


// MatchGame.renderCards = function(cardValues, $game) {
//
//   var color = ['hsl(25,85%,65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(220, 85%, 65%)', 'hsl(160, 85%, 65%)', 'hsl(265, 85%, 65%)', 'hsl(310, 85%, 65%)', 'hsl(360, 85%, 65%)'];
//
//   var value = MatchGame.generateCardValues();
//
//   $game.empty();
//   $game.data('flippedCards', []);
//
// for(var i = 0; i < color.length; i++) {
//   var Value = value[i];
//   var Color = color[(Value - 1)];
//   var data = {
//       cardValue: Value,
//       cardColor: Color,
//       isFlipped: false
//   };
//
//   var $cardElement = $('<div class="card"></div>');
//   $cardElement.data(data);
//
//   $game.append($cardElement);
//
//
// };
//
// $('.card').click(function() {
//   MatchGame.flipCard($(this), $('#game'));
// });
//
// };
//
// /*
//   Flips over a given card and checks to see if two cards are flipped over.
//   Updates styles on flipped cards depending whether they are a match or not.
//  */
//
// MatchGame.flipCard = function($card, $game) {
//
// };