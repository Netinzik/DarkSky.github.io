function ret(){
    var cf=document.getElementById("entrada").value;
    cf=parseFloat(cf);
    var resultado=calcula_preco(cf);
    alert("O preço final do carro é " + resultado);
}
function calcula_preco(cf){
    var r=cf*(0.73);
    var resultado=cf+r;
    return resultado;
}