var Empresas = null;
var Empresa = null;
var Filiais = null;
var Filial = null;
var editando = "false";
var editandoFilial = "false";
var tipoDeCadastro = null; //para usar nos botões de Salvar
var empresaAberta = null; //Para Saber qual empresa esta aberta e editar as filiais
var empresaSalva = false;
//Define os atributos da empresa
function newEmpresa(){
	return {
		codigo : '',
		nomeFantasia : '',
		data : '',
		razaoSocial : '',
		situacao : null,
		cooperativa : null,
		qtdFuncionarios : null,
		faturamento : null,
		capitalSocial : null,
		inscricaoEstadual : '',
		cnpj : '',
		cidade : '',
		cep : '',
		bairro : '',
		endereco : '',
		descricao : '',
		email : '',
		telefone : '',
		//filiais : null,
		

	};
}

//Abre um novo Form para cadastro de empresa
function cadastraEmpresa(){
	//Cria uma nova empresa
    editando = "false";
    Empresa = newEmpresa();
    Filiais = [];
	defineCampos();	
	mostraFilial();
	//Define o cadastro como empresa. O botão salvar recebe o ID Empresa
	tipoDeCadastro = "Empresa";

	//Reseta o Form
	$("#ovTXT-Codigo").val(Empresa.codigo);
	$("#ovTXTNomeFantasia").val(Empresa.nomeFantasia);
	$("#ovTXT-DataFundacao").val(Empresa.data);
	$("#ovTXT-RazaoSocial").val(Empresa.razaoSocial);

	let CBSituacao = document.getElementById('ovCB-Situacao');
	CBSituacao.checked = false;

	let CBCooperativa = document.getElementById('ovCB-Cooperativa');
	CBCooperativa.checked = false;

	$("#ovTXT-QtdFuncionarios").val(Empresa.qtdFuncionarios);
	$("#ovTXT-Faturamento").val(Empresa.faturamento);
	$("#ovTxt-CapitalSocial").val(Empresa.capitalSocial);
	$("#ovTXT-InscricaoEstadual").val(Empresa.inscricaoEstadual);
	$("#ovTXT-CNPJ").val(Empresa.cnpj);
	$("#ovTXT-Cidade").val(Empresa.cidade);
	$("#ovTXT-CEP").val(Empresa.cep);
	$("#ovTXT-Bairro").val(Empresa.bairro);
	$("#ovTXT-Endereco").val(Empresa.endereco);
	$("#ovTXT-Descricao").val(Empresa.descricao);
	$("#ovTXT-Email").val(Empresa.email);
	$("#ovTXT-Telefone").val(Empresa.telefone);
	$("#ovTXT-Codigo").prop("disabled", false);
	//Define aba Empresa para abrir como padrão
	$("#empresa-tab").tab("show");
	//Chama função para adicionar os botões.
	mostraBotoesModal();
    //Mostra o Modal Empresa
    document.getElementById('empresaSalva').style.display = 'none';
	$("#modal-cadastroEmpresa").modal("show");
	$("#ovTXT-Codigo").focus();
    $("#filial-tab").addClass(" active");

}

