
/////////// Game functions //////////////

// I need a deal function deals two to the player 

// going to need a dealers deal function 

// I need a hit function // draw card function 

// I need a sit function // pass card function that then playes out the dealers hand 

// I need a new game function 

// I need a shuffle function 

// Need to have a winner function 




/////////// data shit ///////////////////




// I need a way to store card data 

// I need a way to be able to store hand data

// I need a score function 

// i need a way to store the score and display it 

// I need a way to update the score on screen 

// I need a score board 

// need a player account to add money too // reference the bank functions you wrote 





// Optional shit //

// could add a theme button so you can change themes and such 

// could be able to set a player photo and name 

// could have the dealer say random shit to you like 'good fucking luck' and other abusive shit'


// Going to try and get this working for one suit



// Starting with making objects for my card suits and cards // need to work these into a deck

// Variables 

newHand = [];

// This is the function to generate a random suit // This works

var suit = '';

var randomSuit = function(){
	result = Math.floor(Math.random() * 4) + 1;
	if (result % 4 === 0){
		suit = '&#9828;'; // spades
	} else if (result % 3 === 0){
		suit = '&#9831;'; // clubs
	} else if (result % 2 === 0){
		suit = '&#9826;'; // diamonds
	} else if (result % 1 === 0){
		suit = '&#9825;'; // hearts
	} return suit;
};

// This is the function to generate a random card // This works 

var card;

var randomCard = function(){
	result = Math.floor(Math.random() * 11) + 1;
	card = result;
	return card;
};



var randomTotalCard = function(){
	suit = randomSuit();
	card = randomCard();
	var totalCard = (suit + card)
	return totalCard;
};

// These are the functions for the initial deal to the player 

var dealPlayerBox1 = function(card1){
	card1 = randomTotalCard();
	$('#card1').html(card1);	
};

var dealPlayerBox2 = function(card2){
	card2 = randomTotalCard();
	$('#card2').html(card2);	
};

var dealPlayer = function(){
	dealPlayerBox1();
	dealPlayerBox2();
};

// This is the function to deal the initial dealers card

var dealDealerBox1 = function(card1){
	card1 = randomTotalCard();
	$('#dCard1').html(card1);	
};

// This is the function to draw another card

var draw1 = function(){
	card3 = randomTotalCard();
	$('#card3').html(card3);	
};












$(document).ready(function(){
	$('#deal').click(function(){
		dealPlayer(this);
		dealDealerBox1(this);
		click.preventDefault();
	});
	$('#hit').click(function(){
		draw1(this)
	});
});











