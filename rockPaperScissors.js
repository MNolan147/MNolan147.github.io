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

function getUserImage() {
	switch (userInput) {
		case 'rock':
			$('.image1').attr('src', 'https://png2.kisspng.com/sh/ac0fbc33b6eedebca8a9be544d8c9c4a/L0KzQYm3VME6N6lrfZH0aYP2gLBuTfdzaaFtgdU2ZHX2ebj1TgJwa5wyjtdsdHB1PYbohMg0bZRme6oBMHO3PoK8V8AxO2o2Sac7NEG1QYOCUMgzOGkziNDw/kisspng-graphic-design-rock-vector-5ad83ecac860c4.1570039115241212908208.png');
			break;	
		case 'paper':
			$('.image1').attr('src', 'http://images.clipartpanda.com/stack-of-paper-vector-29753.png')
			break;
		case 'scissors':
			$('.image1').attr('src', 'http://worldartsme.com/images/scissors-vector-clipart-1.jpg')
			break;
	}
}

function getComputerImage() {
	switch (userInput) {
		case 'rock':
			$('.image2').attr('src', 'https://png2.kisspng.com/sh/ac0fbc33b6eedebca8a9be544d8c9c4a/L0KzQYm3VME6N6lrfZH0aYP2gLBuTfdzaaFtgdU2ZHX2ebj1TgJwa5wyjtdsdHB1PYbohMg0bZRme6oBMHO3PoK8V8AxO2o2Sac7NEG1QYOCUMgzOGkziNDw/kisspng-graphic-design-rock-vector-5ad83ecac860c4.1570039115241212908208.png');
			break;	
		case 'paper':
			$('.image2').attr('src', 'http://images.clipartpanda.com/stack-of-paper-vector-29753.png')
			break;
		case 'scissors':
			$('.image2').attr('src', 'http://worldartsme.com/images/scissors-vector-clipart-1.jpg')
			break;
	}
}

function showWinner() {
	$('.selectors').hide();
	$('.title').hide();
	$('.results').fadeIn();
	$('.playAgain').fadeIn();
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
		getComputerImage();
		getUserImage();
	});

	$('.restart').on('click' , () => {
		prepare();
		getComputerChoice();
		$('.playGame').show();
	});
});





































