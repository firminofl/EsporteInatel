(function() {

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

  //Get element
  const table = document.querySelector('#minhaTabela tbody');

  //Create reference
  //const dbRefObject = firebase.database().ref().child('cpf');

  //Sync Object changes
  /*dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 4);
  });*/

  const dbPessoasRef = firebase.database().ref().child('cpf');
  dbPessoasRef.on('value', snap => {
    console.log(dbPessoasRef);
    while(table.hasChildNodes()) {
	     table.removeChild(table.firstChild);
    }

    var pessoas = snap.val();

    for(var i in pessoas) {
      var row = table.insertRow(-1);

      for(var j in pessoas[i]) {
	       cell = row.insertCell(-1);
	       cell.innerHTML = pessoas[i][j];
      }
    }
  });
}());
