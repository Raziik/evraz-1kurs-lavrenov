

function makepurple() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'purple';
}
function makeyellow() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'yellow';
}
function makegreen() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'green';
}

let change = prompt ("изменить текст div ниже")
let changeDOM = document.getElementById('change');
changeDOM.innerText = change;
console.log(change)
{
function () {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = '';
}


function clearDiv() {
    console.log('очистить всё');
    let div = document.getElementById('clear');
    div.innerText = 'clear';