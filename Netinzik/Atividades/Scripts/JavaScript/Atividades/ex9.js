function retorno()
{
    var n1=document.getElementById("pnum").value;
    var n2=document.getElementById("snum").value;
    var n3=document.getElementById("tnum").value;
    n1=parseFloat(n1);
    n2=parseFloat(n2);
    n3=parseFloat(n3);
    var resultado=media(n1,n2,n3);
    alert("A média final do aluno é " + resultado);
}

function media(n1,n2,n3)
{
    var media_final=((n1*2)+(n2*3)+(n3*5))/10;
    return media_final;
}