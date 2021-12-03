using CadastroEmpresas.Controller.Controladores;
using CadastroEmpresas.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.IO;
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
        static List<Empresa> empresas2 = new List<Empresa>();
        static List<Filial> filiais = new List<Filial>();
        static List<Filial> filiais2 = new List<Filial>();

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

        [WebMethod]
        public static void RemoveEmpresa(string CodigoEmpresa)
        {

            string Caminho = @"C:\Teste\Empresas.dat";
            var listaEmpresas = new EmpresaController();
            List<Empresa> EmpresasSerializadas =
             listaEmpresas.Deserializar();
            empresas = EmpresasSerializadas;
            File.Delete(Caminho);
            foreach(Empresa emp in empresas)
            {
                if(emp.Codigo != CodigoEmpresa)
                {
                    empresas2.Add(emp);
                    var listaEmpresasEditadas = new EmpresaController();
                    listaEmpresasEditadas.Serializar(empresas2);
                }
            }

            empresas = empresas2;
            empresas2.Clear();
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

        [WebMethod]
        public static void RemoveFilial(string CodigoEmpresa, string CodigoFilial)
        {

            string Caminho = @"C:\Teste\Filiais.dat";
            var listaFiliais = new FilialController();
            List<Filial> FiliaisSerializadas =
             listaFiliais.Deserializar();
            filiais = FiliaisSerializadas;
            File.Delete(Caminho);
            foreach (Filial fil in filiais)
            {
                if ((fil.Codigo != CodigoFilial)&&(fil.IdEmpresa == CodigoEmpresa))
                {
                    filiais2.Add(fil);
                    var listaFiliaisRestantes = new FilialController();
                    listaFiliaisRestantes.Serializar(filiais2);
                }
            }

            filiais = filiais2;
            filiais2.Clear();
        }


    }
}