using CadastroEmpresas.Modelo.Entidades;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace CadastroEmpresas.Controller.Controladores
{
    public class EmpresaController
    {
       

        public void Serializar(object obj)
        {
            string Caminho = @"C:\Teste\Empresas.dat";
            FileStream fs;
            BinaryFormatter bf;
            fs = new FileStream(Caminho,
            FileMode.Create,FileAccess.Write, FileShare.ReadWrite);
            try
            {
                bf = new BinaryFormatter();

                bf.Serialize(fs, obj);
                
                fs.Close();
            }
            catch
            {
                fs.Close();
            }
            finally
            {
                fs.Close();
            }
            
        }

        public List<Empresa> Deserializar()
        {
            
            string Caminho = @"C:\Teste\Empresas.dat";
            if (!File.Exists(Caminho))
            {
                List<Empresa> emp = new List<Empresa>();
                return emp;

            }
            FileStream fs;
            BinaryFormatter bf;
            fs = new FileStream(Caminho,
                                        FileMode.Open, FileAccess.ReadWrite, FileShare.ReadWrite);
            try
            {
                bf = new BinaryFormatter();
                var empresas = (List<Empresa>)
                    bf.Deserialize(fs);
                fs.Close();
                return empresas;
            }
            catch
            {
                fs.Close();
            }
            finally
            {
                fs.Close();
            }

            fs = new FileStream(Caminho,
                                           FileMode.Open, FileAccess.ReadWrite, FileShare.ReadWrite);
            bf = new BinaryFormatter();
            var empresas2 = (List<Empresa>)
                bf.Deserialize(fs);
            fs.Close();
            return empresas2;

        }
    }

}