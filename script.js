// addition.js

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const ad1 = parseFloat(document.getElementById('ad1').value);
    const ad2 = parseFloat(document.getElementById('ad2').value);
    let ad3 = parseFloat(document.getElementById('ad3').value);

    // Vérifier si le troisième champ est vide ou non
    if (isNaN(ad3)) {
        ad3 = 0;
    }

    // Calculer le résultat
    const result = ad1 + ad2 + ad3;

    // Afficher le résultat dans la zone de résultat
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Resultat: ' + result;
});

// subtraction.js

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const div1 = parseFloat(document.getElementById('div1').value);
    const div2 = parseFloat(document.getElementById('div2').value);

    // Calculer le résultat
    const result = div1 - div2;

    // Afficher le résultat dans la zone de résultat
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Resultat: ' + result;
});
// multiplication.js

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mul1 = parseFloat(document.getElementById('mul1').value);
    const mul2 = parseFloat(document.getElementById('mul2').value);

    // Calculer le résultat
    const result = mul1 * mul2;

    // Afficher le résultat dans la zone de résultat
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Resultat: ' + result;
});
// division.js

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Vérifier si le diviseur est égal à zéro
    if (num2 === 0) {
        alert("Division par zéro impossible.");
        return;
    }

    // Calculer le résultat
    const result = num1 / num2;

    // Afficher le résultat dans la zone de résultat
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Resultat: ' + result;
});
