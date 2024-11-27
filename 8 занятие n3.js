function change() {
    let textDiv = prompt ("изменить текст дива ниже")
    let change2DOM = document.getElementById('textDiv');
    change2DOM.innerText =textDiv ;
    console.log(textDiv)
}