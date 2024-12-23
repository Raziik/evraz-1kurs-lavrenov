let a = 0;
let result = document.getElementById('res');
let even = document.getElementById('even')
function makeWhite() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'white';
    body.style.color = "black"
}

function makeBlack() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'black';
    body.style.color = "white"
}

function makeGray() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'gray';
    body.style.color = "black"
}

function makeGold() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'gold';
    body.style.color = "black"
}

function makeDarkblue() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'DarkBlue';
    body.style.color = "greenYellow"
}

function plus() {
    a = a + 1
    console.log(a)
    result.innerText = a;
    if (a === 0) {
    } else if (a === 1) {
    }
    else if (a % 2 === 0) {
        console.log('да');
        even.innerText = a ;
    } else {
        console.log('нет');
        even.innerText = a ;

    }
}

function minus() {
    a = a - 1
    console.log(a)
    result.innerText = a;
    if (a === 0) {
    } else if (a === 1) {
    }
    else if (a % 2 === 0) {
        console.log(' да');
        even.innerText = a ;
    } else {
        console.log(' нет');
        even.innerText = a ;
    }
}

function plus2() {
    a = a + 10
    console.log(a)
    result.innerText = a;
    if (a === 0) {
    } else if (a === 1) {
    }
    else if (a % 2 === 0) {
        console.log(' да');
        even.innerText = a ;
    } else {
        console.log('нет');
        even.innerText = a ;
    }
}

function minus2() {
    a = a - 10
    console.log(a)
    result.innerText = a
    if (a === 0) {
    } else if (a === 1) {
    }
    else if (a % 2 === 0) {
        console.log('да');
        even.innerText = a ;
    } else {
        console.log(' нет');
        even.innerText = a ;
    }
}

