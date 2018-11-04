function validacao(){
	var nome = $("#nome").val();
	var cpf = $("#cpf").val();

	//primeira validação
	if (nome == "") {
		alert("Por favor digite seu nome.");
		$("nome").focus();
		return false; //Mantem na pagina até o campo ser preenchido
	}

	//segunda validação
	if (cpf == "") {
		alert("Por favor digite seu CPF.");
		$("cpf").focus();
		return false; //Mantem na pagina até o campo ser preenchido
	}
	return true
}
