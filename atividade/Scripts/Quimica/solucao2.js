$(function(){
    $("#botao").click(function(){
        let solucao = $("#solucao").val();
        let soluto = $("#soluto").val();
        suluto = parseFloat(soluto);
        solucao = parseFloat(solucao);
        let transforma_grama_em_mol = soluto/53.5;
        let concentracao_molar = transforma_grama_em_mol/solucao;
        let transforma_mol_em_grama_result = soluto*53.5;
        transforma_grama_em_mol = transforma_grama_em_mol.toFixed(3);
        concentracao_molar = concentracao_molar.toFixed(3);
        transforma_mol_em_grama_result = transforma_mol_em_grama_result.toFixed(3);
        $("#resultado").html(soluto + "g = " + transforma_grama_em_mol + "mol <br> C = " + transforma_grama_em_mol + "/" + solucao + "<br><b>C = " + concentracao_molar + "mol/L ou " + transforma_mol_em_grama_result + "g/L<b>");
    })
    $("#limpar").click(function(){
        $("#solucao").val("");
        $("#soluto").val("");
        $("#resultado").text("");
    })
})