function salvarEmpresa() {

    var Empresa = Empresas.filter(function (empresa, index) {
        return empresa.codigo == $("#ovTXT-Codigo").val();
    })[0];
    
    if (Empresa && (editando == "false")) {
        alert("Codigo da empresa já cadastrado!");
        return;
    } else {

        defineCampos();

        //Cria variável para controle de campos vazios.
        var campoVazio = false;

        /*Verifica se algum campo obrigatório está vazio.
        Se sim, define a borda do campo para vermelho e coloca
        o valor true na variável campoVazio. Todos os campos obrigatórios
        em branco ficarao vermelhos.*/
        if ($("#ovTXT-Codigo").val() == "") {
            $("#ovTXT-Codigo").css("border", '1px solid red');
            campoVazio = true;

        }
        if ($("#ovTXTNomeFantasia").val() == "") {

            $("#ovTXTNomeFantasia").css("border", '1px solid red');
            campoVazio = true;
        }
        if ($("#ovTXT-RazaoSocial").val() == "") {

            $("#ovTXT-RazaoSocial").css("border", '1px solid red');
            campoVazio = true;
        }
        if ($("#ovTXT-CNPJ").val() == "") {

            $("#ovTXT-CNPJ").css("border", '1px solid red');
            campoVazio = true;
        }
        if ($("#ovTXT-Endereco").val() == "") {

            $("#ovTXT-Endereco").css("border", '1px solid red');
            campoVazio = true;
        }
        /*Verifica se a variável campoVazio tem o valor true.
        Se sim, algum campo obrigatório está em branco, mostrando
        mensagem para preencher os campos e para a execução.*/
        if (campoVazio) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }


        if ((!empresaSalva) && (editando == "false")) {
            $("#filial-tab").removeClass(" active");
            document.getElementById('empresaSalva').style.display = 'block';
            $("#filial-tab").tab("show");
            empresaSalva = true;
        } else {
            


            //Pega os valores dos campos e adiciona as variáveis da Empresa
            let CBSituacao = document.getElementById('ovCB-Situacao');
            if (CBSituacao.checked) {

                var Situacao = "on";
            } else {
                var Situacao = "Off";
            }
            $.ajax({
                type: "POST",
                url: "http://localhost:56574/Pages/Empresas.aspx/SalvaEmpresa",
                data: "{Codigo: '" + $("#ovTXT-Codigo").val() + "',"
                    + "NomeFantasia: '" + $("#ovTXTNomeFantasia").val() + "',"
                    + "DataFundacao: '" + $("#ovTXT-DataFundacao").val() + "',"
                    + "RazaoSocial: '" + $("#ovTXT-RazaoSocial").val() + "',"
                    + "Situacao: '" + Situacao + "',"
                    + "Cooperativa: '" + $("#ovCB-Cooperativa").val() + "',"
                    + "QtdFuncionarios: '" + $("#ovTXT-QtdFuncionarios").val() + "',"
                    + "Faturamento: '" + $("#ovTXT-Faturamento").val() + "',"
                    + "CapitalSocial: '" + $("#ovTXT-CapitalSocial").val() + "',"
                    + "InscricaoEstadual: '" + $("#ovTXT-InscricaoEstadual").val() + "',"
                    + "Cidade: '" + $("#ovTXT-Cidade").val() + "',"
                    + "Cep: '" + $("#ovTXT-CEP").val() + "',"
                    + "Bairro: '" + $("#ovTXT-Bairro").val() + "',"
                    + "Endereco: '" + $("#ovTXT-Endereco").val() + "',"
                    + "Email: '" + $("#ovTXT-Email").val() + "',"
                    + "Telefone: '" + $("#ovTXT-Telefone").val() + "',"
                    + "Descricao: '" + $("#ovTXT-Descricao").val() + "',"
                    + "Cnpj: '" + $("#ovTXT-CNPJ").val() + "',"
                    + "Editando: '" + editando + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (resposta) {

                },

            });


            carregaEmpresas();
            
            $("#modal-cadastroEmpresa").modal("hide");
            empresaSalva = false;
            editando = "false";
            

        }

    }

    
}

