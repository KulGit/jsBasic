"use strict";

    // ЗАДАНИЕ 5.3
    
    let buttonEnter = document.querySelectorAll('.but');
    let modalWin = document.getElementsByClassName('.modal__window');

    
    // function showModal() {
    //     modalWin.style.display='block';

    // }

    buttonEnter.addEventListener('click', function(){
        modalWin.style.display='block';
    });

