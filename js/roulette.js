/*
Types of bets:
on red: 1 to 1
on black: 1 to 1
on 1-12: 2 to 1
on 13-24: 2 to 1
on 25-36: 2 to 1
on exact number: 30 to 1
*/



function spinWheel() {

    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");

    // declare vars
    var userName;
    var userPoints = 100;
    var betType;
    var colorChoice;
    var groupOf12;
    var specifNum;
    var betVal;
    var playAgain;


    /* 
    The idea right now is to make an array of 36 objects that will be selected at random each round.
    These objects will need the following attributes: (1) ID#, (2) Color (Red or Black), (3) Range 
    (either 1-12, 13-24, or 25-36). After the objects are created, we need to write the program so that
    it selects a random object, and awards or subtracts the appropriate amount from the final score, depending
    on a list of conditions. 
    */

    class RouletteNumber {
        //properties
        num_ID;
        color;
        num_range_fam;
        constructor(_num_ID, _color, _num_range_fam) {
            this.num_ID = _num_ID;
            this.color = _color;
            this.num_range_fam = _num_range_fam;
        }
    }

    var zero = new RouletteNumber("0", "green", "0");
    var one = new RouletteNumber("1", "red", "1-12");
    var two = new RouletteNumber("2", "black", "1-12");
    var three = new RouletteNumber("3", "red", "1-12");
    var four = new RouletteNumber("4", "black", "1-12");
    var five = new RouletteNumber("5", "red", "1-12");
    var six = new RouletteNumber("6", "black", "1-12");
    var seven = new RouletteNumber("7", "red", "1-12");
    var eight = new RouletteNumber("8", "black", "1-12");
    var nine = new RouletteNumber("9", "red", "1-12");
    var ten = new RouletteNumber("10", "black", "1-12");
    var eleven = new RouletteNumber("11", "black", "1-12");
    var twelve = new RouletteNumber("12", "red", "1-12");
    var thirteen = new RouletteNumber("13", "black", "13-24");
    var fourteen = new RouletteNumber("14", "red", "13-24");
    var fifteen = new RouletteNumber("15", "black", "13-24");
    var sixteen = new RouletteNumber("16", "red", "13-24");
    var seventeen = new RouletteNumber("17", "black", "13-24");
    var eighteen = new RouletteNumber("18", "red", "13-24");
    var nineteen = new RouletteNumber("19", "red", "13-24");
    var twenty = new RouletteNumber("20", "black", "13-24");
    var twenty_one = new RouletteNumber("21", "red", "13-24");
    var twenty_two = new RouletteNumber("22", "black", "13-24");
    var twenty_three = new RouletteNumber("23", "red", "13-24");
    var twenty_four = new RouletteNumber("24", "black", "13-24");
    var twenty_five = new RouletteNumber("25", "red", "25-36");
    var twenty_six = new RouletteNumber("26", "black", "25-36");
    var twenty_seven = new RouletteNumber("27", "red", "25-36");
    var twenty_eight = new RouletteNumber("28", "black", "25-36");
    var twenty_nine = new RouletteNumber("29", "black", "25-36");
    var thirty = new RouletteNumber("30", "red", "25-36");
    var thirty_one = new RouletteNumber("31", "black", "25-36");
    var thirty_two = new RouletteNumber("32", "red", "25-36");
    var thirty_three = new RouletteNumber("33", "black", "25-36");
    var thirty_four = new RouletteNumber("34", "red", "25-36");
    var thirty_five = new RouletteNumber("35", "black", "25-36");
    var thirty_six = new RouletteNumber("36", "red", "25-36");

    //make array for roulette wheel
    var rouletteWheel = [zero, one, two, three, four, five, six, seven,
    eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen,
    seventeen, eighteen, nineteen, twenty, twenty_one, twenty_two, twenty_three,
    twenty_four, twenty_five, twenty_six, twenty_seven, twenty_eight, twenty_nine,
    thirty, thirty_one, thirty_two, thirty_three, thirty_four, thirty_five,
    thirty_six];

    var randomSelect;
    var selection;
    

    userName = prompt("Enter Your Name");

    alert("Hi " + userName + ", follow the series of prompts to place your bets and hopefully win BIG!");
    // debugger;

        do {

            randomSelect = Math.floor(Math.random() * 36);

            selection = rouletteWheel[randomSelect];

            betType = prompt("You currently have " + userPoints + " points. What type of bet do you want to make?" + 
                " (type " + 1 + " to bet on color, type " + 2 + " to bet on group of 12, or type " + 3 + " to bet a specific number. " + 
                "If you do not type 1, 2, or 3, this question will appear again. Type 'break' to leave.)");

            while (betType != 1 && betType != 2 && betType != 3 && betType != "break" && betType != "Break") {
                betType = prompt("You currently have " + userPoints + " points. What type of bet do you want to make?" + 
                " (type " + 1 + " to bet on color, type " + 2 + " to bet on group of 12, or type " + 3 + " to bet a specific number. " + 
                "If you do not type 1, 2, or 3, this question will appear again. Type 'break' to leave.)");
            };

            if (betType === "1"){
                betVal = prompt("How much do you want to bet? (You must have this amount)");
                while (betVal > userPoints || isNaN(betVal)) {
                    alert("You do not have this many points, or you did not type a number. Try again.");
                    betVal = prompt("How much do you want to bet? (You must have this amount)");
                }
                betVal = parseInt(betVal);
                colorChoice = prompt("type 'red' or 'black'. If you type something else, this question will be asked again.");
                while (colorChoice != 'red' && colorChoice != 'black'){
                    colorChoice = prompt("type 'red' or 'black'. If you type something else, this question will be asked again.");
                }

                // alert(selection.color);
                alert("Press 'ok' to spin");
                if (colorChoice === selection.color){
                    alert("The color was " + selection.color + ". Nice!");
                    userPoints = userPoints + betVal;
                }
                else {
                    alert("The color was " + selection.color + ". Better luck next time");
                    userPoints = userPoints - betVal;
                }
                alert("You now have " + userPoints + " points.");        
            }

            else if (betType === "2") {
                betVal = prompt("How much do you want to bet? (You must have this amount)");
                while (betVal > userPoints || isNaN(betVal)) {
                    alert("You do not have this many points, or you did not type a number. Try again.");
                    betVal = prompt("How much do you want to bet? (You must have this amount)");
                }
                betVal = parseInt(betVal);
                groupOf12 = prompt("Which group of 12 would you like to guess? (Type '1' for 1-12 " + 
                ", type '2' for 13-24, or type '3' for 25-36). Any other value will make this question appear again.");
                while (groupOf12 != 1 && groupOf12 != 2 && groupOf12 != 3){
                    groupOf12 = prompt("Which group of 12 would you like to guess? (Type '1' for 1-12 " + 
                    ", type '2' for 13-24, or type '3' for 25-36). Any other value will make this question appear again.");
                }

                //changing values to match object specs
                if (groupOf12 === "1"){
                    groupOf12 = '1-12';
                }
                else if (groupOf12 === "2"){
                    groupOf12 = '13-24';
                }
                else if (groupOf12 === "3"){
                    groupOf12 = '25-36';
                }

                // alert(selection.num_range_fam);
                alert("Press 'ok' to spin");
                if (groupOf12 === selection.num_range_fam){
                    alert("The group of 12 was " + selection.num_range_fam + ". Nice!");
                    userPoints = userPoints + (betVal * 2);
                }
                else {
                    alert("The group of 12 was " + selection.num_range_fam + ". Better luck next time");
                    userPoints = userPoints - betVal;
                }
                alert("You now have " + userPoints + " points.");
            }

            else if (betType === "3") {
                betVal = prompt("How much do you want to bet? (You must have this amount)");
                while (betVal > userPoints || isNaN(betVal)) {
                    alert("You do not have this many points, or you did not type a number. Try again.");
                    betVal = prompt("How much do you want to bet? (You must have this amount)");
                }
                betVal = parseInt(betVal);
                specifNum = prompt("Type the number you think it will land on (must be between 0 and 36)" + 
                " If you type any other value, the question will be asked again.");
                while (isNaN(specifNum) && specifNum > 36 && specifNum < 0) {
                    specifNum = prompt("Type the number you think it will land on (must be between 0 and 36)" + 
                    " If you type any other value, the question will be asked again.");
                }

                // alert(selection.num_ID);
                alert("Press 'ok' to spin");
                if (specifNum === selection.num_ID) {
                    alert("The number was " + selection.num_ID + " . Nice!");
                    userPoints = userPoints + (betVal * 30);
                }
                else {
                    alert("The number was " + selection.num_ID + " . Better luck next time");
                    userPoints = userPoints - betVal;
                }
                alert("You now have " + userPoints + " points.");
            }

            playAgain = prompt("Do you want to continue betting? Type 'y' for yes or 'n' for no. " +
            "Any other value will repeat the question.");
            while (playAgain != 'y' && playAgain != 'n') {
                playAgain = prompt("Do you want to continue betting? Type 'y' for yes or 'n' for no. " +
                "Any other value will repeat the question.");
            }

            randomSelect = Math.floor(Math.random() * 36);

            selection = rouletteWheel[randomSelect];

    } while (userPoints > 0 && playAgain != 'n' && playAgain === 'y');

    alert("If your total points reaches the cash out minimum, take a screenshot now and cash in! " + "\n" +
    "Your total points: " + userPoints);

}