function resul(n1, n2){
	var hipotenusa=Math.sqrt((n1+n2));
    return hipotenusa;
}
function hip(){
	var num1 = document.getElementById("pnum").value;
	var num2 = document.getElementById("snum").value;
	num1=parseFloat(num1);
    num2=parseFloat(num2);
    num1=Math.pow(num1,2);
    num2=Math.pow(num2,2);
	var resultado = resul(num1, num2);
	alert("O valor da hipotenusa é " + resultado);
}