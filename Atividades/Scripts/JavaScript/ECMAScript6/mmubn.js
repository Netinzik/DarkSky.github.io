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
        $("#resultado").html("<br>Valor minimo: " + minimo(array) + "<br> Valor máximo: " + maximo(array) + "<br> Array sem repetição: " + sem_repetir(array) + "<br> Array em ordem: " + ordem_crescente(array));
    })
    function minimo (vetor){
        let min;
        vetor.forEach( function(num)
        {
            if(num == Math.min(...vetor))
            {
                min = num;
            }            
        });
        return min;
    }
    function maximo (vetor){
        let max;
        vetor.forEach( function(num)
        {
            if(num == Math.max(...vetor))
            {
                max = num;
            }            
        });
        return max;
    }
    function sem_repetir (vetor){
        let vetor_sem_repeticao = [...new Set(vetor)];
        return vetor_sem_repeticao.join(",");
    }
    function ordem_crescente (vetor){
        return vetor.sort().join(",");
    }
})