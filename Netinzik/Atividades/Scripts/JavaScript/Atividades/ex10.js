function ret(){
    var qt=document.getElementById("entrada").value;
    qt=parseInt(qt);
    var resultado=maca(quantidade);
    alert("O preço total é " + resultado + " reais");
}
function maca(qt){
    var preco;
    if(qt<12)
        preco=1.30*qt;
    else
        preco=1.00*qt;
    return preco;
}