function carregaEmpresas() {
    Empresas = null;
    Empresas = [];
    $.ajax({
        type: "POST",
        url: "http://localhost:56574/Pages/Empresas.aspx/CarregaEmpresas",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        
        success: function (resposta) {
            var empresas = resposta.d;
            if (empresas != null) {

                for (var i = 0; i < empresas.length; i++) {
                    Empresa = [];
                    Empresa.codigo = empresas[i].Codigo;
                    Empresa.nomeFantasia = empresas[i].NomeFantasia;
                    Empresa.data = empresas[i].Data;
                    Empresa.razaoSocial = empresas[i].RazaoSocial;
                    Empresa.situacao = empresas[i].Situacao;
                    Empresa.cooperativa = empresas[i].Cooperativa;
                    Empresa.qtdFuncionarios = empresas[i].QtdFuncionarios;
                    Empresa.faturamento = empresas[i].Faturamento;
                    Empresa.capitalSocial = empresas[i].CapitalSocial;
                    Empresa.inscricaoEstadual = empresas[i].InscricaoEstadual;
                    Empresa.cidade = empresas[i].Cidade;
                    Empresa.cep = empresas[i].Cep;
                    Empresa.bairro = empresas[i].Bairro;
                    Empresa.endereco = empresas[i].Endereco;
                    Empresa.email = empresas[i].Email;
                    Empresa.telefone = empresas[i].Telefone;
                    Empresa.descricao = empresas[i].Descricao;
                    Empresa.cnpj = empresas[i].Cnpj;
                    if (empresas[i].Situacao == "on") {

                        Empresa.situacao = 1;

                    }

                    Empresas.push(Empresa);

                    mostraEmpresa();


                }
               // mostraEmpresa();
            } else {
                //mostraEmpresa();
            }
        },
        error: function (response) {
            alert("Erro ao salvar " + $("#ovTXTNomeFantasia").val());

        },
        failure: function (response) {
            alert("Failure");
        },
    });
    mostraEmpresa();
}

function mostraEmpresa() {

	/*Lista as Empresas e adiciona os botões editar e remover
	para cada item.*/




	$("#ovTab-Empresas tbody").html("");
	Empresas.map(function(empresa, index){
		let acoesEmpresa = "<button type='button'"
		+ "class='btn btn-EditarEmpresa btn-primary'"
		+ "data-codigoempresa='" + empresa.codigo + "'"
		+ "id='ovBTN-Editar'>"
		+ "<i class='fa fa-pencil-alt'>" + "</i>"
		+ "</button>"
		+ " " 
		+ "<button type='button'"
		+ "class='btn btn-RemoverEmpresa btn-danger'"
		+ "data-codigoempresa='" + empresa.codigo + "'>"

		+ "<i class=\"fa fa-trash-alt\">" + "</i>"
		+ "</button>";
		var situacaoE = null;
		if(empresa.situacao == 1){
			situacaoE = "Ativo";
			}else{
			situacaoE = "Inativo";
		}
		let line = "<tr>"
		+ "<td>" + empresa.codigo + "</td>"
		+ "<td>" + empresa.cnpj + "</td>"
		+ "<td>" + empresa.nomeFantasia + "</td>"
		+ "<td>" + situacaoE + "</td>"
		+ "<td>" + acoesEmpresa + "</td>"
		+ "</tr>";
		$("#ovTab-Empresas tbody").append(line);
	});

	editarEvent();
	eventoRemover();
}

function editarEmpresa(codigoEmpresa) {
    
	Empresa = Empresas.filter(function(empresa, index){
		return empresa.codigo == codigoEmpresa;
	})[0];
	
    
    editando = "true";
    empresaAberta = codigoEmpresa;
    tipoDeCadastro = "Empresa";

	$("#ovTXT-Codigo").val(Empresa.codigo);
	$("#ovTXTNomeFantasia").val(Empresa.nomeFantasia);
	$("#ovTXT-DataFundacao").val(Empresa.data);
	$("#ovTXT-RazaoSocial").val(Empresa.razaoSocial);

	let CBSituacao = document.getElementById('ovCB-Situacao');
	if(Empresa.situacao == 1){
		CBSituacao.checked = true;
	}else{
		CBSituacao.checked = false;
	}

	let CBCooperativa = document.getElementById('ovCB-Cooperativa');
	if(Empresa.cooperativa == 1){
		CBCooperativa.checked = true;
	}else{
		CBCooperativa.checked = false;
	}

	$("#ovTXT-QtdFuncionarios").val(Empresa.qtdFuncionarios);
	$("#ovTXT-Faturamento").val(Empresa.faturamento);
	$("#ovTxt-CapitalSocial").val(Empresa.capitalSocial);
	$("#ovTXT-InscricaoEstadual").val(Empresa.inscricaoEstadual);
	$("#ovTXT-CNPJ").val(Empresa.cnpj);
	$("#ovTXT-Cidade").val(Empresa.cidade);
	$("#ovTXT-CEP").val(Empresa.cep);
	$("#ovTXT-Bairro").val(Empresa.bairro);
	$("#ovTXT-Endereco").val(Empresa.endereco);
	$("#ovTXT-Descricao").val(Empresa.descricao);
	$("#ovTXT-Email").val(Empresa.email);
	$("#ovTXT-Telefone").val(Empresa.telefone);
    $("#empresa-tab").tab("show");
   
    Filiais = [];
    carregaFiliais();
	$("#modal-cadastroEmpresa").modal("show");
    mostraBotoesModal();
	$("#ovTXT-Codigo").focus();
	//Bloqueia a edição do campo código.
	$("#ovTXT-Codigo").prop("disabled", true);
    $("#filial-tab").removeClass(" active");
   
}

