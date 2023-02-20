let homeCount = 0
let homeScore = document.getElementById("homeScore")

let guestCount = 0 
let guestScore = document.getElementById("guestScore")
 
function homeOne() {
     homeCount += 1
     homeScore.innerText = homeCount
 }
 
 function homeTwo() {
     homeCount += 2
     homeScore.innerText = homeCount
 }
 
 function homeThree() {
     homeCount += 3
     homeScore.innerText = homeCount
 }
 
 function guestOne() {
     guestCount += 1
     guestScore.innerText = guestCount
 }
 
 function guestTwo() {
     guestCount += 2
     guestScore.innerText = guestCount
 }
 
 function guestThree() {
     guestCount += 3
     guestScore.innerText = guestCount
 }
 
    