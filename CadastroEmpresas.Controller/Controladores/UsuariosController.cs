using CadastroEmpresas.Modelo.Entidades;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace CadastroEmpresas.Controller.Controladores
{
    public class UsuariosController
    {
        public void Serializar(object obj)
        {
            string Caminho = @"C:\Teste\Usuarios.dat";
            FileStream fs = new FileStream(Caminho,
                FileMode.Create);
            BinaryFormatter bf = new BinaryFormatter();

            bf.Serialize(fs, obj);
            fs.Close();

        }

        public List<Usuario> Deserializar()
        {

            string Caminho = @"C:\Teste\Usuarios.dat";
            if (!File.Exists(Caminho))
            {
                List<Usuario> user = new List<Usuario>();
                return user;

            }
            FileStream fs = new FileStream(Caminho,
                                           FileMode.Open);

            BinaryFormatter bf = new BinaryFormatter();
            var usuarios = (List<Usuario>)
                bf.Deserialize(fs);
            fs.Close();
            return usuarios;
        }
    }
}