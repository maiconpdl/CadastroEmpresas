using CadastroEmpresas.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Web;

namespace CadastroEmpresas.Controller.Controladores
{
    public class FilialController
    {

        public void Serializar(object obj)
        {
            string Caminho = @"C:\Teste\Filiais.dat";
            FileStream fs = new FileStream(Caminho,
                FileMode.Create);
            BinaryFormatter bf = new BinaryFormatter();

            bf.Serialize(fs, obj);
            fs.Close();

        }

        public List<Filial> Deserializar()
        {

            string Caminho = @"C:\Teste\Filiais.dat";
            if (!File.Exists(Caminho))
            {
                List<Filial> fil = new List<Filial>();
                return fil;

            }
            FileStream fs = new FileStream(Caminho,
                                           FileMode.Open);

            BinaryFormatter bf = new BinaryFormatter();
            var filiais = (List<Filial>)
                bf.Deserialize(fs);
            fs.Close();
            return filiais;
        }


    }
}