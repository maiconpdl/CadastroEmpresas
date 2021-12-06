using CadastroEmpresas.Modelo.Entidades;
using System;
using System.Collections.Generic;

namespace CadastroEmpresas.Controller.Controladores
{
    [Serializable]
    public class ListaDeFiliais : List<Filial>
    {
        public override string ToString()
        {
            var to = "";
            ForEach(o =>
            {
                to = $"{o.IdEmpresa};{o.Codigo};{o.Descricao};{o.Cnpj}";
            });
            return to;
        }
        public override bool Equals(object obj)
        {
            return (obj as ListaDeFiliais).ToString() == ToString();
        }

    }
}