let change2 = prompt ("укажите ваше имя")
let change2DOM = document.getElementById('change2');
change2DOM.innerText = change2;
console.log(change2)

function clearDIV() {
    let div = document.getElementById("clear");
    console.log("изменить текст div ниже")
    div.innerText = "";
