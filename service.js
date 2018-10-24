var moutonDAO = require('./MoutonDAO');
var http = require('http');

var repondre = async function(requete, reponse) 
{	
	if('GET' === requete.method)
	{
		if('/mouton/liste' === requete.url || '/mouton/liste/' === requete.url)
		{
			var listeMoutons = await moutonDAO.listerMoutons();
			reponse.end(JSON.stringify(listeMoutons));			
		}
		if(trouvailles = requete.url.match(/\/mouton\/([0-9]+)\/?/))
		{
			numero = trouvailles[1];
			console.log('match un seul mouton ' + numero);
			
			var mouton = await moutonDAO.chercherMouton(numero);
			console.log('mouton recu par le service ' + JSON.stringify(mouton));
			reponse.end(JSON.stringify(mouton));
		}
	}
	if('POST' === requete.method)
	{
		
	}
	reponse.end('');
}

var serveur = http.createServer(repondre);
serveur.listen(8080);
