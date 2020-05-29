function addition() {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var result = Number(firstNumber) + Number(secondNumber);
    document.getElementById('result').innerText = result;
    document.getElementById('firstNumber').value = '';
    document.getElementById('secondNumber').value = '';
}