var postgresql = require('pg');
var chaineDeConnection = 'postgres://postgres:test@localhost:5432/bergerie';
async function listerMoutons()
{
	var basededonnees = new postgresql.Client(chaineDeConnection);
	await basededonnees.connect();
	//console.log('base de donnees ' + JSON.stringify(basededonnees));
	var listeMouton = await basededonnees.query('select * from mouton');
	//console.log(listeMouton);
	listeMouton.rows.forEach
	(
		mouton=>
		{
			console.log(mouton.nom + " (" + mouton.couleur + "," 
					+ mouton.naissance + ")");
		}
	);
}

var http = require('http');
var serveur = http.createServer(
	function(requete, reponse) 
	{
		// appel postgres dans evenement de requete http
		listerMoutons().then(console.log);
		reponse.end('Donnees listées');
	}
);
serveur.listen(8080);


