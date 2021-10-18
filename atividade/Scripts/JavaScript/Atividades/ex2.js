function compnum(n1,n2){
	var resultado;
	if(n1>n2){
        resultado=n1 + " é maior que " + n2;
	}
    else if(n2>n1){
        resultado=n2 + " é maior que " + n1;;
    }
    else if(n1==n2){
        resultado=n1 + " é igual a " + n2;;
    }
    return resultado;
}
function exibircomp(){
	var num1 = document.getElementById("pnum").value;
	var num2 = document.getElementById("snum").value;
	num1=parseInt(num1);
    num2=parseInt(num2);
    var resultado= compnum(num1, num2)
;	alert(resultado);
}