// let i=5
// function addli(){
//     let addElement=document.getElementById('add')
//
// let liElement=document.createElement('li')
// liElement.innerText = i
//     addElement.append(liElement)
//     i =i + 1
// }
let i =name
function addli() {
    let addElement=document.getElementById('add')
    let liElement=document.createElement('li')
    liElement.innnetText = i
    addElement.append(liElement)
    let input=document.getElementById('name')
    if (input.value===''){
        alert('добавить значение')
    }
    else{ liElement.innerText=input.value
    }
}