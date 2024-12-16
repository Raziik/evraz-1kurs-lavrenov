let result = document.getElementById('res');
function check() {
    console.log("проверить число")
    let input  = document.getElementById("input")

    if (+input.value % 2 === 0) {
        console.log('число четное');
    }
    else {
        console.log('число нечетное');
    }

}