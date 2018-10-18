var moutonDAO = require('./MoutonDAO');
var http = require('http');
var serveur = http.createServer(
	async function(requete, reponse) 
	{
		var listeMoutons = await moutonDAO.listerMoutons();
		reponse.end(JSON.stringify(listeMoutons));
	}
);
serveur.listen(8080);


