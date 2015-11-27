
/////////// Game functions //////////////

// I need a deal function deals two to the player // Have this 

// going to need a dealers deal function // Have the first stage of this 

// I need a hit function // draw card function // Working on this 

// I need a sit function // pass card function that then playes out the dealers hand // Need this

// I need a new game function // Working on this 

// I need a shuffle function // Dont need this as all randomised cards 

// Need to have a winner function // Prototyped // Working at the moment


/////////// data shit ///////////////////


// I need a way to store card data // Auto generated currently 

// I need a way to be able to store hand data // player and dealer score // Still need to be able to update these 

// I need a score function // Working on this once i get past being able to add the scores into each other 

// i need a way to store the score and display it // Have this // scoreboard does update if called in the console

// I need a way to update the score on screen // this works currently 

// need a player account to add money too // reference the bank functions you wrote // can use the html for this as that will work and its only a novelty part of the game 



// Optional shit //

// could add a theme button so you can change themes and such 

// could be able to set a player photo and name 

// could have the dealer say random shit to you like 'good fucking luck' and other abusive shit'


/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// H A C K  J A C K //////////////////////////////////////
/////////////////////////////// F U C K  Y E A H //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


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
	} 
	return suit;
};

// This is the function to generate a random card // This works 

var card;

var randomCard = function(){
	result = Math.floor(Math.random() * 11) + 1;
	card = result;
	return card;
};



var randomTotalCard = function(){ // This works
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

// need to make this hidden once pressed 
var dealPlayer = function(){
	dealPlayerBox1();
	dealPlayerBox2();
};

// This is the function to deal the initial dealers card

var dealDealerBox1 = function(card1){
	card1 = randomTotalCard();
	$('#dCard1').html(card1);	
};


var dealerLastCards = function(){

// This needs to deal the reamaining cards to the dealer until its a bust // beats the player // standoff // at the end of this it needs to update the dealer score so the winner fucntion can run

};

// This is the function to draw another card for the player

var draw1 = function(){
	// card3 = randomTotalCard();
	// $('#card3').html(card3);

	var $playerCards = $(".playercards"); // Select all the playercards and store them in a variable 

	for ( var i = 0; i < $playerCards.length; i++ ) { // Go through each one of the playercards
	  var $currentElement = $playerCards.eq( i ); // Store the current element and make sure that it is still a jQuery thing

	  if ( $currentElement.text() === "Empty" ) { // If the text is empty
	     $currentElement.html( randomTotalCard() ); // Change it's value
	     break; // Stop the loop
	  }

	  if ( i === $playerCards.length - 2 ) {
	  	console.log( "LAST CARD DEALT" ) // put score function here
	  	sit();
	  	console.log(sit())
		scoreDealer();
		console.log(scoreDealer())
		scorePlayer();
		console.log(scorePlayer())
		setTimeout(function(){
			winner()},2000
		);
		setTimeout(function(){
		newHand()},3000
		);
	  } 

	}


// Still need to get this to update to the new id of the next card div // Also needs to stop at the last id and then run the reamainging dealer deal

};

// Need to score the hands 

// Player scoring 

var playerScore;

var scorePlayer = function(){
	playerScore = 0;
	$(".playercards").each(function () {
		var str = $(this).text();
		str = str.replace( /\D+/, "" );

		if ( str.length !== 0 ) {
			playerScore += parseInt( str );
		}
	});

	return playerScore;
// need to get this to add the total of the final hand of the player to beat the dealer // determine an early bust // or draw // this needs to update the overall playerscore

};

// Dealer scoring

var dealerScore;

var scoreDealer = function(){

// This needs to count the dealers hands and count to a win to either beat the player // bust or draw // This also needs to updates the overall dealer score so the winner function can run
	dealerScore = 0;
	$(".dealerscards").each(function () {
		var str = $(this).text();
		str = str.replace( /\D+/, "" );

		if ( str.length !== 0 ) {
			dealerScore += parseInt( str );
		}
	});

	return dealerScore;

};

// Need to be able to amend the cash from the input field as a bet to the html 

var bet = function(){
	var $bet = $('#bet').val();

	if ($bet === "" || scorePlayer() === 0 || scoreDealer() === 0 ) {
		return false;
	}

	var $currentCash = $('#currentcash').html().replace(/\D+/, "");

	var result;
	if (scorePlayer() > scoreDealer()){
		result = parseInt($bet) + parseInt($currentCash);


	} else if (scorePlayer() < scoreDealer()){
		result = parseInt($currentCash) - parseInt($bet);
	}

	$("#currentcash").text( "$" + result );

	// console.log($currentCash);

// This needs to run on a win or a loss and needs to be called from inside the winner function
// This needs to use parseint // needs to update the dom html also 

};




// Need to make the win conditions 

var dealerScoreBoard = 0;
var playerScoreBoard = 0;

var winner = function(){

	if (dealerScore > playerScore){
		$('p.winner').text('Dealer won the hand fucker! ' + dealerScore + ' V ' + playerScore);
		dealerScoreBoard ++;
		console.log(dealerScoreBoard)
		$('#dealerScore').html(dealerScoreBoard);
		return dealerScoreBoard
	} 	else if (playerScore > dealerScore){
		$('p.winner').text('Player won the hand! FUCK YEAH' + playerScore + ' V ' + dealerScore);
		playerScoreBoard ++;
		$('#playerScore').html(playerScoreBoard);
	} else if (playerScore === 10){
		$('p.winner').text('Player beat by getting to 10 the HOUSE, click new game to start again!');
	}
};

$('p.winner').empty();



// This is the sit function // it needs to respond to the button // 


var sit = function(){
	// card3 = randomTotalCard();
	// $('#card3').html(card3);

	var $dealerscards = $(".dealerscards"); // Select all the playercards and store them in a variable 

	for ( var i = 0; i < $dealerscards.length; i++ ) { // Go through each one of the playercards
	  var $currentElement = $dealerscards.eq( i ); // Store the current element and make sure that it is still a jQuery thing

	  if ( $currentElement.text() === "Empty" ) { // If the text is empty
	     $currentElement.html( randomTotalCard() ); // Change it's value
	 
	  }
	}
	scoreDealer();
// Still need to get this to update to the new id of the next card div // Also needs to stop at the last id and then run the reamainging dealer deal
};



var newHand = function(){
	$('.dealerscards').html('Empty');
	$('.playercards').html('Empty');
	playerScore = 0;
	dealerScore = 0;
	$("#deal").show();
	$('p.winner').empty();
};

var wipeGame = function(){
	$('.dealerscards').html('Empty');
	$('.playercards').html('Empty');
	playerScore = 0;
	dealerScore = 0;
	dealerScoreBoard = 0;
	playerScoreBoard = 0;
	$('.scoreboard').html(0);
	$("#deal").show();
	$('#currentcash').html('$1000');
	$('#bet').value = '';
	$('p.winner').empty();


};

// Document ready spot


$(document).ready(function(){
	$('#deal').click(function(){
		dealPlayer(this);
		dealDealerBox1(this);
		$("#deal").hide(); // added this to hide the button after click 
	});
	$('#hit').click(function(){
		draw1(this)
	});
	$("#sit").click(function () {
		sit();
		scoreDealer();
		scorePlayer();
		bet();
		setTimeout(function(){
			winner()},2000
		);
		setTimeout(function(){
		newHand()},3000
		);
	});
	$('#newGame').click(function(){
		wipeGame();
	});
});