function removerEmpresa(codigoEmpresa){
	
	var Empresa = Empresas.filter(function(empresa, index){
		return empresa.codigo == codigoEmpresa;
	})[0];

	if(!confirm("Remover Empresa "
		+ Empresa.nomeFantasia + "?"))
		return;
	
    $.ajax({
        type: "POST",
        url: "http://localhost:56574/Pages/Empresas.aspx/RemoveEmpresa",
        data: "{CodigoEmpresa: '"+ codigoEmpresa +"'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (resposta) {
            carregaEmpresas();

        },
        error: function (response) {
            alert("Erro ao remover " + $("#ovTXTNomeFantasia").val());

        },
        failure: function (response) {
            alert("Failure");
        },
    });
}

//Definindo atributos de uma filial.
function newFilial(){
	return {

		codigo : '',
		descricao: '',
		sigla : '',
		cnpj : '',
		inscricaoEstadual : '',
		situacao : '',
		cidade : '',
		cep : '',
		bairro : '',
		centroDist : '',
		endereco : '',
		telefone : '',
		email: '',
	};
}

function cadastraFilial(){
	//Cria uma nova filial
    Filial = newFilial();
    
	defineCampos();
	/*Gravando que o modal aberto é o de Filial.
	Assim o botão salvar recebe o ID Filial.*/
	tipoDeCadastro = "Filial";
	$("#ovTXT-CodigoFilial").val(Filial.codigo);
	$("#ovTXT-DescricaoFilial").val(Filial.descricao);
	$("#ovTXT-Sigla").val(Filial.sigla);
	$("#ovTXT-cnpjFilial").val(Filial.cnpj);
	$("#ovTXT-InscricaoFilial").val(Filial.inscricaoEstadual);
	let CBSituacaoFilial = document.getElementById('ovCB-SituacaoFilial');
	CBSituacaoFilial.checked = false;
	$("#ovTXT-CidadeFilial").val(Filial.cidade);
	$("#ovTXT-cepFilial").val(Filial.cep);
	$("#ovTXT-BairroFilial").val(Filial.bairro);
	let CBCentroDist = document.getElementById('ovCB-CentroDistribuicao');
	CBCentroDist.checked = false;
	$("#ovTXT-EnderecoFilial").val(Filial.endereco);
	$("#ovTXT-TelefoneFilial").val(Filial.telefone);
	$("#ovTXT-EmailFilial").val(Filial.email);
	mostraBotoesModal();
	$("#ovTXT-CodigoFilial").prop("disabled", false);

	$("#ovTXT-CodigoFilial").focus();
	$("#modal-cadastroFilial").modal("show");

}

