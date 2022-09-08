let homeScore = 0;
let guestScore =0;

let scoreHome = document.getElementById("scoreofHome");
let scoreGuest = document.getElementById("scoreofGuest");

function incrementHomeScore1() {
   homeScore = homeScore + 1 
   scoreHome.textContent = homeScore;
}
function incrementHomeScore2() {
   homeScore = homeScore + 2
   scoreHome.textContent = homeScore;
   
}
function incrementHomeScore3() {
    homeScore = homeScore + 3
   scoreHome.textContent = homeScore;
}
function incrementGuestScore1() {
    guestScore = guestScore + 1
    scoreGuest.textContent = guestScore;
}
function incrementGuestScore2() {
    guestScore = guestScore + 2
    scoreGuest.textContent = guestScore;
}
function incrementGuestScore3() {
    guestScore = guestScore + 3
    scoreGuest.textContent = guestScore;
}