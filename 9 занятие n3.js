function find() {
    console.log("найти наибольшое число или числа")
    let input = document.getElementById("input")
    if (+input.value % 2 === 0) {
        console.log('число четное');
    }
    else {
        console.log('');
    }

}