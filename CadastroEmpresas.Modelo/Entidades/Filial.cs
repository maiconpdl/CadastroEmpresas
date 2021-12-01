using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CadastroEmpresas.Modelo.Entidades
{
    [Serializable]
    public class Filial
    {
        public string IdEmpresa { get; set; }
        public string Codigo { get; set; }
        public string Descricao { get; set; }
        public string Sigla { get; set; }
        public string Cnpj { get; set; }
        public string InscricaoEstadual { get; set; }
        public string Situacao { get; set; }
        public string Cidade { get; set; }
        public string Cep { get; set; }
        public string Bairro { get; set; }
        public string CentroDistribuicao { get; set; }
        public string Endereco { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }

        public Filial()
        {

        }

    }
}



