let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanNumber = Math.abs(targetGuess - humanGuess);
  const computerNumber = Math.abs(targetGuess - computerGuess);
  return computerNumber >= humanNumber;
};

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
const advanceRound = () => {
  currentRoundNumber++;
};
