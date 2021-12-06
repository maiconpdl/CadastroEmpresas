<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Usuarios.aspx.cs" Inherits="CadastroEmpresas.Pages.Usuarios" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Painel de Login</title>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <link href="../Scripts/fontawesome-free-5.15.4-web/css/all.css" rel="stylesheet" />
    <link href="../Scripts/bootstrap.min.css" rel="stylesheet" />
    <link href="../Scripts/style.css" rel="stylesheet" />
    <script src="../Scripts/jquery-3.6.0.min.js"></script>
    <script src="../Scripts/bootstrap.bundle.min.js"></script>
    <script src="../Login.js"></script>

</head>
<body>
    <form id="formCadastro" runat="server">
        <div id="container-login"
            class="container">
            <div id="ovDiv_Cadastro" runat="server"></div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <label>Nome Completo:</label>
                        <input type="text"
                            class="form-control"
                            id="ovTXT_NomeCadastro" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <label>Usuário:</label>
                        <input type="text"
                            class="form-control"
                            id="ovTXT_UsuarioCadastro" />
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <label>Senha:</label>
                        <input type="password"
                            class="form-control"
                            id="ovTXT_SenhaCadastro" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <label>Confirma Senha:</label>
                        <input type="password"
                            class="form-control"
                            id="ovTXT_ConfirmaSenhaCadastro" />
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                   
                    <div class="col-md-12 pull-right">
                        <button type="button"
                            id="ovBTN_Cadastrar"
                            class="btn btn-success">
                            <i class="fa fa-check"></i>
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
