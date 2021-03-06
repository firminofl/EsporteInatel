var express = require('express');
var router = express.Router();
var pessoa =  [];
var firebase = require("firebase");


// Initialize Firebase
var config = {
apiKey: "AIzaSyCWmja0zi6SBxOV4vOq5Exm0nA_ZEGoxz8",
authDomain: "esporteinatel.firebaseapp.com",
databaseURL: "https://esporteinatel.firebaseio.com",
projectId: "esporteinatel",
storageBucket: "esporteinatel.appspot.com",
messagingSenderId: "579754760416"
};

/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', { title: 'Esportes inatel'});
  next();
});

router.get('/listar-pessoas', function(request, response, next) {
  response.render('lista', { title: 'Alunos cadastrados'});
  next();
});

router.get('/abrir-form', function(request, response, next) {
  response.render('formulario', { title: 'Cadastrar aluno'});
  next();
});

/* POST home page. */
router.post('/cadastrar-pessoa/', function(request, response, next) {

	var nome = request.body.nome;
	var cpf = request.body.cpf;
	var email = request.body.email;
	var matricula = request.body.matricula;
  /*
	var data = request.body.data;
	var url = request.body.url;
	var pesquisar = request.body.pesquisar;
	var valores = request.body.valores;
	var cor = request.body.cor;

	hash = {
		nome: request.body.nome,
		cpf: request.body.cpf,
		email: request.body.email,
	  matricula: request.body.matricula,
	  data: request.body.data

		url: request.body.url,
		pesquisar: request.body.pesquisar,
		valores: request.body.valores,
		cor: request.body.cor
	}

	pessoa.push(hash);
	console.log("--------------");
	console.log(pessoa);
	console.log("--------------");
	*/
	writeUserData(nome, cpf, email, matricula);

	response.render('formulario', { title:  'Cadastrar aluno'});
	next();
});

function writeUserData(nome, cpf, email, matricula) {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      firebase.database().ref().child('/cpf').child(cpf).set({
  		nome: nome,
  		cpf: cpf,
  		email: email,
  		matricula: matricula,
  		//data: data
  		});
      console.log('Cadastro efetuado com sucesso!');
    }else{
      firebase.database().ref().child('/cpf').child(cpf).set({
  		nome: nome,
  		cpf: cpf,
  		email: email,
  		matricula: matricula,
  		//data: data
  		});
      console.log('Cadastro efetuado com sucesso!');
    }
}

module.exports = router;
