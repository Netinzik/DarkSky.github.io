function resul(n1, n2){
	var r=n1*(n2/100);
    var resultado=n1+r;
    return resultado;
}
function ret(){
	var salario=document.getElementById("pnum").value;
    var reajuste=document.getElementById("snum").value;
    salario=parseFloat(salario);
    reajuste=parseFloat(reajuste);
    var resultado=resul(salario,reajuste);
    alert("O seu novo salário é " + resultado);
}