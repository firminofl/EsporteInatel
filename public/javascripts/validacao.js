function validacao(){
	var nome = $("#nome").val();
	var email = $("#email").val();

	//primeira validação
	if (nome == "") {
		alert("Por favor digite seu nome.");
		$("nome").focus();
		return false; //Mantem na pagina até o campo ser preenchido
	}

	//segunda validação
	if (email == "") {
		alert("Por favor digite seu email.");
		$("email").focus();
		return false; //Mantem na pagina até o campo ser preenchido
	}
	return true
}