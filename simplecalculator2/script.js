function add() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("addResult").innerText = "Result: " + (n1 + n2);
}





function subtract() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("subResult").innerText = "Result: " + (n1 - n2);
}




function multiply() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("mulResult").innerText = "Result: " + (n1 * n2);
}

function divide() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (n2 === 0) {
        document.getElementById("divResult").innerText = "Cannot divide by 0";
        
    } else {
        document.getElementById("divResult").innerText = "Result: " + (n1 / n2);
    }
}
