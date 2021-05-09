const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#Time-left')
const score = document.querySelector('#score')
const btn = document.querySelector('#btn')
const gameCard = document.querySelector('.game-card')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null


// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
// if (!isChrome){
//     ('#iframeAudio').remove()
// }
// else {
//     ('#playAudio').remove() 
// }

function randomSquare() {

   squares.forEach(square => {
       square.classList.remove('mole')
   })

   let randomSquare = squares[Math.floor(Math.random() * 9)]
   randomSquare.classList.add('mole')
   hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
        result++
        score.textContent = result
        hitPosition = null
      }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 700)
}
// moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
        btn.textContent = "PLAY AGAIN!"
        btn.style.display = null;
    }
}


btn.addEventListener('click' , () => {
    gameCard.style.display = null;
    btn.style.display = 'none';
    moveMole()
    function countDown() {
        currentTime--
        timeLeft.textContent = currentTime
    
        if (currentTime == 0) {
            clearInterval(countDownTimerId)
            clearInterval(timerId)
            alert('GAME OVER! Your final score is ' + result)
            gameCard.style.display = 'none';
            btn.textContent = "PLAY AGAIN!"
            btn.style.display = null;
            currentTime = 60
            result = 0
        }
    }
    let countDownTimerId = setInterval(countDown, 700)
})