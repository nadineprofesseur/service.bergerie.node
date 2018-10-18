var postgresql = require('pg');
var chaineDeConnection = 'postgres://postgres:test@localhost:5432/bergerie';
exports.listerMoutons = async function()
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
