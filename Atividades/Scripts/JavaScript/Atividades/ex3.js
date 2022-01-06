function PRIM(n1){
	var x = parseInt(n1), sup = 0;
	for(var i = 2; i < x/2; i++){
		if(x%i == 0){
			sup++;
			break;
		}
	}
	if(sup == 0){
		return "é primo";
	}else return "não é primo";
}
function primo(){
	var num1 = document.getElementById("pnum").value;
	var resultado = PRIM(num1);
	alert("Seu número "+resultado);
}