function soma(n1,n2){
	var x = parseInt(n1);
	var y = parseInt(n2);
	return x+y;
}
function exibirsoma(){
	var num1 = document.getElementById("pnum").value;
	var num2 = document.getElementById("snum").value;
	var resultado= soma(num1,num2);
	alert("A some entre "+num1+" e "+num2+" é "+resultado);
}