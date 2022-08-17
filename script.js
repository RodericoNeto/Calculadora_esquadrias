function Calcular() {

    // PEGAR OS INPUTS
    let areaAmb = document.getElementById("areaAmbiente").value;
    let largEsq = document.getElementById("largura").value;
    let altEsq = document.getElementById("altura").value;
    let razao = document.getElementById("razao").value;

    let areaEsq = largEsq * altEsq;
    let areaDesejada = areaAmb / razao;

    if (areaAmb == false || largEsq == false || altEsq == false || razao == false) {
        alert("Preencha todos os campos para continuar!")
    } else {
        if (areaEsq >= areaDesejada) {
            document.getElementById("result").innerHTML = "<h2>Oba! A esquadria está adequada ao ambiente!</h2>";
        } else {
            let largNecessaria = areaDesejada / altEsq;
            let altNecessaria = areaDesejada / largEsq;
            document.getElementById("result").innerHTML = `<h2>Poxa, a esquadria NÃO está adequada ao ambiente.</h2>
            <h4>(Você poderia alterar a <strong>Largura para ${largNecessaria.toFixed(2)}m</strong>, ou a <strong>Altura para ${altNecessaria.toFixed(2)}m</strong>!)</h4>`;
        }
    }



}