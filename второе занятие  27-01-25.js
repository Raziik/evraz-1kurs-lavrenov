function addli1() {
    let addElement = document.getElementById('add.1')
    let inputName = document.getElementById('name1')
    let inputKol = document.getElementById('name2')

    if (inputName.value === '') {
        alert('добавить значение')
    } else {
        if (inputKol.value === '') {
            alert('добавить количество')
        }
        else {
            for (let i = 0; i < inputKol; i++) {
                let liElement = document.createElement('li')
                liElement.innerText = inputName.value
                addElement.append(liElement)
            }

            inputName.value = '';
            inputKol.value = '';
        }
    }
}

function addli2() {
    let addElement = document.getElementById('add.2')
    let inputName = document.getElementById('name5')
    let inputKol = document.getElementById('name6')

    if (inputName.value === ''){
        alert('добавить значение')
    }else {
        if (inputKol.value===''){
            alert('добавить значение')
        }
        else{
            for(let b = 0; b < inputKol;b++){
                let liElement
            }
        }
    }

}
