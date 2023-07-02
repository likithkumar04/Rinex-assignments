function convertCapitalCase(){
    let inputTxt = document.getElementById("inputStr").value;
    let capitalCase = inputTxt[0].toUpperCase() + inputTxt.slice(1).toLowerCase();
    document.getElementById("txtResult").innerHTML = `${capitalCase}`;
}

function convertUpperCase(){
    let inputTxt = document.getElementById("inputStr").value;
    let upperCase = inputTxt.toUpperCase();
    document.getElementById("txtResult").innerHTML = `${upperCase}`;
}

function convertLowerCase(){
    let inputTxt = document.getElementById("inputStr").value;
    let lowerCase = inputTxt.toLowerCase();
    document.getElementById("txtResult").innerHTML = `${lowerCase}`;
}