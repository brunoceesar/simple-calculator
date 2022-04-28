// function insert(num){
//     let number = document.getElementById('results').innerHTML;
//     document.getElementById('results').innerHTML = num + number;
// }

let listNumbers = document.querySelectorAll('.button');

for (let contador = 0; contador < listNumbers.length; contador++) {
    
    const number = listNumbers[contador];

    number.onclick = function() {
        let insertNum = this.textContent;
        let num = document.getElementById('results').innerHTML;
        document.getElementById('results').innerHTML = num + insertNum;;
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