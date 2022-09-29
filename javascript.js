/* 

https://www.theodinproject.com/lessons/foundations-rock-paper-scissors 


*******/

function getComputerChoice(){
    let choices = ['rock','paper','scissors']

    // This JavaScript function always returns a random number between min and max (both included): 
    function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    random_value = getRndInteger(0,2);
    
    return choices[random_value];

} 


function playRound(playerSelection, computerSelection= getComputerChoice()) {
  
    let winning_conditions = ['rock-scissors','paper-rock', 'scissors-paper'];
    let ties = ['rock-rock', 'paper-paper' ,'scissors-scissors'];

    let game = playerSelection+"-"+computerSelection;
    console.log(game);
    // find out if the game has a winner or loser or tie

    // winning cond
    if (winning_conditions.includes(game)){
        return ("You Win! "+playerSelection +" beats " + computerSelection);
    }

    // tie cond
    else if (ties.includes(game)){
        return ("You Tie - "+playerSelection +" is the same as " + computerSelection);
    }
    // losing con
    else {
        return ("You Lose! "+playerSelection +" loses to " + computerSelection);
    }
}




function individual_game(){
    let x = prompt();
    outcome = playRound(x);
    return outcome;     
}







// given an individual game, increment player 1 and player 2 score 


function game(){
    let player1_score = 0;
    let player2_score = 0;


    for (let i = 1; i <= 5; i++) {
        console.log("Round: " + i);
        // print current score
        console.log("score: "+ player1_score + " - " +player2_score);

        // play game

        let outcome = outcome_simplified(individual_game())
        console.log(outcome)


        // increment score
        
        if (outcome=='Win'){
            player1_score ++;
        }
        
        else if (outcome=='Lose'){
            player2_score ++;
        }


        // print score 
        console.log("score: "+ player1_score + " - " +player2_score)
    }

    // evaluate score

    if (player1_score > player2_score){
        console.log("Player 1 wins!");
    }
    else if (player1_score < player2_score){
        console.log("Player 2 wins!");
    }

    else {
        console.log("Tie!!")
    }

}





/****************************** helper and edits ******************************/
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


let mystring='you Win blah blah'
let mystring_lose = 'you lose blah blah'
