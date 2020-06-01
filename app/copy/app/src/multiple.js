function multiple() {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    if (firstNumber && secondNumber) {
        var result = Number(firstNumber) * Number(secondNumber);
        document.getElementById('result').innerText = result;
        clearInputFields();
    }
}