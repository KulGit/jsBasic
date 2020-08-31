'use strict';

const buttonEnter = document.querySelectorAll('button');

buttonEnter.forEach(function(button) {
    button.addEventListener('click', function(event){
        pressClick(event);
    });
});

function pressClick (clickedEvent) {
    const chooseProduct = clickedEvent.target.parentNode;
 
    const objectProduct = {
        product:chooseProduct,
        productName:chooseProduct.querySelector('.productName'),
        img:chooseProduct.querySelector('img'),
        button:chooseProduct.querySelector('button'),
    };

    const textOnButton = objectProduct.button.innerText;
    if (textOnButton === 'Подробнее') {
        ShowTextButton(objectProduct);
    }
    else if (textOnButton === 'Отмена') {
        HideTextButton(objectProduct);
    };
}

function ShowTextButton(objectProduct) {
    objectProduct.img.style.display = 'none';
    const text = 'lorem252525252';
    objectProduct.productName.insertAdjacentHTML('afterend',`<div class="desc">${text}</div>`);
    objectProduct.button.innerText = 'Отмена';
}

function HideTextButton (objectProduct) {
    objectProduct.img.style.display = 'block';
    objectProduct.button.innerText = 'Подробнее';
    objectProduct.product.querySelector('.desc').remove();
}



