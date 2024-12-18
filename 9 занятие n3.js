let result = document.getElementById('res');
function find() {
    console.log("найти наибольшое число или числа")
    let input = document.getElementById("input")

    if (+input.value % 2===0){
        console.log('первое число больше второго');
    }
      else if (+input.value) {
        console.log('второе число больше первого');
    }
        else  {
            console.log('превое число равно второму')
    }




}