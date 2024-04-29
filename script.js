// addition.js

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const ad1 = parseFloat(document.getElementById('ad1').value);
    const ad2 = parseFloat(document.getElementById('ad2').value);
    let ad3 = parseFloat(document.getElementById('ad3').value);
    if (isNaN(ad3)) {
        ad3 = 0;
    }
    const result = ad1 + ad2 + ad3;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Resultat: ' + result;
});
document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const div1 = parseFloat(document.getElementById('div1').value);
    const div2 = parseFloat(document.getElementById('div2').value);
    const result = div1 - div2;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Resultat: ' + result;
});
document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mul1 = parseFloat(document.getElementById('mul1').value);
    const mul2 = parseFloat(document.getElementById('mul2').value);
    let mul3 = parseFloat(document.getElementById('mul3').value);
    if (isNaN(mul3)) {
        mul3 = 0;
    }
    let result;
    if (mul3 === 0) {
        result = mul1 * mul2;
    } else {
        result = mul1 * mul2 * mul3;
    }
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Résultat: ' + result;
});
document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        alert("Division par zéro impossible.");
        return;
    }
    const result = num1 / num2;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Resultat: ' + result;
});
