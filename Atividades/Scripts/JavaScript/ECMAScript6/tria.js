$(function(){
    $("#botao").click(function(){
        let lado1 = $("#l1").val();
        let lado2 = $("#l2").val();
        let lado3 = $("#l3").val();
        if(lado1<=0 || lado2<=0 || lado3<=0)
        {
            $("#resultado").text("Insira valores maiores que zero e não negativos.");
        }
        else
        {
            $("#resultado").text("O " + tria(lado1,lado2,lado3));
        }
    })
    function tria (lado1, lado2, lado3){
        lado1 = parseFloat(lado1);
        lado2 = parseFloat(lado2);
        lado3 = parseFloat(lado3);
        if(cond_existencia_triangulo(lado1, lado2, lado3) == true)
        {
            return classificação_triangulo(lado1, lado2, lado3);
        }
        else
        {
            return "Triângulo não existe.";
        }
    }
    function modulo (valor){
        if(valor < 0)
        {
            valor = valor * (-1);
        }
        return valor;
    }
    function cond_existencia_triangulo (lado1, lado2, lado3){
        if(modulo(lado2-lado3) < lado1 && lado1 < (lado2+lado3) || modulo(lado1-lado3) < lado2 && lado2 < (lado1+lado3) || modulo(lado1-lado2) < lado3 && lado3 < (lado1+lado2))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    function classificação_triangulo (lado1, lado2, lado3){
        if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3)
        {
            return "Triângulo é equilátero.";
        }
        if(lado1 == lado2 && lado1!= lado3 || lado2 == lado3 && lado2 != lado1 || lado3 == lado1 && lado3 != lado2)
        {
            return "Triângulo é Isóceles.";
        }
        if(lado1 != lado2 && lado1 != lado3 && lado3 != lado2)
        {
            return "Triângulo é Escaleno.";
        }
    }
})