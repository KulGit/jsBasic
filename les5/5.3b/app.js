// 1. получить элемент с классом .wrap и сохранить
// его в переменную
const getObject = document.querySelector('.wrap');

// 2. получить тег span, сохранить в переменную
const closeWindow = document.querySelector('span');

// 3. получить тег button, сохранить в переменную
const buttonEnter = document.querySelector('button');

// 4. на кнопку показа модального окна назначить обработку
// события клика
// 4.1 при клике функция обработчик у элемента с
// классом .wrap должна удалять классы rollOut и hidden,
// элементу с классом .wrap добавить классы animated и rollIn
buttonEnter.addEventListener('click', function() {
    getObject.classList.remove('hidden', 'rollOut')
    getObject.classList.add('animated', 'rollIn')
})


// 5. назначить обработку клика по тегу span
// 5.1 при клике у элемента с классом .wrap удалите
// класс rollIn и добавьте класс rollOut
// 5.2 используя setTimeout через секунду элементу
// .wrap добавьте класс .hidden

closeWindow.addEventListener('click', function() {
    getObject.classList.remove('rollIn');
    getObject.classList.add('rollOut');
    setTimeout(getObject.classList.add('rollOut'),1000);
})


