<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Empresas.aspx.cs" MasterPageFile="~/Page.Master" Inherits="CadastroEmpresas.Pages.Empresas" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2"
    ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
  
<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<link href="../Scripts/fontawesome-free-5.15.4-web/css/all.css" rel="stylesheet" />
		<link rel="stylesheet" type="text/css" href="../Scripts/css.css"/>
		<link rel="stylesheet" type="text/css" href="../Scripts/bootstrap.min.css"/>
		<script src="../Scripts/jquery-3.6.0.min.js"></script>
        <script src="../Scripts/Empresas.js"></script>
        <script src="../Scripts/javascript.js"></script>
		<script src="../Scripts/bootstrap.bundle.min.js"></script>
		


</head>

<div class="modal modal-cadastroEmpresa" id="modal-cadastroEmpresa" tabindex="-1">
			<div class="modal-dialog modal-xl">
				<div class="modal-content">
					<div class="modal-header" style="background-color: #ffffff;">
						<label style="font-weight: bold; font-size: 20px;">Cadastro da Empresa</label>
                        
						<button type="button" id="btn-Close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
                    <div id="empresaSalva">
                        <label style="margin-left: 10px; color: green;">A Empresa foi salva!</label>

                    </div>
					<div class="modal-body" style="background-color: #ffffff;">



						<ul class="nav nav-tabs" id="myTab">
							<li class="nav-item">
								<button class="nav-link active"
								id="empresa-tab" 
								data-bs-toggle="tab" 
								data-bs-target="#formEmpresa" 
								type="button">Dados Empresa</button>
							</li>
							<li class="nav-item">
								<button class="nav-link" 
								id="filial-tab"
								data-bs-toggle="tab"
								data-bs-target="#formFilial"
								type="button">Filial</button>
							</li>

						</ul>

						<div class="tab-content">
							
							<div class="form-group tab-pane active" id="formEmpresa">
								<div class="row">
									<div class="col-md-2">	       			
										<label class="campos-modal col-md-12">Código
											<label class="campoObrigatorio">*</label></label>
											<input class="campos-modal col-md-12" id="ovTXT-Codigo" type="text" placeholder="Código"/>	       
										</div>
										<div class="col-md-6">	       			
											<label class="campos-modal col-md-12">Nome Fantasia<label class="campoObrigatorio">*</label></label>
											<input class="campos-modal col-md-12" id="ovTXTNomeFantasia" type="text"/>	       			
										</div>
										<div class="col-md-2">
											<label class="campos-modal col-md-12">Data Fundação</label>
											<input class="campos-modal col-md-12" id="ovTXT-DataFundacao" type="date"/>
										</div>
										<div class="col-md-2">
											<div class="col-md-12" style="margin-top: 37px;">
												<input class="campos-modal form-check-input ativaCB" id="ovCB-Situacao" type="checkbox"/>
												<label class="campos-modal">Ativa</label>
											</div>

										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<label class="campos-modal col-md-12">Razão Social<label class="campoObrigatorio">*</label></label>
											<input class="campos-modal col-md-12" id="ovTXT-RazaoSocial" type="text"/>
										</div>
										<div class="col-md-4">
											<label class="campos-modal col-md-12">CNPJ
												<label class="campoObrigatorio">*</label></label>
												<input class="campos-modal col-md-12" id="ovTXT-CNPJ" type="text"/>
											</div>
											<div class="col-md-2">
												<div class="col-md-12" style="margin-top: 37px;">
													<input class="campos-modal form-check-input cooperativaCB" id="ovCB-Cooperativa" type="checkbox"/>
													<label class="campos-modal">Cooperativa</label>
												</div>
											</div>

										</div>
										<div class="row">	       		
											<div class="col-md-2">
												<label class="campos-modal col-md-12">Qtd. Funcionários</label>
												<input class="campos-modal col-md-12" id="ovTXT-QtdFuncionarios" type="text"/>
											</div>
											<div class="col-md-3">
												<label class="campos-modal col-md-12">Inscrição Estadual</label>
												<input class="campos-modal col-md-12" id="ovTXT-InscricaoEstadual" type="text"/>	
											</div>
											<div class="col-md-4">
												<label class="campos-modal col-md-12">Faturamento</label>
												<input class="campos-modal col-md-12" id="ovTXT-Faturamento" type="text"/>	
											</div>
											<div class="col-md-3">
												<label class="campos-modal col-md-12">Capital Social</label>
												<input class="campos-modal col-md-12" id="ovTxt-CapitalSocial" type="text"/>
											</div>
										</div>
										<div class="row">
											<div class="col-md-8">
												<label class="campos-modal col-md-12">Endereço<label class="campoObrigatorio">*</label></label>
												<input class="campos-modal col-md-12" id="ovTXT-Endereco" type="text"/>
											</div>
											<div class="col-md-4">
												<label class="campos-modal col-md-12">Bairro</label>
												<input class="campos-modal col-md-12" id="ovTXT-Bairro" type="text"/>	
											</div>	       		
										</div>
										<div class="row">
											<div class="col-md-7">
												<label class="campos-modal col-md-12">Cidade</label>
												<input class="campos-modal col-md-12" id="ovTXT-Cidade" type="text"/>	
											</div>
											<div class="col-md-2">
												<label class="campos-modal col-md-12">CEP</label>
												<input class="campos-modal col-md-12" id="ovTXT-CEP" type="text"/>
											</div>
											<div class="col-md-3">
												<label class="campos-modal col-md-12">Telefone</label>
												<input class="campos-modal col-md-12" id="ovTXT-Telefone" type="text"/>
											</div>	       		
										</div>
										<div class="row">
											<div class="col-md-12">
												<label class="campos-modal col-md-12">E-mail</label>
												<input class="campos-modal col-md-6" id="ovTXT-Email" type="text"/>
											</div>	       		
										</div>
										<div class="row">	       		
											<div class="col-md-12">
												<label class="campos-modal col-md-12">Descrição</label>
												<textarea class="campos-modal col-md-12" id="ovTXT-Descricao" placeholder="Descrição..."></textarea>	       			
											</div>
										</div>	       	
									</div>



									<div class="form-group tab-pane" id="formFilial">
										<div class="form-group mover-direita">
											<button type="button" class="botoes-modal btn btn-primary" id="ovBTN-AdicionarFilial">
												<i class="fa fa-plus-circle"></i> Adicionar
											</button>
										</div>
										<div class="container mover-baixo">
											<h3>Filiais</h3>
											<div class="form-group mover-direita">
												<div class="row">
													<div class="col-md-12">
														<table id="ovTab-Filiais" class="table">
															<thead>
																<th>CÓDIGO</th>
																<th>CNPJ</th>
																<th>DESCRIÇÃO</th>
																<th>SITUAÇÃO</th>
																<tbody></tbody>
															</thead>
														</table>
													</div>
												</div>
											</div>	
										</div>
									</div>
								</div>


							</div>

							<table id="tabBotoesEmpresa">
								<thead>
									<tbody>

									</tbody>
								</thead>
							</table>

							<div class="mover-direita botoes-modal divBTN-Modal">

							</div>	      
							<div class="modal-footer">

							</div>
						</div>
					</div>
				</div>


				<div class="modal" id="modal-cadastroFilial" tabindex="-1">
					<div class="modal-dialog modal-xl">
						<div class="modal-content">
							<div class="modal-header" style="background-color: #ffffff;">

								<label style="font-weight: bold; font-size: 20px;">Dados da Filial</label>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>

							<div class="modal-body" style="background-color: #ffffff;">

								<div class="form-group" id="formFilial">
									<div class="row">
										<div class="col-md-2">	       			
											<label class="campos-modal col-md-12">Código
												<label class="campoObrigatorio">*</label></label>
												<input class="campos-modal col-md-12" id="ovTXT-CodigoFilial" placeholder="Código" type="text" required/>	       
											</div>
											<div class="col-md-8">	       			
												<label class="campos-modal col-md-12">Descrição
													<label class="campoObrigatorio">*</label></label>
													<input class="campos-modal col-md-12" id="ovTXT-DescricaoFilial" type="text"/>	       			
												</div>
												<div class="col-md-2">
													<label class="campos-modal col-md-12">Sigla</label>
													<input class="campos-modal col-md-12" id="ovTXT-Sigla" type="text"/>
												</div>

											</div>
											<div class="row">
												<div class="col-md-4">
													<label class="campos-modal col-md-12">CNPJ
														<label class="campoObrigatorio">*</label></label>
														<input class="campos-modal col-md-12" id="ovTXT-cnpjFilial" type="text"/>
													</div>
													<div class="col-md-4">
														<label class="campos-modal col-md-12">Inscrição Estadual</label>
														<input class="campos-modal col-md-12" id="ovTXT-InscricaoFilial" type="text"/>	
													</div>
													<div class="col-md-4">

														<input class="campos-modal form-check-input cooperativaCB col-md-2" 
														style="margin-top: 42px" id="ovCB-CentroDistribuicao" type="checkbox"/>
														<label class="campos-modal col-md-6" style="margin-top: 45px;">Centro de Distribuição</label>


														<input class="campos-modal form-check-input ativaCB"
														style="margin-top: 42px;" id="ovCB-SituacaoFilial" type="checkbox"/>
														<label class="campos-modal">Ativa</label>


													</div>

												</div>
												<div class="row">	       		
													<div class="col-md-8">
														<label class="campos-modal col-md-12">Endereço
															<label class="campoObrigatorio">*</label>
														</label>
														<input class="campos-modal col-md-12" id="ovTXT-EnderecoFilial" type="text"/>
													</div>

													<div class="col-md-4">
														<label class="campos-modal col-md-12">Bairro</label>
														<input class="campos-modal col-md-12" id="ovTXT-BairroFilial" type="text"/>	
													</div>

												</div>
												<div class="row">
													<div class="col-md-7">
														<label class="campos-modal col-md-12">Cidade</label>
														<input class="campos-modal col-md-12" id="ovTXT-CidadeFilial" type="text"/>
													</div>
													<div class="col-md-2">
														<label class="campos-modal col-md-12">CEP</label>
														<input class="campos-modal col-md-12" id="ovTXT-cepFilial" type="text"/>	
													</div>
													<div class="col-md-3">
														<label class="campos-modal col-md-12">Telefone</label>
														<input class="campos-modal col-md-12" id="ovTXT-TelefoneFilial" type="text"/>	
													</div>	       		
												</div>   	
												<div class="row">

													<div class="col-md-6">
														<label class="campos-modal col-md-12">Email</label>
														<input class="campos-modal col-md-12" id="ovTXT-EmailFilial" type="text"/>	
													</div>	       		
												</div> 	       		       	
											</div>






											<div class="mover-direita botoes-modal divBTN-Modal">

											</div>


										</div>



										<div class="modal-footer">

										</div>
									</div>
								</div>
							</div>





							<div class="container mover-baixo">
								<h3>Empresas</h3>
								<div class="form-group">
									<div class="row">
										<div class="col-md-12">
											<div class="form-group mover-direita">
												<button type="button" class="btn btn-primary" id="ovBTN-AdicionarEmpresa"><i class="fa fa-plus-circle"></i> Adicionar</button>
											</div>
											<table id="ovTab-Empresas" class="table">
												<thead>
													<th>CÓDIGO</th>
													<th>CNPJ</th>
													<th>NOME FANTASIA</th>
													<th>SITUAÇÃO</th>
													<th>AÇÕES</th>							
													<tbody></tbody>
												</thead>
											</table>
										</div>
									</div>
								</div>	
							</div>

</asp:Content>
