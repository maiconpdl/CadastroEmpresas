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
        static Empresa empresa;
        static Filial filial;
        static List<Empresa> empresas = new List<Empresa>();
        static List<Filial> filiais = new List<Filial>();

        protected void Page_Load(object sender, EventArgs e)
        {



        }


        [WebMethod]
        public static List<Empresa> CadastraEmpresa(string Codigo,
                                                    string NomeFantasia,
                                                    string DataFundacao,
                                                    string RazaoSocial,
                                                    string Situacao,
                                                    string Cooperativa,
                                                    string QtdFuncionarios,
                                                    string Faturamento,
                                                    string CapitalSocial,
                                                    string InscricaoEstadual,
                                                    string Cidade,
                                                    string Cep,
                                                    string Bairro,
                                                    string Endereco,
                                                    string Email,
                                                    string Telefone,
                                                    string Descricao,
                                                    string Cnpj)
        {

            empresa = new Empresa();
            empresa.Codigo = Codigo;
            empresa.NomeFantasia = NomeFantasia;
            empresa.Cnpj = Cnpj;
            empresa.Situacao = Situacao;
            try
            {
                empresa.Filiais.Add(filial);

            }
            catch
            {

            }

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


        public static bool validaCadastroEmpresa()
        {
            
            return false;
        }



        [WebMethod]
        public static List<Filial> CadastraFilial(string IdEmpresa,
                                                  string Codigo,
                                                  string Descricao,
                                                  string Sigla,
                                                  string Cnpj,
                                                  string InscricaoEstadual,
                                                  string CentroDistribuicao,
                                                  string Situacao,
                                                  string Endereco,
                                                  string Bairro,
                                                  string Cidade,
                                                  string Cep,
                                                  string Telefone,
                                                  string Email
                                                  )
        {

            filial = new Filial();
            filial.IdEmpresa = IdEmpresa;
            filial.Codigo = Codigo;
            filial.Descricao = Descricao;
            filial.Sigla = Sigla;
            filial.Cnpj = Cnpj;
            filial.InscricaoEstadual = InscricaoEstadual;
            filial.CentroDistribuicao = CentroDistribuicao;
            filial.Situacao = Situacao;
            filial.Endereco = Endereco;
            filial.Bairro = Bairro;
            filial.Cidade = Cidade;
            filial.Cep = Cep;
            filial.Telefone = Telefone;
            filial.Email = Email;
            filiais.Add(filial);


            var listaFiliais = new FilialController();
            listaFiliais.Serializar(filiais);

            return filiais;
        }

        [WebMethod]
        public static List<Filial> CarregaFiliais()
        {
            var listaFiliais = new FilialController();
            List<Filial> FiliaisSerializadas =
             listaFiliais.Deserializar();
            filiais = FiliaisSerializadas;
            return filiais;
        }
    }
}