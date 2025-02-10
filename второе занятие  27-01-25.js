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

}
let b = name

function addli2() {
    let addElement = document.getElementById('add.2')
    let liElement = document.createElement('li2')
    liElement.innnetText = b
    addElement.append(liElement)
    let input = document.getElementById('name3')
    if (input.value === '') {
        alert('добавить значение')
    } else
        liElement.innerText = input.value

}


