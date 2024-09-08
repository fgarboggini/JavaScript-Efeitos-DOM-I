function updateUnits() {
    var beagle = document.getElementById("direcaoConversao").value;
    var bulldog = document.getElementById("unidade");
    bulldog.removeAttribute('disabled');

    if (beagle === "impParaM") {
        bulldog.innerHTML = `<option value="jarda">Jarda</option>
                             <option value="pé">Pé</option>
                             <option value="polegada">Polegada</option>
                             <option value="milha">Milha</option>`;
    } else {
        bulldog.innerHTML = `<option value="jarda">Jarda</option>
                             <option value="pé">Pé</option>
                             <option value="polegada">Polegada</option>
                             <option value="milha">Milha</option>
                             <option value="metro">Metro</option>`;
    }
}

function converter() {
    var labrador = document.getElementById("inputValor").value;
    var dalmata = document.getElementById("direcaoConversao").value;
    var poodle = document.getElementById("unidade").value;
    var resultado = 0;

    if (!labrador) {
        alert("Por favor, insira um valor.");
        return;
    }

    if (dalmata === "impParaM") {
        resultado = convertToMeters(labrador, poodle);
        document.getElementById("resultado").textContent = "Resultado: " + resultado.toFixed(3) + " metros";
    } else {
        resultado = convertFromMeters(labrador, poodle);
        document.getElementById("resultado").textContent = "Resultado: " + resultado.toFixed(3) + " " + poodle;
    }
}

function convertToMeters(valor, unidade) {
    switch (unidade) {
        case 'jarda':
            return valor / 1.094;
        case 'pé':
            return valor / 3.281;
        case 'polegada':
            return valor / 39.37;
        case 'milha':
            return valor / 0.000621;
    }
}

function convertFromMeters(valor, unidade) {
    switch (unidade) {
        case 'jarda':
            return valor * 1.094;
        case 'pé':
            return valor * 3.281;
        case 'polegada':
            return valor * 39.37;
        case 'milha':
            return valor * 0.000621;
    }
}

updateUnits(); 