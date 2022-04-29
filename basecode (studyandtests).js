// function insert(num){
//     let number = document.getElementById('results').innerHTML;
//     document.getElementById('results').innerHTML = num + number;
// }

function keysList() {

    let listNumbers = document.querySelectorAll('.button');

    for (let contador = 0; contador < listNumbers.length; contador++) {
        
        const number = listNumbers[contador];

        number.onclick = function() {
            let insertNum = this.textContent;
            let num = document.getElementById('results').innerHTML;
            document.getElementById('results').innerHTML = num + insertNum;;
        }
        
    }
}

// function clearAll(){
//     document.getElementById('results').innerHTML = "";
// }

clearAll = document.querySelector('.clearAll');

clearAll.onclick = function() {
    document.getElementById('results').innerHTML = "";
}

// function erase()
// {
//     let results = document.getElementById('results').innerHTML;
//     document.getElementById('results').innerHTML = results.substring(0, results.length -1);
// }

let operatorKeys = document.querySelectorAll('.operator');

function findOperation() {

    for (let singleOperator = 0; singleOperator < operatorKeys.length; singleOperator++) {

        let operatorKey = operatorKeys [singleOperator];

        operatorKey.addEventListener("click", function() {
            let operation = operatorKey.textContent;
        })
    }
}

let results = document.getElementById('results').innerHTML;

keysList();
let operation = findOperation();

console.log(operation);





erase = document.querySelector('.erase');

erase.onclick = function() {
    let results = document.getElementById('results').innerHTML
    document.getElementById('results').innerHTML = results.substring(0, results.length -1);
}

let calculate = document.querySelector('.calculate');

calculate.onclick = function() {
    
    let result = document.getElementById('results').innerHTML;

    if(result) {
        document.getElementById('results').innerHTML = eval(result);
    }
}