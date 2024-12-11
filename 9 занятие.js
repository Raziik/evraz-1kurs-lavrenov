// текущее значение
let a = 0;

let result = document.getElementById('res');

function makeBlue() {
    a = 2;
    result.innerText = a;
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'blue';
    body.style.color = "white"

}

function makegreen() {
    a = 5;
    result.innerText = a;
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'green';
    body.style.color = "white"
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
    a = a + 1
    console.log(a)
    result.innerText = a;
    let body = document.getElementById('sdf');

    if (a === 0) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else if (a === 1) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else if (a === 5) {
        body.style.backgroundColor = "green"
        body.style.color = "white";
    } else if (a === 2) {
        body.style.backgroundColor = "blue"
        body.style.color = "white"
    } else if (a % 2 === 0) {
        console.log(' четное');
        let body = document.getElementById('sdf');
        body.style.backgroundColor = 'red';
        body.style.color = 'black';
    } else {
        console.log(' нечетное');
        let body = document.getElementById('sdf');
        body.style.backgroundColor = 'gold';
        body.style.color = 'black';
    }
}

function minus() {
    a = a - 1
    console.log(a)
    result.innerText = a;
    let body = document.getElementById('sdf');

    if (a === 0) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else if (a === 1) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else if (a === 5) {
        body.style.backgroundColor = "green"
        body.style.color = "white";
    } else if (a === 2) {
        body.style.backgroundColor = "blue"
        body.style.color = "white"
    } else if (a % 2 === 0) {
        console.log(' четное');
        let body = document.getElementById('sdf');
        body.style.backgroundColor = 'red';
        body.style.color = 'black';
    } else {
        console.log(' нечетное');
        let body = document.getElementById('sdf');
        body.style.backgroundColor = 'gold';
        body.style.color = 'black';
    }
}