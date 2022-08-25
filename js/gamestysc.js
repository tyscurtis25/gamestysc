function guessGame() {
    var winningNum;
    var userName;
    var userGuess;
    var r1Guesses = 10;
    var r2Guesses = 5;
    var r1Points = 10000;
    var r2Points = 10000;
    var output;
    var totalPoints;

    //this generates the winning number1
    winningNum1 = Math.floor((Math.random() * 25) + 1);
    //alert(winningNum);

    //get user name
    userName = prompt("Enter your name here: ");
    //winningNum = 2;

    //instructions
    alert("Hi " + userName + ", welcome to Round 1 of the guessing game. " +
        "Here's how it works: you have 10 chances to correctly guess a randomly " +
        "generated number between 1 and 25. If you guess it right, you win! If " +
        "you run out of guesses, you lose. The fewer guesses you use, the more " +
        "points you win. Good luck!");

    //ROUND 1: ELIMINATION
    for (let i = 1; i <= r1Guesses; i++) {

        //this selects the value found in the input box with the id="checkg"
        userGuess = parseInt(prompt("Enter guess " + (i) + " here: "));
        //alert(userGuess);

        //now let's see if you know what a number is
        if (isNaN(userGuess)) {
            alert("Please enter a valid number. That will cost you a guess.");
        }
        //user wins
        else if (winningNum1 === userGuess) {
            output = "Correct! The winning number was " + winningNum1 + "\n" + "Round 1 points= " + r1Points;
            alert(output);
            break;
        }
        //userGuess is too high
        else if (winningNum1 != userGuess && (r1Guesses - i) > 1 && userGuess > winningNum1) {
            output = "Sorry " + userName + ", too high. Try again (Just fyi, you have " + (r1Guesses - i) + " guesses left).";
            alert(output);
        }
        //userGuess is too low
        else if (winningNum1 != userGuess && (r1Guesses - i) > 1 && userGuess < winningNum1) {
            output = "Sorry " + userName + ", too low. Try again (Just fyi, you have " + (r1Guesses - i) + " guesses left).";
            alert(output);
        }
        //userGuess is too high (1 guess left)
        else if (winningNum1 != userGuess && (r1Guesses - i) === 1 && userGuess > winningNum1) {
            output = "Sorry " + userName + ", too high. Try again (Just fyi, you have " + (r1Guesses - i) + " guess left).";
            alert(output);
        }
        //userGuess is too low (1 guess left)
        else if (winningNum1 != userGuess && (r1Guesses - i) === 1 && userGuess < winningNum1) {
            output = "Sorry " + userName + ", too low. Try again (Just fyi, you have " + (r1Guesses - i) + " guess left).";
            alert(output);
        }
        //user loses
        else if (winningNum1 != userGuess) {
            output = "Sorry, no more guesses. The winning number was " + r1Guesses + ". Better luck next time.";
            alert(output);
        }

        //deduct points
        r1Points = r1Points - 1000;
    }

    //for real champions
    if (r1Points > 5000) {
        alert("Not too shabby, " + userName + ". You've made it to Round 2 " +
            "of the guessing game. Here's what's changed: you now have 5 chances " +
            "to correctly guess a randomly generated number between 1 and 10. If " +
            "you guess it right, you win! For each guess you use, a larger point " +
            "deduction will be applied. If you run out of guesses, you lose. The " +
            "fewer guesses you use, the more points you win. Good luck!");

        //this generates the winning number2
        winningNum2 = Math.floor((Math.random() * 10) + 1);

        //ROUND 2: FINAL ROUND
        for (let i = 1; i <= r2Guesses; i++) {

            //this selects the value found in the input box with the id="checkg"
            userGuess = parseInt(prompt("Enter guess " + (i) + " here: "));
            //alert(userGuess);

            //now let's see if you know what a number is
            if (isNaN(userGuess)) {
                alert("Please enter a valid number. That will cost you a guess.");
            }
            //user wins
            else if (winningNum2 === userGuess) {
                output = "Correct! The winning number was " + winningNum2 + "\n" + "Round 2 points= " + r2Points;
                alert(output);
                break;
            }
            //userGuess is too high
            else if (winningNum2 != userGuess && (r2Guesses - i) > 1 && userGuess > winningNum2) {
                output = "Sorry " + userName + ", too high. Try again (Just fyi, you have " + (r2Guesses - i) + " guesses left).";
                alert(output);
            }
            //userGuess is too low
            else if (winningNum2 != userGuess && (r2Guesses - i) > 1 && userGuess < winningNum2) {
                output = "Sorry " + userName + ", too low. Try again (Just fyi, you have " + (r2Guesses - i) + " guesses left).";
                alert(output);
            }
            //userGuess is too high (1 guess left)
            else if (winningNum2 != userGuess && (r2Guesses - i) === 1 && userGuess > winningNum2) {
                output = "Sorry " + userName + ", too high. Try again (Just fyi, you have " + (r2Guesses - i) + " guess left).";
                alert(output);
            }
            //userGuess is too low (1 guess left)
            else if (winningNum2 != userGuess && (r2Guesses - i) === 1 && userGuess < winningNum2) {
                output = "Sorry " + userName + ", too low. Try again (Just fyi, you have " + (r2Guesses - i) + " guess left).";
                alert(output);
            }
            //user loses
            else if (winningNum2 != userGuess) {
                output = "Sorry, no more guesses. The winning number was " + r2Guesses + ". Better luck next time.";
                alert(output);
            }

            //deduct points
            r2Points = r2Points / 2;
        }

        //totalling up the points
        totalPoints = r1Points + r2Points;

        //total points + invite to play again
        alert("Total points= " + totalPoints + "\n" + "If you want to play again, refresh the page, otherwise, have a great day!");
    }
    //for those who didn't make it
    else {
        //totalling up the points
        totalPoints = r1Points + r2Points;
        alert("Total points= " + r1Points + "\n" + "If you want to play again, refresh the page, otherwise, have a great day!");
    }
}

