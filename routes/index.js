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
  response.render('index', { title: 'Inicial' , pessoa: pessoa });
});

/* POST home page. */
router.post('/cadastrar-pessoa', function(request, response, next) {

	var nome = request.body.nome;
	var email = request.body.email;
	var data = request.body.data;
	var cpf = request.body.cpf;

	hash = {
		nome: request.body.nome,
		email: request.body.email,
		data: request.body.data,
		cpf: request.body.cpf
	}	

	writeUserData(nome, email, data, cpf);

	pessoa.push(hash);
	console.log("--------------");
	console.log(pessoa);
	console.log("--------------");

  response.render('index', { title: 'Cadastrar Pessoa', pessoa: pessoa });

  next();
});

function writeUserData(nome, email, data, cpf) {
	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	}else{
		firebase.database().ref('/'+cpf).set({
			nome: nome,
			email: email,
			data: data,
			cpf: cpf
		});
	}
}

module.exports = router;
