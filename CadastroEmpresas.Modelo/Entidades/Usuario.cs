using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CadastroEmpresas.Modelo.Entidades
{
    [Serializable]
    public class Usuario
    {
        public string nome { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
        public Usuario()
        {
           
        }
    }
}