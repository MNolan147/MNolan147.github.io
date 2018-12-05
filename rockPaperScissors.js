var userInput = '';

var choices = ['rock', 'paper', 'scissors'];
var computerChoice = '';

var outcome = '';

//this function prepares the website for the game
function prepare() {
	$('.title').hide();
	$('.selectors').hide();
	$('.results').hide();
	$('.playAgain').hide();
	$('.playGame').fadeIn(500);
}

function getComputerChoice() {
	var x = undefined;
	x = Math.floor(Math.random()*3);
	computerChoice = choices[x];
	return computerChoice;
}

function showWinner() {
	$('.selectors').hide();
	$('.title').hide();
	$('.results').fadeIn();
	$('.playAgain').fadeIn();
	$('.image1').attr('src', "images/" + userInput + '.png');
	$('.image2').attr('src', "images/" + computerChoice + '.png');
	$('h1.showWinner').text(outcome);
}

function getOutcome() {
	if (userInput == computerChoice) {
		outcome = 'Draw';
		return outcome;
	} else if (userInput == 'rock' && computerChoice == 'paper') {
		outcome = 'You Lose';
		return outcome;
	} else if (userInput == 'paper' && computerChoice == 'scissors') {
		outcome = 'You Lose';
		return outcome;
	} else if (userInput == 'scissors' && computerChoice == 'rock') {
		outcome = 'You Lose';
		return outcome;
	} else {
		outcome = 'You Win';
		return outcome;
	}
}	

//resets the game
function replay() {
	prepare();
	getComputerChoice();
	playGame();
}

$('document').ready(() => {
	prepare();

	getComputerChoice();

	//this removes the play button and shows the different objects
	$('.playGame').on('click' , () => {
		$('.playGame').hide();
		$('.title').fadeIn();
		$('.userInput').fadeIn();
		$('.selectors').fadeIn();
	});

	//this block determines what the user selected
	$('.rock').on('click' , () => {
		userInput = 'rock';
		return userInput;
	});

	$('.paper').on('click' , () => {
		userInput = 'paper';
		return userInput;
	});

	$('.scissors').on('click' , () => {
		userInput = 'scissors';
		return userInput;
	});
	//end of block

	$('.userInput').on('click' , () => {
		getOutcome();
		showWinner();
	});

	$('.restart').on('click' , () => {
		prepare();
		getComputerChoice();
		$('.playGame').show();
	});
});




































