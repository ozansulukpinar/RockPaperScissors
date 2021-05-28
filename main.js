//Increase font-size of header
document.getElementById("h1").style.fontSize = "45px";

//Assign computer's choice
var computerChoice = Math.floor(Math.random() * 3);
var userChoice;

//Announce the winner
function announceWinner(text) {
    alert(text);
}

//Reload the page to start new game
function refreshPage() {
    location.reload();
}

document.body.onmousedown = function (e) {
    e = e || window.event;
    //Assign user's choice
    var userChoice = (e.target || e.srcElement).id;

    //Focus only valid divs
    if (userChoice == "0" || userChoice == "1" || userChoice == "2") {
        //Determine message that will be displayed
        var message;

        //No one wins(Draw)(0-0,1-1,2-2)
        if (computerChoice == userChoice) {
            message = "Both of you thought same thing at the same time!";
        }

        //Computer wins(0-2,1-0,2-1)
        if ((computerChoice == 0 && userChoice == 2) || (computerChoice == 1 && userChoice == 0) || (computerChoice == 2 && userChoice == 1)) {
            message = "Cyberdyne Systems Model 101 is back!";
        }

        //User wins(0-1,1-2,2-0)
        if ((computerChoice == 0 && userChoice == 1) || (computerChoice == 1 && userChoice == 2) || (computerChoice == 2 && userChoice == 0)) {
            message = "You win! Perfect!";
        }

        announceWinner(message);
        refreshPage();
    }
};
