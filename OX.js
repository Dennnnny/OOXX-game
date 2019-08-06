const container = document.querySelector('.container')
const drwaLine = document.querySelector('.draw-line')
const no1 = document.querySelector('.no1')
const no2 = document.querySelector('.no2')
const no3 = document.querySelector('.no3')
const no4 = document.querySelector('.no4')
const no5 = document.querySelector('.no5')
const no6 = document.querySelector('.no6')
const no7 = document.querySelector('.no7')
const no8 = document.querySelector('.no8')
const no9 = document.querySelector('.no9')


let isPlayerO = true
let isWinner = false
let noWinner = false


function whoIsWinner() {
  if (no1.innerHTML === no2.innerHTML && no2.innerHTML === no3.innerHTML && no1.innerHTML !== '') {
    drwaLine.classList.add('line1')
    return isWinner = true
  } else if (no4.innerHTML === no5.innerHTML && no5.innerHTML === no6.innerHTML && no4.innerHTML !== '') {
    drwaLine.classList.add('line2')
    return isWinner = true
  } else if (no7.innerHTML === no8.innerHTML && no8.innerHTML === no9.innerHTML && no7.innerHTML !== '') {
    drwaLine.classList.add('line3')
    return isWinner = true
  } else if (no1.innerHTML === no4.innerHTML && no4.innerHTML === no7.innerHTML && no7.innerHTML !== '') {
    drwaLine.classList.add('line4')
    return isWinner = true
  } else if (no2.innerHTML === no5.innerHTML && no5.innerHTML === no8.innerHTML && no8.innerHTML !== '') {
    drwaLine.classList.add('line5')
    return isWinner = true
  } else if (no3.innerHTML === no6.innerHTML && no6.innerHTML === no9.innerHTML && no9.innerHTML !== '') {
    drwaLine.classList.add('line6')
    return isWinner = true
  } else if (no3.innerHTML === no5.innerHTML && no5.innerHTML === no7.innerHTML && no7.innerHTML !== '') {
    drwaLine.classList.add('line7')
    return isWinner = true
  } else if (no1.innerHTML === no5.innerHTML && no5.innerHTML === no9.innerHTML && no9.innerHTML !== '') {
    drwaLine.classList.add('line8')
    return isWinner = true
  } else if (no1.innerHTML !== '' && no2.innerHTML !== '' && no3.innerHTML !== ''
    && no4.innerHTML !== '' && no5.innerHTML !== '' && no6.innerHTML !== ''
    && no7.innerHTML !== '' && no8.innerHTML !== '' && no9.innerHTML !== '') {
    return noWinner = true
  }

}

function weHaveWinner() {
  isPlayerO ? alert(`PlayerX is Winner~~~!`) : alert(`PlayerO is Winner~~~!`)
}

function reset() {
  for (let i = 0; i <= 2; i++) {
    // console.log(container.children[i])
    for (let j = 0; j <= 2; j++) {
      drwaLine.className = ''
      container.children[i].children[j].innerHTML = ''
      container.children[i].children[j].classList.remove('occupied')
    }
  }
  container.addEventListener('click', OX, false)
  isPlayerO = true
  isWinner = false
  noWinner = false
}

function OX() {
  let element = event.target
  const occupied = document.querySelectorAll('.occupied')

  if (event.target.classList.contains('col') && !event.target.classList.contains('occupied')) {
    isPlayerO ? (element.innerHTML = 'O', isPlayerO = false, element.classList.add('occupied')) :
      (element.innerHTML = 'X', isPlayerO = true, element.classList.add('occupied'))
  }

  whoIsWinner()

  if (isWinner) {
    // console.log(element)
    container.removeEventListener('click', OX, false)
    setTimeout(weHaveWinner, 1000)
    setTimeout(reset, 2000)
  } else if (noWinner) {
    container.removeEventListener('click', OX, false)
    setTimeout("alert('There are no winner! You Loser')", 1000)
    setTimeout(reset, 2000)
  }

  // console.log(occupied)

}

container.addEventListener('click', OX, false)

// console.log(container.children[0])





