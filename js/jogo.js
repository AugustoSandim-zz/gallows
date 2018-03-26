var criaJogo = function() {

    var etapa = 1;
    var palavraSecreta = '';
    var lacunas = [];

    var criaLacunas = function() {
        lacunas = new Array(palavraSecreta.length).fill('');
    }

    var proximaEtapa = function() {
        ++etapa
    }

    var setPalavraSecreta = function(palavra) {
        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    }

    var getLacunas = function() {
        return lacunas;
    }

    var getEtapa = function() {

        return etapa;
    }


    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa
    }
}