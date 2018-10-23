(function(){

	// Initialize Firebase
    const config = {
    apiKey: "AIzaSyCWmja0zi6SBxOV4vOq5Exm0nA_ZEGoxz8",
    authDomain: "esporteinatel.firebaseapp.com",
    databaseURL: "https://esporteinatel.firebaseio.com",
    projectId: "esporteinatel",
    storageBucket: "esporteinatel.appspot.com",
    messagingSenderId: "579754760416"
    };
    
    firebase.initializeApp(config);

    const dbRefObject = firebase.database().ref().child('cpf')
	alert(0);
	var database = firebase.database();
    database.ref('cpf').once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
            snapshot.forEach(function(data){
                var val = data.val();
                content +='<tr>';
                content += '<td>' + val.nome + '</td>';
                content += '<td>' + val.email + '</td>';
                content += '<td>' + val.cpf + '</td>';
                content += '<td>' + val.url + '</td>';
                content += '<td>' + val.pesquisar + '</td>';
                content += '<td>' + val.valores + '</td>';
                content += '<td>' + val.data + '</td>';
                content += '<td>' + val.cor + '</td>';
                content += '</tr>';
            });
            $('#registros').append(content);
        }
    });
}());