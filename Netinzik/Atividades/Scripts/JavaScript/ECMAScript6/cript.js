$(function(){
    $("#botao").click(function(){
        let letras = $("#letras").val();
        let rotacoes = $("#rotacoes").val();
        rotacoes = parseInt(rotacoes);
        $("#resultado").text(criptografia(letras,rotacoes));
    })
    function criptografia (letras, rotacoes){
        let array_letras = letras.split(''); 
        let array_alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        let tam_letras = array_letras.length;
        let tam_alfabeto = array_alfabeto.length;
        let i = 0;
       	let x = 0;
       	let a;
       	let aux;
        while(x<tam_letras)
       	{
       		aux = array_letras[x];
       		while(i<tam_alfabeto)
       		{
       			if(array_alfabeto[i] == aux)
       			{
       				if((i+rotacoes)>tam_alfabeto)
       				{
       					a = i + rotacoes - tam_alfabeto;
       					array_letras[x] = array_alfabeto[a];
       				}
       				else if((i+rotacoes) == tam_alfabeto)
       				{
       					array_letras[x] = array_alfabeto[0];
       				}
       				else{
       					array_letras[x] = array_alfabeto[i+rotacoes];
       				}
       			}
       			i++;
       		}
       		i = 0;
       		x++;
       	}	
       	let string = array_letras.join('');
        return string;
    }
})