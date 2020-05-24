let button = document.querySelector('.button');
button.addEventListener('click', hideText);
function hideText() {
    let text = document.querySelector('.text');
    text.hidden = true;
    button.removeEventListener('click', hideText);
    button.addEventListener('click', showText);
}
function showText() {
    let text = document.querySelector('.text');
    text.hidden = false;
    let button = document.querySelector('.button');
    button.removeEventListener('click', showText);
    button.addEventListener('click', hideText);
}
/*function buttonClick() {
    let text = getInputText();
    addElementToList(text);
    clearInput();
}

function getInputText() {
    let input = document.querySelector('.text__field');
    return input.value;
}
function addElementToList(text) {
    let listItem = document.createElement('li');
    listItem.innerText = text;
    let list = document.querySelector('.list');
    list.append(listItem);
}
function clearInput() {
    let input = document.querySelector('.text__field');
    input.value = '';
}*/
/*
let input = prompt('Введите сообщение');

let messageEl = document.createElement('p');

messageEl.innerText = input;

let messageBox = document.querySelector('.messages');

messageBox.append(messageEl);

setTimeout(removeMessage, 2000 );

function hideMessage() {
    messageEl.hidden = true;
}
function removeMessage() {
    messageEl.remove();
}*/