function salvarFilial(){

    var Filial = Filiais.filter(function (filial, index) {
        return filial.codigo == $("#ovTXT-CodigoFilial").val();
    })[0];

    if (Filial && (editando == "false")) {
        alert("Codigo da filial já cadastrado!");
        return;
    }

    defineCampos();
    if (Filiais == null) {

        Filiais = [];

    }
	//Verificação de campos obrigatórios vazios.
	var campoVazio = false;
	if($("#ovTXT-CodigoFilial").val() == "") {
		
		$("#ovTXT-CodigoFilial").css("border", '1px solid red');
		campoVazio = true;

	}
		if($("#ovTXT-DescricaoFilial").val() == "") {
			
			$("#ovTXT-DescricaoFilial").css("border", '1px solid red');
			campoVazio = true;
		}
			if($("#ovTXT-cnpjFilial").val() == "") {
			
				$("#ovTXT-cnpjFilial").css("border", '1px solid red');
				campoVazio = true;
			}
				if($("#ovTXT-EnderecoFilial").val() == "") {
					
					$("#ovTXT-EnderecoFilial").css("border", '1px solid red');
					campoVazio = true;
				}
		if(campoVazio){
			alert("Preencha todos os campos obrigatórios!");
			return;
    }

    
    $.ajax({
        type: "POST",
        url: "http://localhost:56574/Pages/Empresas.aspx/CadastraFilial",
        data: "{IdEmpresa: '" + $("#ovTXT-Codigo").val() + "',"
            + "Codigo: '" + $("#ovTXT-CodigoFilial").val() + "',"
            + "Descricao: '" + $("#ovTXT-DescricaoFilial").val() + "',"
            + "Sigla: '" + $("#ovTXT-Sigla").val() + "',"
            + "Cnpj: '" + $("#ovTXT-cnpjFilial").val() + "',"
            + "InscricaoEstadual: '" + $("#ovTXT-InscricaoFilial").val() + "',"
            + "CentroDistribuicao: '" + $("#ovCB-CentroDistribuicao").val() + "',"
            + "Situacao: '" + $("#ovCB-SituacaoFilial").val() + "',"
            + "Endereco: '" + $("#ovTXT-EnderecoFilial").val() + "',"
            + "Bairro: '" + $("#ovTXT-BairroFilial").val() + "',"
            + "Cidade: '" + $("#ovTXT-CidadeFilial").val() + "',"
            + "Cep: '" + $("#ovTXT-cepFilial").val() + "',"
            + "Telefone: '" + $("#ovTXT-TelefoneFilial").val() + "',"
            + "Email: '" + $("#ovTXT-EmailFilial").val() + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (resposta) {

        },
        error: function (resposta){
            alert("Erro ao Salvar!");
        },

        
    });
    carregaFiliais();
            tipoDeCadastro = "Empresa";
            $("#modal-cadastroFilial").modal("hide");
    mostraBotoesModal();
    editandoFilial = "false";
}

function carregaFiliais() {

    

    $.ajax({
        type: "POST",
        url: "http://localhost:56574/Pages/Empresas.aspx/CarregaFiliais",
        data: "{IdEmpresa: '" + $("#ovTXT-Codigo").val() + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (resposta) {
            
            var filiais = resposta.d;
          
            if (filiais != null) {
            
                
                for (var i = 0; i < filiais.length; i++) {
                    Filial = newFilial();
                    
                    if (filiais[i].IdEmpresa == $("#ovTXT-Codigo").val()) {
                        
                        Filial.codigo = filiais[i].Codigo;
                        Filial.descricao = filiais[i].Descricao;
                        Filial.sigla = filiais[i].Sigla;
                        Filial.cnpj = filiais[i].Cnpj;
                        Filial.inscricaoEstadual = filiais[i].InscricaoEstadual;
                        Filial.centroDist = filiais[i].CentroDistribuicao;
                        Filial.situacao = filiais[i].Situacao;
                        Filial.endereco = filiais[i].Endereco;
                        Filial.bairro = filiais[i].Bairro;
                        Filial.cidade = filiais[i].Cidade;
                        Filial.cep = filiais[i].Cep;
                        Filial.telefone = filiais[i].Telefone;
                        Filial.email = filiais[i].Email;
                        Filiais.push(Filial);
                        //mostraFilial();
                    } else {
                        Filiais = null;
                        Filiais = [];
                        //mostraFilial();
                    }
                    //mostraFilial();
                }
               // mostraFilial();
            } else {
                
            }
                        mostraFilial();
        },
        error: function (response) {
            alert("Erro ao salvar " + $("#ovTXT-DescricaoFilial").val());

        },
        failure: function (response) {
            alert("Failure");
        },
    });
    
    //mostraFilial();
    
}

