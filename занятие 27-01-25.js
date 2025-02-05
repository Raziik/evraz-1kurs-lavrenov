
// function addli(){
//     let addElement=document.getElementById('add')
//
// let liElement=document.createElement('li')
// liElement.innerText = i
//     addElement.append(liElement)
//     i =i + 1
// }
let i = name

function addli() {
    let addElement = document.getElementById('add')
    let liElement = document.createElement('li')
    liElement.innnetText = i
    addElement.append(liElement)
    let input = document.getElementById('name')
    if (input.value === '') {
        alert('добавить значение')
    } else
        liElement.innerText = input.value

}
let b = name

function addlI() {
    let addElement = document.getElementById('add.2')
    let liElement = document.createElement('lI')
    liElement.innnetText = b
    addElement.append(liElement)
    let input = document.getElementById('name.2')
    if (input.value === '') {
        alert('добавить значение')
    } else
        liElement.innerText = input.value

}