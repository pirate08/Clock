setInterval(setClock , 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
    const currenDate = new Date();
    const secondRatio = currenDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currenDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currenDate.getHours()) / 12
    setRotation(secondHand , secondRatio)
    setRotation(minuteHand , minuteRatio)
    setRotation(hourHand , hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation' , rotationRatio * 360)
}

setClock();