function mostraFilial(){

    //carregaFiliais();
	$("#ovTab-Filiais tbody").html("");
	Filiais.map(function(filial, index){
		let acoesFilial = 

		"<button type='button'"
		+ "class='btn btn-EditarFilial btn-primary'"
		+ "data-codigofilial='" + filial.codigo + "'"
		+ "id='ovBTN-EditarF'>"
		+ "<i class='fa fa-pencil-alt'>" + "</i>"
		+ "</button>"
		+ " " 
		+ "<button type='button'"
		+ "class='btn btn-RemoverFilial btn-danger'"
		+ "data-codigofilial='" + filial.codigo + "'"
		+ "data-bs-dismiss='modal-cadastroFilial'>"
		+ "<i class=\"fa fa-trash-alt\">" + "</i>"
		+ "</button>";
		var situacaoF = null;
		if(filial.situacao == 1){
			situacaoF = "Ativo";
			}else{
			situacaoF = "Inativo";
		}

		let line = "<tr>"
		+ "<td>" + filial.codigo + "</td>"
		+ "<td>" + filial.cnpj + "</td>"
		+ "<td>" + filial.descricao + "</td>"
		+ "<td>" + situacaoF + "</td>"
		+ "<td>" + acoesFilial + "</td>"
		+ "</tr>";
		$("#ovTab-Filiais tbody").append(line);
	});

    editarEvent();
	eventoRemover();
}

function editarFilial(codigoFilial){
    
    tipoDeCadastro = "Filial";
    editandoFilial = "true";
    
	Filial = Filiais.filter(function(filial, index){
		return filial.codigo == codigoFilial;
	})[0];
    console.log(codigoFilial);
	$("#ovTXT-CodigoFilial").val(Filial.codigo);
	$("#ovTXT-DescricaoFilial").val(Filial.descricao);
	$("#ovTXT-Sigla").val(Filial.sigla);
	$("#ovTXT-cnpjFilial").val(Filial.cnpj);
	$("#ovTXT-InscricaoFilial").val(Filial.inscricaoEstadual);

	let CBSituacaoFilial = document.getElementById('ovCB-SituacaoFilial');
	if(Filial.situacao == 1){
		CBSituacaoFilial.checked = true;
	}else{
		CBSituacaoFilial.checked = false;
	}

	let CBCentroDist = document.getElementById('ovCB-CentroDistribuicao');
	if(Filial.cooperativa == 1){
		CBCentroDist.checked = true;
	}else{
		CBCentroDist.checked = false;
	}


	$("#ovTXT-CidadeFilial").val(Filial.cidade);
	$("#ovTXT-cepFilial").val(Filial.cep);
	$("#ovTXT-BairroFilial").val(Filial.bairro);	
	$("#ovTXT-EnderecoFilial").val(Filial.endereco);
	$("#ovTXT-TelefoneFilial").val(Filial.telefone);
	$("#ovTXT-EmailFilial").val(Filial.email);
	
	mostraBotoesModal();
	$("#modal-cadastroFilial").modal("show");
	$("#ovTXT-CodigoFilial").focus();
	$("#ovTXT-CodigoFilial").prop("disabled", true);

}

