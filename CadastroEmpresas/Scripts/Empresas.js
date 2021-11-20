function SalvaEmpresa() {
   /* $.ajax({
        type: "POST",
        url: "http://localhost:56574/Pages/Empresas.aspx/CadastraEmpresa",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        
        data: JSON.stringify({
            Codigo: $("#ovTXT-Codigo").val(),
            NomeFantasia: $("#ovTXT-NomeFantasia").val(),
        }),
    */

    /*$.ajax({
        method: "post",
        url: "http://localhost:56574/Pages/Empresas.aspx/CadastraEmpresa",
        data: JSON.stringify({
            Codigo: $("#ovTXT-Codigo").val(),
            NomeFantasia: $("#ovTXT-NomeFantasia").val(),
        }),*/
   // });
 /*   $.ajax({
        type: "GET",
        url: "http://localhost:56574/Pages/Empresas.aspx/CadastraEmpresa",
        success: function (msg) {
            alert(http://localhost:56574/Pages/Empresas.aspx/CadastraEmpresa.NomeFantasia);
        }
    });*/

    $.ajax({
        url: "http://localhost:56574/Pages/Empresas.aspx/CadastraEmpresa",
        dataType: "json",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            
            console.log(data);
        },
        error: function (response) {
            alert("Error");
        },
        failure: function (response) {
            alert("Failure");
        }
    });

    //PageMethods.CadastraEmpresa($("#ovTXT-Codigo").val(), $("#ovTXT-NomeFantasia").val());
}

$(document).ready(function () {
    $(document).on("click", "#btn-SalvarEmpresa", SalvaEmpresa);
});