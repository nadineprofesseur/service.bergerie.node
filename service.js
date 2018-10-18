var moutonDAO = require('./MoutonDAO');
var http = require('http');
var serveur = http.createServer(
	function(requete, reponse) 
	{
		var listeMoutons = moutonDAO.listerMoutons().then(console.log);
		for(position in listeMoutons)
		{
			console.log(JSON.stringify(listeMoutons[position]));
		}
		reponse.end('Donnees listées');
	}
);
serveur.listen(8080);


