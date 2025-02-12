let a = name

function addli1() {
    let addElement = document.getElementById('add.1')
    let liElement = document.createElement('li')
    liElement.innnetText = a
    addElement.append(liElement)
    let input = document.getElementById('name1')
    if (input.value === '') {
        alert('добавить значение')
    } else
        liElement.innerText = input.value

    for (let a=1; a<1000; a++ ) {
        console.log(a)
    }
}
let b = name

function addli2() {
    let addElement = document.getElementById('add.2')
    let liElement = document.createElement('li')
    liElement.innnetText = b
    addElement.append(liElement)
    let input = document.getElementById('name3')
    if (input.value === '') {
        alert('добавить значение')
    } else
        liElement.innerText = input.value
    for (let b= 1; b < 1000; b++ ) {
        console.log(b+1)
    }
}


