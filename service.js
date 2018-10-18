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
			reponse.end('match un seul mouton ' + numero);
		}
	}
	if('POST' === requete.method)
	{
		
	}
	reponse.end('');
}

var serveur = http.createServer(repondre);
serveur.listen(8080);
