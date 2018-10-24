var postgresql = require('pg');
var chaineDeConnection = 'postgres://postgres:test@localhost:5432/bergerie';
exports.listerMoutons = async function()
{
	console.log("MoutonDAO.listerMoutons()");
	var basededonnees = new postgresql.Client(chaineDeConnection);
	await basededonnees.connect();
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

exports.chercherMouton = async function(numero)
{
	console.log("MoutonDAO.chercherMouton()");
	var basededonnees = new postgresql.Client(chaineDeConnection);
	await basededonnees.connect();
	var sql = 'select * from mouton where id = ' + numero;
	console.log(sql);
	var curseurListeMouton = await basededonnees.query(sql);
	var mouton = curseurListeMouton.rows[0];
	return mouton;
}
