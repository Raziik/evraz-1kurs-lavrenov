// текущее значение
let a = 0;

let result = document.getElementById('res');

function makeBlue() {
    a = 2;
    result.innerText = a;
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'blue';
}

function makegreen() {
    a = 5;
    result.innerText = a;
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'green';
}

function makeBlack() {
    a = 0;
    result.innerText = a;
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
}

function makeWhite() {
    a = 1;
    result.innerText = a;
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
}

function plus() {
    a = a+1
    console.log(a)
}

function minus() {
    a = a-1
    console.log(a)
}
if (a % 25=== 0) {
    console.log('число четное');
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'red';
    body.style.color = 'black';
}
else {
    console.log('число нечетное');
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'gold';
    body.style.color = 'black';
}
