function ctof(){
    let fahrenheit = (document.getElementById('ctf').value*(9/5))+32;
    document.getElementById('ctofout').innerHTML= fahrenheit;
}

function ftoc(){
    let celsius = (document.getElementById('ftc').value-32)*(5/9);
    document.getElementById('ftocout').innerHTML = celsius;
}