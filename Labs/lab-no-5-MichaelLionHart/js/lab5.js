// lab5.js
// Mike Hart

// declare questions array and populate it with 10 questions/answers
let questions = [
	['What does JSON stand for?', 'Javascript Object Notation'],
	['How is JSON pronounced?', 'Jason'],
	['T/F - pop() removes the last element of an array?', 'T'],
	['T/F - unshift() pushes an element onto the end of an array?', 'F'],
	['T/F - shift() removes the first element of an array?', 'T'],
	['What is half of 100?', '50'],
	['T/F - Arrays are a type of object?', 'T'],
	['T/F - a for loop can iterate through an array?', 'T'],
	['T/F - Javascript is the same thing as Java?', 'F'],
	['What is half of 77?', '38.5']
]
// variable declarations
var correctAnswers = 0;
var incorrectAnswers = 0;

// function to handle asking questions and getting answers
// the question parameter is an array
function askQuestion(question){
	let answer = prompt(question[0]);
	if (answer === question[1]) {
		correctAnswers += 1;
		alert('That is Correct!  Press enter to continue');
	} else {
		incorrectAnswers += 1;
		alert('That is incorrect!  Press enter to continue');
	}
}

function quizSummary(x){
	
	userName = x;

	// building main content string
	let outputDivContent = '';
    outputDivContent = `<h2>Username: ${userName}</h2>
                        <p>Correct Answers: ${correctAnswers}</p>
                        <p>Incorrect Answers: ${incorrectAnswers}</p>
						`;
	
	// start of special message code
	let specialMessage = '';
	// if statement for determining special message text
	if (correctAnswers === 10) {
		specialMessage = `<h3>Congratulations!  You got all 10
					   	  answers correct!  You are a super star!</h3>`;
	} else if (correctAnswers === 9) {
		specialMessage = `<h3>You got 9/10 answers
				   		  correct!  Good job!</h3>`;
	} else {
		specialMessage = `<h3>Wow, you did terrible on this simple
				   		  quiz.  You must not be very smart.  
				   		  Please click the 'retake quiz' button
				   		  to retake this quiz</h3>`;
	} // end of special message code
	
	// combine main content with special message
	let finalOutput = `${outputDivContent}
					   ${specialMessage}`;

	document.getElementById('results').innerHTML = finalOutput;

} // end of quizSummary function

function takeQuiz(){

	// Ask user for username
	let userName = prompt("Before we start the quiz please entry your name");

	// loop thru questions array
	// and call the askQuestion function during each iteration
	for (let i = 0; i < questions.length; i++) {
		askQuestion(questions[i]);
	}
	// call the QuizSummary function to display the results
	quizSummary(userName);
} // end of takeQuiz funciton
