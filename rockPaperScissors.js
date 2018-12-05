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
			$('.image1').attr('src', 'https://www.google.com.au/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwigoOGfjojfAhWIA3IKHQm6BK0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.kisspng.com%2Fpng-graphic-design-rock-vector-1272079%2Fpreview.html&psig=AOvVaw2wKTLemg9-SwUfRkUZxpfC&ust=1544079424151875');
			break;	
		case 'paper':
			$('.image1').attr('src', 'https://www.google.com.au/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi_noSHk4jfAhXKEHIKHUhIAc8QjRx6BAgBEAU&url=http%3A%2F%2Fwww.clipartpanda.com%2Fcategories%2Fstack-of-paper-vector&psig=AOvVaw0cXOH2CgC8IxdHLwUZ_5DP&ust=1544080703418239')
			break;
		case 'scissors':
			$('.image1').attr('src', 'https://www.google.com.au/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjApfaSk4jfAhVVVH0KHdAxDToQjRx6BAgBEAU&url=http%3A%2F%2Fworldartsme.com%2Fscissors-vector-clipart.html&psig=AOvVaw0m6T3fHj9fDD0SYTFU17of&ust=1544080738476275')
			break;
	}
}

function getComputerImage() {
	switch (userInput) {
		case 'rock':
			$('.image2').attr('src', 'https://www.google.com.au/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwigoOGfjojfAhWIA3IKHQm6BK0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.kisspng.com%2Fpng-graphic-design-rock-vector-1272079%2Fpreview.html&psig=AOvVaw2wKTLemg9-SwUfRkUZxpfC&ust=1544079424151875');
			break;	
		case 'paper':
			$('.image2').attr('src', 'https://www.google.com.au/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi_noSHk4jfAhXKEHIKHUhIAc8QjRx6BAgBEAU&url=http%3A%2F%2Fwww.clipartpanda.com%2Fcategories%2Fstack-of-paper-vector&psig=AOvVaw0cXOH2CgC8IxdHLwUZ_5DP&ust=1544080703418239')
			break;
		case 'scissors':
			$('.image2').attr('src', 'https://www.google.com.au/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjApfaSk4jfAhVVVH0KHdAxDToQjRx6BAgBEAU&url=http%3A%2F%2Fworldartsme.com%2Fscissors-vector-clipart.html&psig=AOvVaw0m6T3fHj9fDD0SYTFU17of&ust=1544080738476275')
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
	});

	$('.restart').on('click' , () => {
		prepare();
		getComputerChoice();
		$('.playGame').show();
	});
});





































