const screen = document.querySelector('#screen')
const allButtons = document.querySelectorAll('.button')
const numbers = document.querySelectorAll('.num')
const del = document.querySelector('#clear')
const sign = document.querySelectorAll('.sign')
const equals = document.querySelector('#equal')
const color = document.querySelectorAll('.colors')
const body = document.querySelector('body')



function inputChange (event){
    const targetE1 = event.target;
    const buttonText = targetE1.innerText;
    screen.innerText += buttonText
    console.log(typeof screen.innerText)
}


function addAllEventListeners(arr){
    for(let i=0; i <arr.length; i++){
        arr[i].addEventListener('click', inputChange)
    }
}
addAllEventListeners(numbers)


function makeItEqual (){
    let string = screen.innerText
    if (string.includes('+')){
    let a = string.split('+')
    screen.innerText = parseInt(a[0]) + parseInt(a[1])
}
if (string.includes('-')){
    let b = string.split('-')
    screen.innerText = parseInt(b[0]) - parseInt(b[1])
}
if (string.includes('*')){
    let c = string.split('*')
    screen.innerText = parseInt(c[0]) * parseInt(c[1])
}
if (string.includes('/')){
    let d = string.split('/')
    screen.innerText = parseInt(d[0]) / parseInt(d[1])
}
}
equals.addEventListener('click', makeItEqual)


function deleteBox (){
    screen.innerText=''
}
del.addEventListener('click', deleteBox)


function addSigns(arr){
    for(let i=0; i <arr.length; i++){
        arr[i].addEventListener('click', inputChange)
    }
}
addSigns(sign)


function pickC(arr){
    for(let i=0; i <arr.length; i++){
        arr[i].addEventListener('click', pickColor)
    }
}
pickC(color)


function pickColor (e){
    let color = e.target.innerText
        if (color === 'red'){
            screen.setAttribute('style', 'color: red')
            body.setAttribute('style', 'cursor: pointer')
        }
        if (color === 'orange'){
            screen.setAttribute('style', 'color: orangered')
        }
        if (color === 'yellow'){
            screen.setAttribute('style', 'color: yellow')
        }
        if (color === 'green'){
            screen.setAttribute('style', 'color: green')
        }
        if (color === 'blue'){
            screen.setAttribute('style', 'color: blue')
        }
        if (color === 'purple'){
            screen.setAttribute('style', 'color: purple')
        }
}
// screen.addAllEventListeners('click', pickColor)