//rock paper scissors tournament
function rockPaperScissors() {
    var userName = prompt("Enter your name: ");
    var userRPS; //gotta input scrub
    var arrayRPS = ["rock", "paper", "scissors"];
    var indexRandom;
    var programRPS;
    var playAgain;
    var numRounds;
    var userWins;
    var programWins;

    //welcome
    alert("Hi " + userName + "! My name's Codey, and I love playing rock, paper, scissors!" + "\n" +
        "To set up the tournament, I'll ask you a few questions, and then we'll begin. As you hopefully " +
        "know already, rock beats scissors, scissors beats paper, and paper beats rock. The first to win the " +
        "majority of the rounds is delclared the winner. Let's get started.");

    //the tournament loop
    do {

        //setup for the tournament

        //set userWins and programWins to 0
        userWins = 0;
        programWins = 0;

        //ask how many rounds you want to play
        numRounds = parseInt(prompt("How many rounds would you like to play? (Must be an odd number)"));

        //input scrubbing numRounds
        while (isNaN(numRounds) === true || numRounds % 2 === 0) {
            userRPS = prompt("Please enter an odd number.");
            numRounds = parseInt(prompt("How many rounds would you like to play? (Must be an odd number)"));
        }

        //runs the tournament
        for (let i = 0; i < numRounds; i++) {

            //round declaration
            alert("Round " + (i + 1) + "...");

            //input scrubbing userRPS
            do {
                userRPS = prompt("Please type 'rock', 'paper', or 'scissors' to begin");
            } while (userRPS != "rock" && userRPS != "paper" && userRPS != "scissors"
            && userRPS != "Rock" && userRPS != "Paper" && userRPS != "Scissors");

            //selects random number between 0 and 2, which translates over to an index in arrayRPS
            indexRandom = Math.floor(Math.random() * 3);
            programRPS = arrayRPS[indexRandom];

            //time for the rules
            if (userRPS === "Rock" || userRPS === "rock" && programRPS === "scissors") {
                alert("You win! I chose " + programRPS);
                //increment userWins
                userWins = userWins + 1;
            } else if (userRPS === "Rock" || userRPS === "rock" && programRPS === "paper") {
                alert("You lose. I chose " + programRPS);
                //increment programWins
                programWins = programWins + 1;
            } else if (userRPS === "Paper" || userRPS === "paper" && programRPS === "rock") {
                alert("You win! I chose " + programRPS);
                //increment userWins
                userWins = userWins + 1;
            } else if (userRPS === "Paper" || userRPS === "paper" && programRPS === "scissors") {
                alert("You lose. I chose " + programRPS);
                //increment programWins
                programWins = programWins + 1;
            } else if (userRPS === "Scissors" || userRPS === "scissors" && programRPS === "paper") {
                alert("You win! I chose " + programRPS);
                //increment userWins
                userWins = userWins + 1;
            } else if (userRPS === "Scissors" || userRPS === "scissors" && programRPS === "rock") {
                alert("You lose. I chose " + programRPS);
                //increment programWins
                programWins = programWins + 1;
            } else {

                //in the event of a tie
                do {
                    alert("Snap! It's a tie, hold on...");
                    indexRandom = Math.floor(Math.random() * 3);
                    programRPS = arrayRPS[indexRandom];

                    if (userRPS === "Rock" || userRPS === "rock" && programRPS === "scissors") {
                        alert("You win! I chose " + programRPS);
                        //increment userWins
                        userWins = userWins + 1;
                    } else if (userRPS === "Rock" || userRPS === "rock" && programRPS === "paper") {
                        alert("You lose. I chose " + programRPS);
                        //increment programWins
                        programWins = programWins + 1;
                    } else if (userRPS === "Paper" || userRPS === "paper" && programRPS === "rock") {
                        alert("You win! I chose " + programRPS);
                        //increment userWins
                        userWins = userWins + 1;
                    } else if (userRPS === "Paper" || userRPS === "paper" && programRPS === "scissors") {
                        alert("You lose. I chose " + programRPS);
                        //increment programWins
                        programWins = programWins + 1;
                    } else if (userRPS === "Scissors" || userRPS === "scissors" && programRPS === "paper") {
                        alert("You win! I chose " + programRPS);
                        //increment userWins
                        userWins = userWins + 1;
                    } else if (userRPS === "Scissors" || userRPS === "scissors" && programRPS === "rock") {
                        alert("You lose. I chose " + programRPS);
                        //increment programWins
                        programWins = programWins + 1;
                    }
                } while ((userRPS === "Rock" || userRPS === "rock" && programRPS === "rock") ||
                (userRPS === "Paper" || userRPS === "paper" && programRPS === "paper") ||
                    (userRPS === "Scissors" || userRPS === "scissors" && programRPS === "scissors"));
            }
            //check the current num of wins to see who has won the majority
            if (userWins === ((numRounds + 1) / 2)) {
                alert("You won!! Congratulations. You've beaten me THIS time, but I'll win the next one.");
                //ends for loop
                i = numRounds;
            } else if (programWins === ((numRounds + 1) / 2)) {
                //ends for loop
                i = numRounds;
                alert("Tough luck " + userName + ", I win! Better luck next time.");
            }
        }

        //wanna play again message
        playAgain = prompt("Wanna play again? Type 'y' to keep playing, or anything else to quit.");

    } while (playAgain === "y");

    alert("Good game, " + userName + ". Thanks for playing!");

}

