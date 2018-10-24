function eventoTabela() {

  var tabela = document.getElementById("minhaTabela");
  var linhas = tabela.getElementsByTagName("tr");

  for(var i = 0; i < linhas.length; i++){
  	var linha = linhas[i];
    linha.addEventListener("click", function(){
    	//Adicionar ao atual
  		selLinha(this, false); //Selecione apenas um
      //selLinha(this, true); //Selecione quantos quiser
  	});
  }
  /**
  Caso passe true, você pode selecionar multiplas linhas.
  Caso passe false, você só pode selecionar uma linha por vez.
  **/

  function selLinha(linha, multiplos){
  	if(!multiplos){
    	var linhas = linha.parentElement.getElementsByTagName("tr");
      for(var i = 0; i < linhas.length; i++){
        var linha_ = linhas[i];
        linha_.classList.remove("selecionado");
      }
    }
    linha.classList.toggle("selecionado");
  }

  /**
  Exemplo de como capturar os dados
  **/
  var btnEditar = document.getElementById("editar");

  btnEditar.addEventListener("click", function(){
  	var selecionados = tabela.getElementsByClassName("selecionado");
    //Verificar se eestá selecionado
    if(selecionados.length < 1){
    	alert("Selecione pelo menos uma linha");
      return false;
    }

    var dados = "";

    for(var i = 0; i < selecionados.length; i++){
    	var selecionado = selecionados[i];
      selecionado = selecionado.getElementsByTagName("td");
      dados +=
      "Nome: " + selecionado[4].innerHTML + "\n"+
      "Email: " + selecionado[2].innerHTML + "\n" +
      "CPF: " + selecionado[0].innerHTML + "\n" +
      "Matricula: " + selecionado[3].innerHTML
    }

    alert(dados);
  });

  var btnExcluir = document.getElementById("excluir");
  btnExcluir.addEventListener("click", function(){
    const dbPessoasRef = firebase.database().ref().child('cpf/');

    var selecionados = tabela.getElementsByClassName("selecionado");
    //Verificar se eestá selecionado
    if(selecionados.length < 1){
    	alert("Selecione pelo menos uma linha");
      return false;
    }

    var cpf = "";

    for(var i = 0; i < selecionados.length; i++){
    	var selecionado = selecionados[i];
      selecionado = selecionado.getElementsByTagName("td");
      cpf += selecionado[0].innerHTML;
    }

    dbPessoasRef.child(cpf).remove();
  });
}
