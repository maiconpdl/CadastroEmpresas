using CadastroEmpresas.Controller.Controladores;
using CadastroEmpresas.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CadastroEmpresas.Pages
{
    public partial class Empresas : System.Web.UI.Page
    {
      
        static List<Empresa> empresas = new List<Empresa>();

        protected void Page_Load(object sender, EventArgs e)
        {
            
                    

        }


        [WebMethod]
        public static List<Empresa> CadastraEmpresa(string Codigo, string NomeFantasia, string Situacao)
        {

            Empresa empresa = new Empresa();
            empresa.Codigo = Codigo;
            empresa.NomeFantasia = NomeFantasia;
            empresa.Situacao = Situacao;
            empresas.Add(empresa);
            

            var listaEmpresas = new EmpresaController();
            listaEmpresas.Serializar(empresas);

            return empresas;
        }

        [WebMethod]
        public static List<Empresa> CarregaEmpresas()
        {
            var listaEmpresas = new EmpresaController();
            List<Empresa> EmpresasSerializadas =
             listaEmpresas.Deserializar();
            empresas = EmpresasSerializadas;
            return empresas;
        }
    }
}