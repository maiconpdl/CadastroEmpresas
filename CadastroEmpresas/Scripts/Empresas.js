function SalvaEmpresa() {

    var NomeFantasia = $("#ovTXTNomeFantasia").val();
    $.ajax({
        type: "POST",
        url: "http://localhost:56574/Pages/Empresas.aspx/CadastraEmpresa",
        data: "{Codigo: '" + $("#ovTXT-Codigo").val() + "'," 
            + "NomeFantasia: '" + NomeFantasia + "',"
            + "Situacao: '" + $("#ovCB-Situacao").val() + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        

    });

}

$(document).ready(function () {
   // $(document).on("click", "#btn-SalvarEmpresa", SalvaEmpresa);
});