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
	console.log("MoutonDAO.chercherMouton("+numero+")");
	var basededonnees = new postgresql.Client(chaineDeConnection);
	await basededonnees.connect();
	var sql = 'select * from mouton where id = ' + numero;
	console.log(sql);
	var curseurListeMouton = await basededonnees.query(sql);
	var mouton = curseurListeMouton.rows[0];
	return mouton;
}

exports.ajouterMouton = async function(mouton)
{
	console.log("MoutonDAO.ajouterMouton("+JSON.stringify(mouton)+")");
	var basededonnees = new postgresql.Client(chaineDeConnection);
	await basededonnees.connect();
	var sql = "insert into mouton(nom, couleur, naissance, poids) values('{{nom}}','{{couleur}}','{{naissance}}','{{poids}}')";
	sql = sql.replace("{{nom}}", mouton.nom).replace("{{couleur}}", mouton.couleur).replace("{{naissance}}", mouton.naissance).replace("{{poids}}", mouton.poids);
	console.log(sql);
	basededonnees.query(sql); //await 
}