function removerFilial(codigoFilial){
	
	var Filial = Filiais.filter(function(filial, index){
		return filial.codigo == codigoFilial;
	})[0];

	if(!confirm("Remover a filial "
		+ Filial.descricao + "?"))
		return;
	
    $.ajax({
        type: "POST",
        url: "http://localhost:56574/Pages/Empresas.aspx/RemoveFilial",
        data: "{CodigoEmpresa: '" + $("#ovTXT-Codigo").val() + "',"
             + "CodigoFilial: '" + codigoFilial + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (resposta) {
            carregaFiliais();

        },
        error: function (response) {
            alert("Erro ao remover " + $("#ovTXT-DescricaoFilial").val());

        },
        failure: function (response) {
            alert("Failure");
        },
    });
}

function editarEvent(){
	/*definindo ação para os botões de edição das listas de
	Empresas e Filiais*/
	$(".btn-EditarEmpresa").each(function(indice, btn){
		$(btn).on("click", function(){
			var codigoEmpresa = $(this).data("codigoempresa");
			editarEmpresa(codigoEmpresa);
			
		});
	});

	$(".btn-EditarFilial").each(function(indice, btn){
		$(btn).on("click", function(){
            var codigoFilial = $(this).data("codigofilial");
            editarFilial(codigoFilial);
		});
	});
}

function eventoRemover(){
	/*definindo ação para os botões de remoção das listas de
	Empresas e Filiais*/
	$(".btn-RemoverEmpresa").each(function(indice, btn){
		$(btn).on("click", function(){
			var codigoEmpresa = $(this).data("codigoempresa");
			removerEmpresa(codigoEmpresa);
		});
	});

	$(".btn-RemoverFilial").each(function(indice, btn){
		$(btn).on("click", function(){
			var codigoFilial = $(this).data("codigofilial");
			removerFilial(codigoFilial);
		});
	});
}

function mostraBotoesModal(){
	/*Definindo os botões Salvar e Cancelar.
	Os botões receberão o ID a partir do modal que está aberto
	na variável tipoDeCadastro.*/
	$(".divBTN-Modal").html("");
	let botoes = 
	"<button type='submit'" 
	+ "class='btn'"
	+ "id='btn-Salvar" + tipoDeCadastro + "'>Salvar</button>"
	+ " "
	+ "<button type='button'"
	+ "class='btn btn-danger'"
	+ "id='ovBTN-Cancela" + tipoDeCadastro + "'"
	+ "data-bs-dismiss='modal'>Cancelar</button>";
	let line = botoes;
	$(".divBTN-Modal").append(line);
}

function defineCampos(){
	/*Define os padrões dos campos obrigatórios.
	Quando o campo ficar vermelho e o modal for fechado,
	ao abrir um novo cadastro os campos voltam ao normal.*/
	$("#ovTXT-Codigo").css("border", '1px solid grey');
	$("#ovTXTNomeFantasia").css("border", '1px solid grey');
	$("#ovTXT-RazaoSocial").css("border", '1px solid grey');
	$("#ovTXT-CNPJ").css("border", '1px solid grey');
	$("#ovTXT-Endereco").css("border", '1px solid grey');
	$("#ovTXT-CodigoFilial").css("border", '1px solid grey');
	$("#ovTXT-DescricaoFilial").css("border", '1px solid grey');
	$("#ovTXT-cnpjFilial").css("border", '1px solid grey');
	$("#ovTXT-EnderecoFilial").css("border", '1px solid grey');
}

$(document).ready(function(){
    Empresas = [];
    Filiais = [];
    carregaEmpresas();
   

	//Definindo quais functions serão chamadas ao click em cada botão.
	$(document).on("click", "#ovBTN-AdicionarEmpresa",cadastraEmpresa);
	$(document).on("click", "#btn-SalvarEmpresa", salvarEmpresa);
	$(document).on("click", "#ovBTN-EditarEmpresa", editarEmpresa);
	$(document).on("click", "#ovBTN-AdicionarFilial", cadastraFilial);
	$(document).on("click", "#btn-SalvarFilial", salvarFilial);
    $(document).on("click", "#ovBTN-EditarF", editarFilial);
   
    

	editarEvent();
	eventoRemover();

	
});
