let button1 = document.querySelector('.btn1')
button1.addEventListener('mousedown', ()=>{
    button1.style.background = "blue"

})

let button2 = document.querySelector('.btn2')
button2.addEventListener('mouseup', ()=>{
    button2.style.background = "red"
    
})

let button3 = document.querySelector('.btn3')
button3.addEventListener('mouseover', ()=>{
    button3.style.background = "green"

})

let button4 = document.querySelector('.btn4')
button4.addEventListener('mouseout', ()=>{
    button4.style.background = "pink"
    
})

let button5 = document.querySelector('.btn5')
button5.addEventListener('mousemove', ()=>{
    function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
    }
    $color = generateColor()
    button5.style.background = $color
})

let button6 = document.querySelector('.btn6')
button6.addEventListener('dblclick', ()=>{
    button6.style.background = "pink"
    
})

let button7 = document.querySelector('.btn7')
button7.addEventListener('contextmenu', ()=>{
    button7.style.background = "orange"
    
})