//dice game
function diceGameSimple() {
    //currently just the code from the video
    var player1Name;
    var player2Name;
    var dice1;
    var dice2;

    player1Name = prompt("What is the name of the first player?");
    player2Name = prompt("What is the name of the second player?");

    alert("Press 'Ok' to roll the dice");

    //0 and 6
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    alert("Rolling...");

    if (dice1 > dice2) {
        alert(player1Name + " wins with a " + dice1 + "!");
    } else if (dice2 > dice1) {
        alert(player2Name + " wins with a " + dice2 + "!");
    } else {
        alert("It's a tie! (Audience gasps in disbelief)");
    }
}

function chanceDice() {
    var u_name;
    var ch_d1;
    var ch_d2;
    var u_d1;
    var u_d2;
    var ch_pointsArray = [];
    var u_pointsArray = [];
    var ch_points = 0;
    var u_points = 0;
    var deadNum = 7;
    var u_tPoints;
    var ch_tPoints;
    var ch_chance;
    var u_chance;
    var chancyOptions = [1, 2];

    //intro goes here
    u_name = prompt("Enter your name: ");
    alert("Hi " + u_name + ", my name is Chancy, and I love this game! Here's how it works: " + "\n" +
        "There will be 5 rounds. Each round, you and I will roll two die at LEAST once. Your points each " +
        "round are determined by multiplying the number you roll by 100. You can choose to roll as many " +
        "times as you like, but BE WARNED, if you roll a 7, your score for the round is automatically set " +
        "back to 0. You win by scoring more points than me. Good luck! Let's begin...");

    //chance loop (runs each round)
    for (let i = 0; i < 5; i++) {

        //round declaration
        alert("Round " + (i + 1) + "...");
        u_points = 0;
        ch_points = 0;

        //user's round 1
        do {
            //start round
            alert("Roll dice");

            //roll dice and count points
            u_d1 = Math.floor(Math.random() * 6) + 1;
            u_d2 = Math.floor(Math.random() * 6) + 1;
            u_points = (u_d1 + u_d2) * 100;

            //check to see if you keep your points
            if (u_points != (deadNum * 100)) {
                //prompt second chance
                u_chance = prompt("You rolled a " + u_d1 + " and a " + u_d2 +
                    " and scored " + u_points + " points." + "\n" + "Do you want to roll again?" +
                    " type 'y' to roll again, and 'n' to move on to the next round.");

                //make sure the input is 'y' or 'n'
                while (u_chance != "y" && u_chance != "n") {
                    // debugger;
                    u_chance = prompt("You must type 'y' to roll again or 'n' to continue.");
                }

            } else {
                u_points = 0;
                u_chance = "n";
                alert("Sorry, that was an unlucky roll. You rolled a " + u_d1 + " and a " + u_d2 + 
                ". You scored 0 points this round.");
            }
        } while (u_chance != "n");

        alert("My turn...");

        //Chancy's round 1
        do {
            //start round
            alert("Rolling dice...");

            //roll dice and count points; random number between 1 and 6
            ch_d1 = Math.floor(Math.random() * 6) + 1;
            ch_d2 = Math.floor(Math.random() * 6) + 1;
            ch_points = (ch_d1 + ch_d2) * 100;

            //check to see if you keep your points
            if (ch_points != (deadNum * 100)) {
                
                //random number between 1 and 2
                ch_chance = Math.floor(Math.random() * 2) + 1;

                //Chancy's decision making
                if (ch_chance === 1) {
                    alert("I rolled a " + ch_d1 + " and a " + ch_d2 + ". I'll stay with " + ch_points);
                    ch_chance = "n";
                }
                else if (ch_chance === 2) {
                    alert("I rolled a " + ch_d1 + " and a " + ch_d2 + ". You know what, I'm feeling lucky. " + 
                    "I'll chance it and roll again.");
                    ch_chance = "y";
                }
            } else {
                ch_points = 0;
                ch_chance = "n";
                alert("Looks like I'm outta luck. I rolled a " + ch_d1 + " and a " + ch_d2 + ". I scored 0 " + 
                "points this round.");
            }
        } while (ch_chance != "n");

        //add points to u_pointsArray and ch_pointsArray
        u_pointsArray.push(u_points);
        ch_pointsArray.push(ch_points);
    }

    //tally up points
    u_tPoints = u_pointsArray[0] + u_pointsArray[1] + u_pointsArray[2] + u_pointsArray[3] + u_pointsArray[4];
    ch_tPoints = ch_pointsArray[0] + ch_pointsArray[1] + ch_pointsArray[2] + ch_pointsArray[3] + ch_pointsArray[4];
    
    //declare winner
    if (u_tPoints > ch_tPoints) {
        alert("You won! Congratulations, " + u_name + ". You were lucky this time. " + "\n" +
        "Your total points: " + u_tPoints + "\n" +
        "Chancy's total points: " + ch_tPoints);
    } else if (u_tPoints < ch_tPoints) {
        alert("Yes! Sorry, " + u_name + ", I'm the winner. Better luck next time. " + "\n" +
        "Your total points: " + u_tPoints + "\n" +
        "Chancy's total points: " + ch_tPoints);
    } else if (u_tPoints === ch_tPoints) {
        alert("Aw snap! It's a tie! That doesn't happen too often." + "\n" +
        "Your total points: " + u_tPoints + "\n" +
        "Chancy's total points: " + ch_tPoints);
    }
    
}