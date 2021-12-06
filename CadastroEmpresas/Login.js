function autenticarUsuario() {
    $.ajax({    
        type: "POST",
        url: "http://localhost:56574/Login.aspx/autenticar",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {                
            if (data.d == "OK") {
                window.location.href = $("#form1").attr("app_url") +
                    "/Pages/Index.aspx";
            }
        },
        failure: function (msg) { alert("Sorry!!! "); },
        data: JSON.stringify({
            usuario: $("#ovTXT_Usuario").val(),
            senha: $("#ovTXT_Senha").val(),
        })
    });
}

function salvaUsuario() {
    
    if (($("#ovTXT_SenhaCadastro").val()) != ($("#ovTXT_ConfirmaSenhaCadastro").val())) {
        alert("Senha e Confirmação não Conferem!")
        return;
    } else {


        $.ajax({
            type: "POST",
            url: "http://localhost:56574/Pages/Usuarios.aspx/SalvaUsuario",
            data: "{Nome: '" + $("#ovTXT_NomeCadastro").val() + "',"
                + "Usuario: '" + $("#ovTXT_UsuarioCadastro").val() + "',"
                + "Senha: '" + $("#ovTXT_SenhaCadastro").val() + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (resposta) {
                
                    if (confirm("Usuário Cadastrado!")) {

                        window.location.href = $("#formCadastro").attr("app_url") +
                            "/Login.aspx";
                    }
                
            },
            error: function (resposta) {
                alert("erro");
            }
        });

    }
}

$(document).ready(function () {
    $(document).on("click", "#ovBTN_Login", autenticarUsuario);
    $(document).on("click", "#ovBTN_Cadastrar", salvaUsuario);
});