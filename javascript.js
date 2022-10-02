/********************************************************************************
Rock Paper Scissors Game in JS!
Link: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors 
********************************************************************************/



// define gameState, which will dictate the score and the state of the game
var gameState = {player1score: null, player2score: null, round: null, maxscore: 5}

// quick vars for tidiness
var roundnum = gameState['round'];
var maxscore = gameState['maxscore'];
var p1 = gameState['player1score'];
var p2 = gameState['player2score'];



/// gameState functions for winning, losing, round increments, and round reset
function p1ScorePlus(){
    p1 = p1 + 1;
}
function p2ScorePlus(){
    p2 = p2 + 1;
}
function roundPlus(){
    roundnum = roundnum + 1;
}
function roundZero(){
    roundnum = 0;
}

/* build functions to play the game and the game cycle */ 


// computer chooses a random choice between R/P/S, a string
function getComputerChoice(){
    let choices = ['rock','paper','scissors']

    // This JavaScript function always returns a random number between min and max (both included): 
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    random_value = getRndInteger(0,2);
    return choices[random_value];
} 


// play a single round of RPS; return an outcome, which is a phrase that includes win/lose/tie.
function playRound(playerSelection, computerSelection= getComputerChoice()) {
  
    // winning conditions, ties, to search to define when a person wins, loses, ties
    let winning_conditions = ['rock-scissors','paper-rock', 'scissors-paper'];
    let ties = ['rock-rock', 'paper-paper' ,'scissors-scissors'];
    let outcome = '';
    let game = playerSelection+"-"+computerSelection;
    console.log(game);

    // find out if the game has a winner or loser or tie
    // the winning messages below can prob be cleanedup
    // winning cond
    if (winning_conditions.includes(game)){
        outcome= ("You Win! "+playerSelection +" beats " + computerSelection);
    }
    // tie cond
    else if (ties.includes(game)){
        outcome= ("You Tie - "+playerSelection +" is the same as " + computerSelection);
    }
    // losing con
    else {
        outcome= ("You Lose! "+playerSelection +" loses to " + computerSelection);
    }

    // pop a message in the indidual round text bucket
    const snapshot = document.querySelector('#snapshot');
    snapshot.textContent = outcome;

    // we used to output a phrase for win/loss/tie; now we just want to return a string.
    function outcome_simplified(outcome) {
        if (outcome.includes('Win')) {
          return 'Win';
        }
        else if (outcome.includes('Lose')) {
          return 'Lose';
        }
        else {
          return 'Tie';
        }
      }

    // return just win, lose, or tie; not the entire phrase
    return outcome_simplified(outcome); 
}

// helper function for updateScoreboard
// return player score text based on player num (1 or 2) and the player's score (need?)
function playerText(playerNum, score){
    return ("Player "+playerNum + ": " + score);
}


// update the scoreboard with the gameState
function updateScoreboard(){
    var player1Score = document.querySelector('#player1Score');
    var player2Score = document.querySelector('#player2Score');
    var round = document.querySelector('#round');
    var msgbox = document.querySelector('#msgbox');

    player1Score.textContent = playerText(1,p1);
    player2Score.textContent = playerText(2,p2);
    round.textContent = ("Round: "+ roundnum);
}


// button toggle to start game
const startGame = document.querySelector('#startGame');
startGame.addEventListener('click', initiateGame);


// comms function
function comms(txt){
    const msgbox = document.querySelector('#msgbox');
    msgbox.textContent = txt;
    console.log(txt);
}

// determine overall winner after full rounds are played
function determineWinner(){
    // evaluate score
    if (p1 > p2){
        comms("You Win! The Final Score is: " + p1 + " - " + p2 + ".");
    }
    else if (p1 < p2){
        comms("You Lose! The Final Score is: " + p1 + " - " + p2 + ".");
    }
    else {
        comms("Draw! The Final Score is: " + p1 + " - " + p2 + ".");
    }
}




// start a cycle of a game; reset scores to 0 and round to 1. Return messages. 
function initiateGame() {
    p1 = 0;
    p2 = 0;
    roundnum = 1;

    let msg = 'New game commencing! Round 1 is ready. Play a round!'
    comms(msg);
    console.log(gameState);
    updateScoreboard();
    turnOnGameButtons();
}


// Go through 1 game cycle: play a game, evaulate if the max rounds have been played; display conclusion messages
function gameCycle(moveChoice) {

    outcome = playRound(moveChoice); // add in the buttons
    /// message the outcome in the messagebox

    // increment score
    if (outcome=='Win'){
        p1ScorePlus();
        console.log(outcome);
    }
    else if (outcome=='Lose'){
        p2ScorePlus();
        console.log(outcome);
    }

    // increase round number
    roundPlus();
    updateScoreboard();
    let msg = 'You '+ outcome + '!'
    comms(msg);

    // add logic to conclude the game
    if ((p1 == maxscore)||(p2 == maxscore)) {
        turnOffGameButtons();
        determineWinner();
    }
    console.log(gameState);
}





/* attach gamecycle to each of your "moves" (rock, paper, scissors) */

function gameCycleRock(){
    gameCycle('rock');
}
function gameCyclePaper(){
    gameCycle('paper');
}
function gameCycleScissors(){
    gameCycle('scissors');
}

// turn on game buttons when the round is active
function turnOnGameButtons(){
    var rock = document.querySelector('#rock');
    var paper = document.querySelector('#paper');
    var scissors = document.querySelector('#scissors');

    rock.addEventListener('click', gameCycleRock);
    paper.addEventListener('click', gameCyclePaper);
    scissors.addEventListener('click', gameCycleScissors);
}

function turnOffGameButtons(){
    var rock = document.querySelector('#rock');
    var paper = document.querySelector('#paper');
    var scissors = document.querySelector('#scissors');

    rock.removeEventListener('click', gameCycleRock);
    paper.removeEventListener('click', gameCyclePaper);
    scissors.removeEventListener('click', gameCycleScissors);
}


