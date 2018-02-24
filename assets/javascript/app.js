$(document).ready(function () {


	$("#start").on("click", function(){
		$("#start").remove();
		theWholeGame.addQA();
	});
	
	$("#reset").on("click", function(){
		theWholeGame.startOver();
	});
	
	
	// on click of answer buttons links to clickedOn funct.
	$(document).on("click", '.answer-button', function(e){
		theWholeGame.clickedOn(e);
	});
	
	// theWholeGame();
	


// // Varible Declarations
// --------------------------------------------------------------------------------------

// all question and answers

// array of 14 questions and answers
var questions = [
  {
    question: "Console release year?",
    answers: ["1990", "1991", "1992", "1993"],
    correctAnswer: "1991"
  },
  {
    question: "The Super Nintendo video/audio output was in how many bits?",
    answers: [ "16 bit", "8 bit", "32 bit", "9 bit"],
    correctAnswer: "16 bit"
  },
  {
    question: "Which game was not release with the console?",
    answers: [ "Street Fighter II", "Donkey Kong Country", "Super Mario World", "Super Mario Kart"],
    correctAnswer: "Street Fighter II"
	},
	{
    question: "What console was the predessor of the Super Nintendo?",
    answers: [ "Nintendo 64", "Sega Dreamcast", "Atari", "Nintendo"],
    correctAnswer: "Nintendo"
	},
	{
    question: "What console was the successor of the Super Nintendo?",
    answers: ["Nintendo 64", "Sega Dreamcast", "Atari", "Nintendo"],
    correctAnswer: "Nintendo 64"
	},
	{
    question: "Media are the SNES game created on?",
    answers: [ "Compact disc", "Cassette", "none of these...", "Cartridge"],
    correctAnswer: "Cartridge"
	},
	{
    question: "Which game was remade on the Nintendo 64?",
    answers: [ "Super Mario World", "MegaMan X", "Star Fox", "Donkey Kong Country"],
    correctAnswer: "Star Fox"
	},
	{
    question: "AKA Rockman",
    answers: [ "Mario", "MegaMan", "Luigi", "Samus"],
    correctAnswer: "MegaMan"
	},
	{
    question: "Which of these was not a SNES game?",
    answers: [ "Final Fantasy VII", "NBA Jam", "Monopoly", "Mortal Kombat II"],
    correctAnswer: "Final Fantasy VII"
	},
	{
    question: "Super Mario World is what type of game?",
    answers: ["Adventure", "RPG", "Side-scrolling Platformer", "Shooter"],
    correctAnswer: "Side-scrolling Platformer"
	},
	{
    question: "In the game Super Metroid the playable character was...",
    answers: ["Metroid", "Samus", "Prime", "Ridley"],
    correctAnswer: "Samus"
	},
	{
		question: "How many games for the SNES have the word 'Super' in them?",
    answers: ["241", "200", "211", "248"],
    correctAnswer: "241"
	},
	{
    question: "Who is the final boss in Super Mario World?",
    answers: ["Luigi", "The Koopalings", "Princess Toadstool", "King Bowser"],
    correctAnswer: "King Bowser"
	},
	{
    question: "Number of playable characters in Super Mario Kart.",
    answers: ["8","6","7","10"],
    correctAnswer: "8"
	}
];


// Functions
// --------------------------------------------------------------------------------------
//


// the object of the game... hahahahahaha
var theWholeGame = {
	questions: questions,
	currentQA: 0,
	timer: 30, //seconds
	numCorrect: 0,
	numInCorrect: 0,
	unanswered: 0,

	//function/methods
	finalCountdown: function() {
		//change varible
		theWholeGame.timer--;

		//update html timer
		$("#timer").html(theWholeGame.timer);

		// checks if timer has reached zero
		if(theWholeGame.timer <= 0) {
			console.log("Time!!!");
			theWholeGame.overNow();
		}

	},
	addQA: function() {

			// create timer
		// adding timer var to an interval of 1 sec
		timer = setInterval(theWholeGame.finalCountdown, 1000);
		// displays the timer at timer
		$("#timer").append(" " + timer);

		// displays the question to the page
		$("#display").html("<h2>" + questions[theWholeGame.currentQA].question + "</h2>");

		// adding buttons dynamically each time a new question is loaded
		for(var i = 0; i < questions[theWholeGame.currentQA].answers.length; i++) {

			// adds buttons to the page with an answer in each
			$('#buttons').append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[theWholeGame.currentQA].answers[i] + '">' + questions[theWholeGame.currentQA].answers[i] + '</button>');
// THE BUTTONS REMAIN ON THE PAGE AT NEW THE QUESTION

		}

	},
	nextQA: function() {

		// reset timer
		theWholeGame.timer = 30;
		$("#timer").html(theWholeGame.timer);

		// 
		theWholeGame.currentQA++;
		theWholeGame.addQA();

	},
	overNow: function() {
		clearInterval(timer);
		theWholeGame.unanswered++;
		$("#display").html("<h2>You have run out of time...</h2>");
		$("#display").append("<h3>The correct answer was..." + questions[theWholeGame.currentQA].correctAnswer + "</h3>");

		if(theWholeGame.currentQA == questions.length - 1) {
			setTimeout(theWholeGame.stats, 3000);
		} else {
			setTimeout(theWholeGame.nextQA, 3000);
		};
	},
	stats: function() {
		clearInterval(timer);
		$("#display").html("<h2>Thats it.</h2>");
		$("#stats").append("<h3>Correct: " + theWholeGame.numCorrect + "</h3>");
		$("#stats").append("<h3>Incorrect: " + theWholeGame.numInCorrect + "</h3>");
		$("#stats").append("<h3>Unanswered: " + theWholeGame.unanswered + "</h3>");
		$("#stats").append("<button id='reset'>RESET</button>");
	},

	clickedOn: function(e) {
		clearInterval(timer);
		if ($(e.target).data("name") == questions[theWholeGame.currentQA].correctAnswer) {
			theWholeGame.yourRight();
		} else {
			theWholeGame.yourWrong();
		};
	},

	yourRight: function() {
		// testing
		console.log("yep");

		clearInterval(timer);
		theWholeGame.numCorrect++;
		$("#display").html('<h2>Correct!</h2>');
		if(theWholeGame.currentQA == questions.length - 1) {
			setTimeout(theWholeGame.stats, 3000);
		} else {
			setTimeout(theWholeGame.nextQA, 3000);
		};
	},

	yourWrong: function() {
			// testing
			console.log("nope");

			clearInterval(timer);
		theWholeGame.numInCorrect++;
		$("#display").html('<h2>You are the weakest link, goodbye!</h2>');
		$("#display").html("<h3>The correct answer was..." + questions[theWholeGame.currentQA].correctAnswer + "</h3>");
		if(theWholeGame.currentQA == questions.length - 1) {
			setTimeout(theWholeGame.stats, 3000);
		} else {
			setTimeout(theWholeGame.nextQA, 3000);
		}
	},

	startOver: function() {
	currentQA = 0;
	timer = 30; //seconds
	numCorrect = 0;
	numInCorrect = 0;
	unanswered = 0;
	
	// stats.remove();
	theWholeGame.addQA();
	}
}





	// switch questions at timer 0, set answer to wrong

// display questions, based on timer

// buttons (a, b, x, y)

// on click, maybe numpad?

// update stats panel/controllerplugs color red/incorrect, green/correct

// display answers





// alert("ready to start?");



// Process
// --------------------------------------------------------------------------------------



});