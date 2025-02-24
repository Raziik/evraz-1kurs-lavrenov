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
            for (let i = 0; i < inputKol.value; i++) {
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
    let inputname = document.getElementById('name5')
    let inputkol = document.getElementById('name6')

    if (inputname.value === '') {
        alert('добавить значение')
    } else {
        if (inputkol.value === '') {
            alert('добавить количество')
        }
        else {
            for (let a = 0; a < inputkol.value; a++) {
                let liElement = document.createElement('li')
                liElement.innerText = inputname.value
                addElement.append(liElement)
            }

            inputname.value = '';
            inputkol.value = '';
        }
    }
}

