// setup variables
let score = 0
let cp = 1
let upgradeprice = 100
let upgradenum = 1
let multiplier = 1
let mulprice = 500
const inc = 1
let capacity = 2000
// event listener for clicking
document.getElementById('clicker').addEventListener('click', clicked)
// event listener for upgrade
document.getElementById('upgrade').addEventListener('click', upgrade)
// event listener for multiplier upgrade
document.getElementById('multiplier').addEventListener('click', multiply)
// event listener for WIN img/button
document.getElementById('win').addEventListener('click', win)
// event listen for capacity button
document.getElementById('capbutton').addEventListener('click', cap)
// activates capacity chercker loop every second
setInterval(capcheck, 1000)
// adds points to the score when button is clicked based on cp (click points) and multiplyer  then displays the curent score
function clicked () {
  score = score + cp * multiplier
  document.getElementById('points').innerHTML = score
}
// detects if the user have enuff points for an upgrade if you do lowers your points then increases points per click by 1 and then increses the price for future upgrades if you dont have enugf points it alerts the user then stops
function upgrade () {
  if (score >= upgradeprice) {
    score = score - upgradeprice
    upgradenum = upgradenum + inc
    cp = cp + inc
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
    multiplier = multiplier + inc
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
// function to upgrade your capacity
function cap () {
  if (score >= capacity) {
    score = score - capacity
    capacity = capacity + 1000
    document.getElementById('points').innerHTML = score
    document.getElementById('cap').innerHTML = capacity
    document.getElementById('capprice').innerHTML = capacity
  } else {
    alert('not enuff clicks!')
  }
}
// a loop that constantly cheks if the score is over the capacity and doesent allow you to go above your capacity
function capcheck () {
  for (i = 0; i < 1; i++) {
    if (score > capacity) {
      score = capacity
      document.getElementById('points').innerHTML = score
    }
  }
}