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
}


function addAllEventListeners(arr){
    for(let i=0; i <arr.length; i++){
        arr[i].addEventListener('click', inputChange)
    }
}
addAllEventListeners(numbers)



function makeItEqual (){
    let string = screen.innerText;
    let hold = [];
    let buildNum = ''
    for (let i=0; i<string.length; i++){
        if (string[i] === '+'){
            if(buildNum) hold.push(buildNum)
            buildNum = ''
            hold.push('+')
        } else if (string[i] === '-'){
            if(buildNum) hold.push(buildNum)
            buildNum = ''
            hold.push('-')
        } else if (string[i] === '+'){
            if(buildNum) hold.push(buildNum)
            buildNum = ''
            hold.push('+')
        } else if (string[i] === '*'){
            if(buildNum) hold.push(buildNum)
            buildNum = ''
            hold.push('*')
        } else if (string[i] === '/'){
            if(buildNum) hold.push(buildNum)
            buildNum = ''
            hold.push('/')
        } else {
            buildNum += string[i]
            if(i === string.length-1) hold.push(buildNum)
        }
    }
    Calculate(hold)
}

function Calculate (array){
    let result = Number(array[0])
    for (let i=1; i<array.length; i++){
        if (array[i] === '+'){
            result = result + Number(array[i+1])
        } else if (array[i] === '-'){
            result = result - Number(array[i+1])
        } else if (array[i] === '*'){
            result = result * Number(array[i+1])
        } else if (array[i] === '/'){
            result = result / Number(array[i+1])
        }
    } screen.innerText = result
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
            body.setAttribute('style', "cursor: url('RED.png'), auto")
        }
        if (color === 'orange'){
            screen.setAttribute('style', 'color: orangered')
            body.setAttribute('style', "cursor: url('ORANGE.png'), auto")
        }
        if (color === 'yellow'){
            screen.setAttribute('style', 'color: yellow')
            body.setAttribute('style', "cursor: url('YELLOW.png'), auto")
        }
        if (color === 'green'){
            screen.setAttribute('style', 'color: green')
            body.setAttribute('style', "cursor: url('GREEN.png'), auto")
        }
        if (color === 'blue'){
            screen.setAttribute('style', 'color: blue')
            body.setAttribute('style', "cursor: url('BLUE.png'), auto")
        }
        if (color === 'purple'){
            screen.setAttribute('style', 'color: purple')
            body.setAttribute('style', "cursor: url('PURPLE.png'), auto")
        }
}

