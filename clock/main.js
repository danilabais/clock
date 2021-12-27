let date;
const minArrow = document.querySelector('.min-arrow')
const hourArrow = document.querySelector('.hour-arrow')

const firstStr = document.querySelector('#first')
const secondStr = document.querySelector('#second')
const threeStr = document.querySelector('#three')
const dot = document.querySelector('.dot')


 const days = ["Воскресенье", "Понедельник", "Вторник", "Среда",
   "Четверг", "Пятница", "Суббота"];
const monthNames = [ "Января","Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря" ]

setInterval(()=> {
  date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let year = date.getFullYear()
  let day = date.getDay()
  let numb = date.getDate()
  let mounth = date.getMonth()
  
  renderClock(hours,minutes)
  renderElectroClock(hours,minutes,seconds,year,day,numb,mounth)

},1000)


function renderElectroClock(hours,minutes,seconds,year,day,numb,mounth) {
  firstDate(mounth,numb,year)
  secondDate(day)
  threeDate(hours,minutes,seconds)
}
function firstDate(mounth,numb,year) {
  firstStr.innerHTML = `${numb} ${monthNames[mounth]} ${year} года`
}

function secondDate(day) {
  secondStr.innerHTML = days[day]
}

function threeDate(hours,minutes,seconds) {
 
  threeStr.innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`
}
function addZero (x) {
  if (String(x).length==1) {
     return x="0"+x
  }
return x
}


function renderClock(h,m) {
   hourArrow.style.transform = `rotate(${calcDegH(h,m)}deg)`;
   minArrow.style.transform = `rotate(${calcDegM(m)}deg)`;
}

const calcDegM =time => time/60*360
const calcDegH = (timeH,timeM)=> (Math.abs(timeH-12)+(timeM/60))/12*360


//Пасхалка

dot.onclick = function() {
  console.log("Байсупов Данила")
};
