using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CadastroEmpresas.Modelo.Entidades
{
    public class Usuario
    {
        public string Login { get; set; }
        public string Senha { get; set; }
        public Usuario(string Login, string Senha)
        {
            this.Login = Login;
            this.Senha = Senha;
        }
    }
}