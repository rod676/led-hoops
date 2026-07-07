let totalScore = document.getElementById("score-home")
let score = 0 
function add1() {
  score +=1
  totalScore.textContent = score
}

function add2() {
  score +=2
  totalScore.textContent = score
}

function add3() {
  score +=3
  totalScore.textContent = score
}

let totalScoreGuest = document.getElementById("score-guest")

let scoreGuest = 0 

function guestadd1() {
  scoreGuest +=1
  totalScoreGuest.textContent = scoreGuest
}

function guestadd2() {
  scoreGuest +=2
  totalScoreGuest.textContent = scoreGuest
}

function guestadd3() {
  scoreGuest +=3
  totalScoreGuest.textContent = scoreGuest
}

function reset() {
  score = 0
  scoreGuest = 0
  totalScoreGuest.textContent = 0
  totalScore.textContent = 0
}