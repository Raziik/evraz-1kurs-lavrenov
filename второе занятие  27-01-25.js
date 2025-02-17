let a = 1

function addli1() {
    let addElement = document.getElementById('add.1')
    let liElement = document.createElement('li')
    liElement.innnetText = a
    addElement.append(liElement)
    a=a+1
    let input = document.getElementById('name1')
    if (input.value === '') {
        alert('добавить значение')
    } else
        liElement.innerText = input.value
}

for (let a= 0; a < 25; a++ ) {
    console.log(a+1,'')
}

let b = 1

function addli2() {
    let addElement = document.getElementById('add.2')
    let liElement = document.createElement('li')
    liElement.innnetText = b
    addElement.append(liElement)
    b=b+1
    let input = document.getElementById('name3')
    if (input.value === '') {
        alert('добавить значение')
    } else
        liElement.innerText = input.value

}
for (let b= 0; b < 25; b++ ) {
    console.log(b+1,'')
}
