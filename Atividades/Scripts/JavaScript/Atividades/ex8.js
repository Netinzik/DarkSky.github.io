function ret(){
    var temperatura=document.getElementById("entrada").value;
    temperatura=parseFloat(temperatura);
    var resultado=CF(temperatura);
    alert(temperatura + "°C é " + resultado + "°F");
}
function CF(temperatura){
    var resultado=((9*temperatura)/5)+32;
    return resultado;
}