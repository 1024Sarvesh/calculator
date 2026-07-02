const display = document.getElementById("display")

function append(value) {
    display.value += value

}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}




function calculate() {
 
        let output = display.value;
        let fun = Function("return " + output);
        let result = fun();
        display.value = result;

    
}