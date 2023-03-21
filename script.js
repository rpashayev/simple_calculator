var display = document.querySelector("#display");
var s1, s2, operator, result;

function press(sym) {
    if (display.innerText === '0' || display.innerText == s1){
        display.innerText = '';
    }
    display.innerText += sym;
}

function setOP(op) {
    s1 = parseFloat(display.innerText);
    operator = op;
}

function calculate() {
    s2 = parseFloat(display.innerText);

    if (operator == "+") {
        result = s1 + s2;
    }
    else if (operator == "-") {
        result = s1 - s2;
    }
    else if (operator == "*") {
        result = s1 * s2;
    }
    else if(operator == "/") {
        result = s1 / s2;
        if(result == "NaN") {
            result = "Infinity"
        }

    }
    display.innerText = result;
    s1 = result;
    operator = "";
}

function clr() {
    display.innerText = 0;
    s1 = s2 = operator = "";
}