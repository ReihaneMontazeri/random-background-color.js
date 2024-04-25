let body = document.body
let blueColor
let redColor
let greenColor

setInterval(() => {
    redColor = Math.floor( Math.random()* 255)
    blueColor = Math.floor( Math.random()* 255)
    greenColor = Math.floor( Math.random()* 255)

    body.style.backgroundColor = 'rgb(' + redColor + ',' + blueColor + ',' + greenColor + ')'
}, 2000);