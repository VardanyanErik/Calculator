//
//
//

let input = document.querySelector('.input');
let power = "";

//Input number
function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}

//Clear input area
function clean() {
    input.textContent = "0";
    power = "";
}

//Clear 
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}

//Equal
function equal() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
}

//Square root, Degree
function operation(name) {
    if (name == "sqrt")
        input.textContent = Math.sqrt(eval(input.textContent));
    if (name == "sqr")
        input.textContent = Math.pow(eval(input.textContent), 2);
    if (name == "^-1")
        input.textContent = Math.pow(eval(input.textContent), -1);
    if (name == "^") {
        power = input.textContent;
        input.textContent += "^";
    }
}