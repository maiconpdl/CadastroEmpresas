using CadastroEmpresas.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Web;

namespace CadastroEmpresas.Controller.Controladores
{
    public class EmpresaController
    {


        public void Serializar(object obj)
        {
            string Caminho = @"C:\Teste\empresa.dat";
            FileStream fs = new FileStream(Caminho,
                FileMode.Create);

            BinaryFormatter bf = new BinaryFormatter();

            bf.Serialize(fs, obj);
            fs.Close();
        }

        public List<Empresa> Deserializar()
        {
            string Caminho = @"C:\Teste\empresa.dat";
            FileStream fs = new FileStream(Caminho,
                                           FileMode.Open);

            BinaryFormatter bf = new BinaryFormatter();
            var empresas = (List<Empresa>)
                bf.Deserialize(fs);
            fs.Close();
            return empresas;
        }
    }

}