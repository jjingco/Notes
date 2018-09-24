// var sentence='2+2'

// function timesbytwo(numbers) {
//     return number * 2
// }

// function add(number1, number2, timesbytwo) {
//     return number1 + timesbytwo(number2)
// } 
// // expessions --> lines eg "sentence + 3"  = sentence3, java concatenates into string


// // -------------------------------------------
// // change text
// // -----------------------------------------------------

// function capitalize(text) {
//     return text.toUpperCase()
// }


// function changeText(text, changeFunction) {
//     return changeFunction (text)
// }

// var result = changeText('hello', capitalize)


// // ---------------------------------------------
// // objects --> eg dog is the object
// // --------------------------------------------------------

// var dog = {
//     legs: 4,
//     ears: 2,
//     bark: function() {
//         console.log('woof')
//     }
// }

// console.log('the dogs number of legs is', dog.legs)
// noJS has access to files because it's wrapped around a C wrapper
// versus JS which has only access to DOM --> accessing a different enviorment



// --------------------------------------------------------
// ***********   MOBILE MENU  *****************************
// --------------------------------


// window --> if called in browser console it would give you facts about what you're working with

// document.write('hi')
// // document.body.bgColor = 'blue'
//     // bgColor is the property --> it's a background color
// // document.location.reload()

// // in java id's are extremely useful because you can only reference one id

// var title = document.querySelector('#main-title')
    // .something means you're excecuting in that variable, if no brakets then you're just naming a variable

// title.innerHTML = 'new text'

// var button = document.querySelector('#button')
// function click () {
//     console.log('clicked')
// }
// button.addEventListener('click',click )

// document.querySelector('#button')
//         .addEventListener('click',function() {
//             console.log('clicked')
//         })
        // does the same as above--> just more embedded aka "method chaining"
        // querySelector will execute first then addEventListener executes on top of it

// scrimba --> free learning tools 

// excercise: create button that changes background to blue

// document.querySelector('#color')
//     .addEventListener('click', function () {
//         document.body.bgColor = 'blue'
//         })


//         // or teacher's solution:

// var color = document.querySelector('#color')
// function click () {
//     console.log('clicked')
// }
// color.addEventListener('click',click)




// MOBILE MENU:
// **************************************************
// 1. Get HTML elements
// ************************************************

// function getElement (el) {
//     return document.querySelector(el)
// }

// var color = getElement('#color')
// var menu =  getElement('#menu')
// var closeButton =  getElement('#close-button')

    // or do this for each one:

var color = document.querySelector('#color')
var menu = document.querySelector('#menu')
var closeButton = document.querySelector('#close-button')

// **************************************************
// 2. Define action
// ************************************************

function openMenu () {
    menu.className = 'menu'
}

function closeMenu () {
    menu.className = 'menu closed'
}


// **************************************************
// 3. Wire it all up
// ************************************************

// function addClick(el,action) {
//     return el.addEventListener ('click', action)
// }

// addClick (color, openMenu)

    // or staying with consistency:


color.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)
