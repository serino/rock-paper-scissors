let images = document.getElementById(`images`)
let rockImage = document.getElementById(`rockImage`)
let paperImage = document.getElementById(`paperImage`)
let scissorsImage = document.getElementById(`scissorsImage`)

let userChoiceDisplay = document.getElementById(`userChoiceDisplay`)
let countdownParagraph = document.getElementById(`countdownParagraph`)
let computerChoiceDisplay = document.getElementById(`computerChoiceDisplay`)

let userScoreParagraph = document.getElementById(`userScoreParagraph`)
let computerScoreParagraph = document.getElementById(`computerScoreParagraph`)

let playAgainButton = document.getElementById(`playAgainButton`)

rockImage.addEventListener(`click`, setUserChoice)
paperImage.addEventListener(`click`, setUserChoice)
scissorsImage.addEventListener(`click`, setUserChoice)
playAgainButton.addEventListener(`click`, playAgain)

let counter

let userChoice
let computerChoice

let intervalId

let userScore = 0

let computerScore = 0

function setUserChoice() {
  images.style.display = "none"
  
  counter = 2
  userChoiceDisplay.src = this.src
  computerChoiceDisplay.src = ""
  countdownParagraph.innerHTML = ""

  userChoice = this
  intervalId = setInterval(startCountdown, 750)
}

function startCountdown() {
  

  if (counter == 0) {
    clearInterval(intervalId)
    setComputerChoice()
    return
  }
  countdownParagraph.innerHTML = `Computer choosing...`
  counter--
}

function setComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3)

    if (randomNum == 0) {
      computerChoiceDisplay.src = `rock.png`
      computerChoice = "rockImage"
    }
    else if (randomNum == 1) {
      computerChoiceDisplay.src = `paper.png`
      computerChoice = "paperImage"
    } 
    else if (randomNum == 2) {
      computerChoiceDisplay.src = `scissors.png`
      computerChoice = "scissorsImage"
    } 
    checkForWinner()
}

function checkForWinner() {

  if (computerChoice == `rockImage` && userChoice.id == `rockImage`) {
    console.log(`hi joseph`)
    countdownParagraph.innerHTML = `Tie`
  }

  else if (computerChoice == `rockImage` && userChoice.id == `paperImage`) {
    countdownParagraph.innerHTML = `You win!`
  }

  else if (computerChoice == `rockImage` && userChoice.id == `scissorsImage`) {
    countdownParagraph.innerHTML = `Computer wins`
  }

  else if (computerChoice == `paperImage` && userChoice.id == `rockImage`) {
    countdownParagraph.innerHTML = `Computer wins`
  }

  else if (computerChoice == `paperImage` && userChoice.id == `paperImage`) {
    countdownParagraph.innerHTML = `Tie`
  }

  else if (computerChoice == `paperImage` && userChoice.id == `scissorsImage`) {
    countdownParagraph.innerHTML = `You win!`
  }

  else if (computerChoice == `scissorsImage` && userChoice.id == `rockImage`) {
    countdownParagraph.innerHTML = `You win!`
  }

  else if (computerChoice == `scissorsImage` && userChoice.id == `paperImage`) {
    countdownParagraph.innerHTML = `Computer wins`
  }

  else if (computerChoice == `scissorsImage` && userChoice.id == `scissorsImage`) {
    countdownParagraph.innerHTML = `Tie`
  }
 updateScore()
}

function updateScore() {
  if (countdownParagraph.innerHTML == `Computer wins`) {
    computerScore++
    computerScoreParagraph.innerHTML = `Computer: ${computerScore}`
  }
  else if (countdownParagraph.innerHTML == `You win!`) {
    userScore++
    userScoreParagraph.innerHTML = `You: ${userScore}`
  }
  playAgainButton.style.display = `block`
}

function playAgain() {
  images.style.display = `block`
  userChoiceDisplay.src = ``
  computerChoiceDisplay.src = ``
  countdownParagraph.innerHTML = `Click on an image to play`
  playAgainButton.style.display = `none`
}
