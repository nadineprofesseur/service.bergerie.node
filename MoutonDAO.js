var postgresql = require('pg');
var chaineDeConnection = 'postgres://postgres:test@localhost:5432/bergerie';
exports.listerMoutons = async function()
{
	var basededonnees = new postgresql.Client(chaineDeConnection);
	await basededonnees.connect();
	//console.log('base de donnees ' + JSON.stringify(basededonnees));
	var curseurListeMouton = await basededonnees.query('select * from mouton');

	var listeMoutons = {}; var position = 0;
	curseurListeMouton.rows.forEach
	(
		mouton=>
		{
			console.log("DAO:" + mouton.nom + " (" + mouton.couleur + "," + mouton.naissance + ")");
			listeMoutons[position++] = mouton;
		}
	);
	return listeMoutons;
}
