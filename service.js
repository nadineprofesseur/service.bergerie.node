var moutonDAO = require('./MoutonDAO');
var http = require('http');

var repondre = async function(requete, reponse) 
{
	var listeMoutons = await moutonDAO.listerMoutons();
	reponse.end(JSON.stringify(listeMoutons));
}

var serveur = http.createServer(repondre);
serveur.listen(8080);
