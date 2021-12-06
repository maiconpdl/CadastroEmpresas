using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace CadastroEmpresas.Modelo.Entidades
{
    [Serializable]
    public class Empresa
    {
        public string Codigo { get; set; }
        public string NomeFantasia { get; set; }
        public string Data { get; set; }
        public string RazaoSocial { get; set; }
        public string Situacao { get; set; }
        public string Cooperativa { get; set; }
        public string QtdFuncionarios { get; set; }
        public string Faturamento { get; set; }
        public string CapitalSocial { get; set; }
        public string InscricaoEstadual { get; set; }
        public string Cidade { get; set; }
        public string Cep { get; set; }
        public string Bairro { get; set; }
        public string Endereco { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public string Descricao { get;set; }
        public string Cnpj { get; set; }
        public List<Filial> Filiais { get; set; }

        public Empresa()
        {

        }
        
    }
}