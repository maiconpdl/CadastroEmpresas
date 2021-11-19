using CadastroEmpresas.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Script.Services;
using System.Web.Services;

namespace CadastroEmpresas.Pages
{
    public partial class Index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (PageUtil.USUARIO_LOGADO == null)
                Page.Response.Redirect(PageUtil.URLInicial + "/Login.aspx");
        }
    }
}