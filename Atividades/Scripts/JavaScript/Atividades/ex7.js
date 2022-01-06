function retorno()
{
    var numero_carros=document.getElementById("pnum").value;
    var total_vendas=document.getElementById("snum").value;
    var salario_fixo=document.getElementById("tnum").value;
    var valor_por_carro=document.getElementById("qnum").value;
    numero_carros=parseInt(numero_carros);
    total_vendas=parseFloat(total_vendas);
    salario_fixo=parseFloat(salario_fixo);
    valor_por_carro=parseFloat(valor_por_carro);
    var resultado=calcula_salario(numero_carros,total_vendas,salario_fixo,valor_por_carro);
    alert("O salário final é " + resultado);
}

function calcula_salario(numero_carros,total_vendas,salario_fixo,valor_por_carro)
{
    var soma1=valor_por_carro*numero_carros;
    var soma2=(total_vendas*0.05);
    var salario_final=salario_fixo+soma1+soma2;
    return salario_final;
}