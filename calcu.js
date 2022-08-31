document.getElementById("operation").addEventListener("click", calc);
        
function calc() {
    a = Number(document.getElementById("number1").value);
    b = Number(document.getElementById("number2").value);

    opr = document.getElementById("operator").value;

    if (opr == "plus") text = a + b;
    else if (opr == "minus") text = a - b;
    else if (opr == "multiply") text = a * b;
    else text = a / b;

    document.getElementById("result").innerHTML = "답: " + text;
}
