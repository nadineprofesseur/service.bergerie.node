var moutonDAO = require('./MoutonDAO');
var http = require('http');
var serveur = http.createServer(
	function(requete, reponse) 
	{
		// appel postgres dans evenement de requete http
		moutonDAO.listerMoutons().then(console.log);
		reponse.end('Donnees listées');
	}
);
serveur.listen(8080);


