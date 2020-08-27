'use strict';

const buttonEnter = document.querySelectorAll('button');
let i = 0;

buttonEnter.forEach(function(button) {
    this.addEventListener('click', function(){
        this.classList.add('color__button')
    })
});


// buttonEnter.addEventListener('click', function() {
//     getObject.classList.remove('hidden', 'rollOut')
//     getObject.classList.add('animated', 'rollIn')
// })



// closeWindow.addEventListener('click', function() {
//     getObject.classList.remove('rollIn');
//     getObject.classList.add('rollOut');
//     setTimeout(getObject.classList.add('rollOut'),1000);
// })