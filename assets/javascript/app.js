

// // Varible Declarations
// --------------------------------------------------------------------------------------

// all question and answers

// array of 14 questions and answers
var questions = [
  {
    question: "Console release year?",
    answers: {
      a: "1990",
      b: "1991",
			x: "1992",
			y: "1993"
    },
    correctAnswer: "b"
  },
  {
    question: "The Super Nintendo video/audio output was in how many bits?",
    answers: {
      a: "16 bit",
      b: "8 bit",
			x: "32 bit",
			y: "9 bit"
    },
    correctAnswer: "a"
  },
  {
    question: "Which game was not release with the console?",
    answers: {
      a: "Street Fighter II",
      b: "Donkey Kong Country",
			x: "Super Mario World",
			y: "Super Mario Kart"
    },
    correctAnswer: "a"
	},
	{
    question: "What console was the predessor of the Super Nintendo?",
    answers: {
      a: "Nintendo 64",
      b: "Sega Dreamcast",
			x: "Atari",
			y: "Nintendo"
    },
    correctAnswer: "y"
	},
	{
    question: "What console was the successor of the Super Nintendo?",
    answers: {
			a: "Nintendo 64",
      b: "Sega Dreamcast",
			x: "Atari",
			y: "Nintendo"
    },
    correctAnswer: "a"
	},
	{
    question: "Media the game was on?",
    answers: {
      a: "Compact disc",
      b: "Cassette",
			x: "none of these...",
			y: "Cartridge"
    },
    correctAnswer: "y"
	},
	{
    question: "Which game was remade on the Nintendo 64?",
    answers: {
      a: "Super Mario World",
      b: "MegaMan X",
			x: "Star Fox",
			y: "Donkey Kong Country"
    },
    correctAnswer: "x"
	},
	{
    question: "AKA Rockman",
    answers: {
      a: "Mario",
      b: "MegaMan",
			x: "Luigi",
			y: "Samus"
    },
    correctAnswer: "b"
	},
	{
    question: "Which of these was not a SNES game?",
    answers: {
      a: "Final Fantasy VII",
      b: "NBA Jam",
			x: "Monopoly",
			y: "Mortal Kombat II"
    },
    correctAnswer: "a"
	},
	{
    question: "Super Mario World is what type of game?",
    answers: {
      a: "Adventure",
      b: "RPG",
			x: "Side-scrolling Platformer",
			y: "Shooter"
    },
    correctAnswer: "x"
	},
	{
    question: "In the game Super Metroid the playable cahracter was...",
    answers: {
      a: "Metroid",
      b: "Samus",
			x: "Prime",
			y: "Ridley"
    },
    correctAnswer: "b"
	},
	{
		question: "How many games for the SNES have the word 'Super' in them?",
    answers: {
      a: "241",
      b: "200",
			x: "211",
			y: "248"
    },
    correctAnswer: "a"
	},
	{
    question: "Who is the final boss in Super Mario World?",
    answers: {
      a: "Luigi",
      b: "The Koopalings",
			x: "Princess Toadstool",
			y: "King Bowser"
    },
    correctAnswer: "y"
	},
	{
    question: "Number of playable characters in Super Mario Kart.",
    answers: {
      a: "8",
      b: "6",
			x: "7",
			y: "10"
    },
    correctAnswer: "a"
	}
];

// the object of the game... hahahahahaha
var theWholeGame = {
	questions: questions,
	currentQ: 0,
	timer: 30, //seconds
	numCorrect: 0,
	numInCorrect: 0,

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
	addQ: function() {

		// adding timer var to an interval of 1 sec
		timer = setInterval(theWholeGame.finalCountdown, 1000);
		$("#").html("<h3>" + questions.question[theWholeGame.currentQ].question + "</h3>");

		for(var i = 0; i , questions; i++) {

		}

	},
	nextQ: function() {

	},
	overNow: function() {

	},
	stats: function() {

	},
	clickedOn: function() {

	},
	yourRight: function() {

	},
	yourWrong: function() {

	},
	startOver: function() {

	}
}




// add references to HTML -ids
// var questionHolder = $("#questions");
// var statsHolder = $("#stats");
// var buttonSelected = $("#buttons");

// create timer
	// switch questions at timer 0, set answer to wrong

// display questions, based on timer

// buttons (a, b, x, y)

// on click, maybe numpad?

// update stats panel/controllerplugs color red/incorrect, green/correct

// display answers





alert("ready to start?");

// Functions
// --------------------------------------------------------------------------------------
//

// Process
// --------------------------------------------------------------------------------------


