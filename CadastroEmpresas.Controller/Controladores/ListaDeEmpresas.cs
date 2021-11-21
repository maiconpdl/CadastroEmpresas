using CadastroEmpresas.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CadastroEmpresas.Controller.Controladores
{
    [Serializable]
    public class ListaDeEmpresas : List<Empresa>
    {
        public override string ToString()
        {
            var to = "";
            ForEach(o =>
            {
                to = $"{o.Codigo};{o.NomeFantasia};{o.Situacao}";
            });
            return to;
        }
        public override bool Equals(object obj)
        {
            return (obj as ListaDeEmpresas).ToString() == ToString();
        }

        public void adicionaEmpresa(string Codigo, string NomeFantasia, string Situacao)
        {

        }
    }
}