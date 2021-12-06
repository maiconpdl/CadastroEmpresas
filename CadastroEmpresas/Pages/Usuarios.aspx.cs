using CadastroEmpresas.Controller.Controladores;
using CadastroEmpresas.Modelo.Entidades;
using CadastroEmpresas.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CadastroEmpresas.Pages
{
    public partial class Usuarios : System.Web.UI.Page
    {
        static Usuario usuario;
        static List<Usuario> usuarios = new List<Usuario>();

        protected void Page_Load(object sender, EventArgs e)
        {
            ovDiv_Cadastro.InnerHtml = "<h3>Cadastro de Usuários</h3>";
            formCadastro.Attributes["app_url"] = PageUtil.URLInicial;

            if (PageUtil.USUARIO_LOGADO != null)
                Page.Response.Redirect(PageUtil.URLInicial +
                    "/Login.aspx");
        }

        [WebMethod]
        public static List<Usuario> SalvaUsuario(string Nome, string Usuario, string Senha)
        {
            usuario = new Usuario();
            usuario.nome = Nome;
            usuario.Login = Usuario;
            usuario.Senha = Senha;

            usuarios.Add(usuario);

            var listaUsuarios = new UsuariosController();
            listaUsuarios.Serializar(usuarios);

            return usuarios;
        }
    }
}