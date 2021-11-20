using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace CadastroEmpresas.Modelo.Entidades
{
    public class Empresa
    {
        public string Codigo { get; set; }
        public string NomeFantasia { get; set; }
        public string Data { get; set; }
        public string RazaoSocial { get; set; }
        public bool Situacao { get; set; }
        public bool Cooperativa { get; set; }
        public decimal QtdFuncionarios { get; set; }
        public decimal Faturamento { get; set; }
        public decimal CapitalSocial { get; set; }
        public string InscricaoEstadual { get; set; }
        public string Cidade { get; set; }
        public string Cep { get; set; }
        public string Bairro { get; set; }
        public string Endereco { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public string Descricao { get;set; }
        public string Cnpj { get; set; }
        //public string Filiais { get; set; }

        public Empresa()
        {

        }
        [WebMethod]
        public static string CadastraEmpresa(string NomeFantasia)
        {
            NomeFantasia = "Univel";
            return NomeFantasia;
        }
    }
}