$(function(){
    $("#botao").click(function(){
        let texto_array = $("#texto_array").val();
        texto_array = texto_array.replace(/\s+/g, '');
        let array = texto_array.split(",");
        let tam = array.length;
        if(array[tam-1] == "")
        {
            array.pop();
        }
        $("#resultado").html("<br>Valores duplicados: " + elemento_duplicado(array) + "<br> Valores pares: " + array_par(array) + "<br> Soma dos elementos do array: " + soma(array));
    })
    function elemento_duplicado (vetor){
        let x = vetor.map(function(num)
        {
            return num*2;
        })
        return x;
    }
    function array_par (vetor){
        let x = vetor.filter(function(num)
        {
            return num%2==0;
        })
        if(x == "")
        {
            return "Não há valores pares."
        }
        else
        {
            return x;
        }
    }
    function soma (vetor){
        let x = vetor.reduce(function(soma, num)
        {
            return parseInt(soma) + parseInt(num);
        });
        return x;
    }
})