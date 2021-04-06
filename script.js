// setup variables
let score = 0
let cp = 1
let upgradeprice = 100
let upgradenum = 1
let multiplier = 1
let mulprice = 500
// event listener for clicking
document.getElementById('clicker').addEventListener('click', clicked)
// event listener for upgrade
document.getElementById('upgrade').addEventListener('click', upgrade)
// event listener for multiplier upgrade
document.getElementById('multiplier').addEventListener('click', multiply)
// event listener for WIN img/button
document.getElementById('win').addEventListener('click', win)
// adds points to the score when button is clicked based on cp (click points) and multiplyer  then displays the curent score
function clicked () {
  score = score + cp * multiplier
  document.getElementById('points').innerHTML = score
}
// detects if the user have enuff points for an upgrade if you do lowers your points then increases points per click by 1 and then increses the price for future upgrades if you dont have enugf points it alerts the user then stops
function upgrade () {
  if (score >= upgradeprice) {
    score = score - upgradeprice
    upgradenum = upgradenum + 1
    cp = cp + 1
    upgradeprice = upgradeprice + 25
    upgradeprice = upgradeprice * upgradenum
    document.getElementById('upprice').innerHTML = upgradeprice
    document.getElementById('points').innerHTML = score
  } else {
    alert('not enuff clicks!')
  }
}
// detects if the user have enuff points if you do it multiplies your points per click then increases its price, if you dont have enuff points it alerts the user
function multiply () {
  if (score >= mulprice) {
    score = score - mulprice
    multiplier = multiplier + 1
    mulprice = mulprice + 50
    mulprice = mulprice * multiplier
    document.getElementById('mulprice').innerHTML = mulprice
    document.getElementById('points').innerHTML = score
  } else {
    alert('not enuff clicks!')
  }
}
// detects if the user has enuff points if yes shows the end screen, if not alerts the user
function win () {
  if (score >= 5000) {
    score = score - 5000
    document.getElementById('planet').src = '/images/Winner.png'
  } else {
    alert('you arent gonna win that easily, get more points then try again')
  }
}
