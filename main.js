const rouletteBtn = document.querySelector('.roulette-box>div button')
const roulette = document.querySelector('.roulette img')

function getRandomArbitrary(min, max) { return Math.random() * (max - min) + min; }
const turnAngle = 360 * 20
let randomNumber = getRandomArbitrary(0, 360)


rouletteBtn.addEventListener('click', function () {
  if (randomNumber >= 0 && randomNumber < 14.4) {
    roulette.style.transform = `rotate(${randomNumber + turnAngle}deg)`
    setTimeout(function() {
      window.location.reload()
    }, 1500);
    alert('오늘은 구냥 놀쟝!')
  } else if (randomNumber >= 14.4 && randomNumber < 100.8) {
    roulette.style.transform = `rotate(${randomNumber + turnAngle}deg)`
    setTimeout(function() {
      alert('오늘은 확률과통계 하눈날~')
      window.location.reload()
    }, 1500);
  } else if (randomNumber >= 100.8 && randomNumber < 187.2) {
    roulette.style.transform = `rotate(${randomNumber + turnAngle}deg)`
    setTimeout(function() {
      alert('오늘은 현대대수학 하눈날~')
      window.location.reload()
    }, 1500);
  } else if (randomNumber >= 187.2 && randomNumber < 273.6) {
    roulette.style.transform = `rotate(${randomNumber + turnAngle}deg)`
    setTimeout(function() {
      alert('오늘은 위상수학 하눈날~')
      window.location.reload()
    }, 1500);
  } else if (randomNumber >= 273.6 && randomNumber < 360) {
    roulette.style.transform = `rotate(${randomNumber + turnAngle}deg)`
    setTimeout(function() {
      alert('오늘은 해석학 하눈날~')
      window.location.reload()
    }, 1500);
  }
})
